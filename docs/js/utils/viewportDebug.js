// docs/js/utils/viewportDebug.js
// ---------------------------------------------
// Módulo de diagnóstico de viewport (fullscreen, pantallas raras, DevTools, etc.)
// Muestra un badge solo cuando detecta algo anómalo (por defecto).
// Puedes configurarlo desde initViewportDebug().
// ---------------------------------------------

const DEFAULT_OPTIONS = {
  alwaysVisible: false, // true = siempre se ve el badge (modo dev)
  logToConsole: true, // escribir o no en consola
  consoleLabel: '[ViewportDebug]',
}

let options = { ...DEFAULT_OPTIONS }
let badgeEl = null

// ------------------------
// 1. Métricas del viewport
// ------------------------
export function computeViewportMetrics() {
  const innerW = window.innerWidth
  const innerH = window.innerHeight
  const screenW = window.screen.width
  const screenH = window.screen.height
  const dpr = window.devicePixelRatio || 1
  const vv = window.visualViewport || null

  return {
    innerW,
    innerH,
    screenW,
    screenH,
    dpr,
    visualW: vv ? vv.width : null,
    visualH: vv ? vv.height : null,
  }
}

// --------------------------------------
// 2. Heurística: ¿el viewport es raro?
// --------------------------------------
export function isViewportAnomalous(m) {
  // Caso típico: pantalla vertical con escala / DevTools
  if (m.screenW && m.screenW < 500 && m.innerW > m.screenW * 1.3) {
    return true
  }

  // Diferencia muy grande entre innerWidth y screenWidth
  if (m.screenW && m.innerW > m.screenW * 1.5) {
    return true
  }

  // Si tenemos visualViewport, comparar también
  if (m.visualW && m.innerW > m.visualW * 1.5) {
    return true
  }

  return false
}

// --------------------------------------
// 3. Crear / actualizar el badge visual
// --------------------------------------
function ensureBadge() {
  if (badgeEl) return badgeEl

  const el = document.createElement('div')
  el.id = 'viewport-debug'
  document.body.appendChild(el)
  badgeEl = el
  return el
}

function formatNumber(value) {
  if (value == null) return '-'
  // Si es entero, dejarlo tal cual. Si no, 1 decimal.
  return Number.isInteger(value) ? String(value) : value.toFixed(1)
}

function renderBadge(metrics, isWeird) {
  const el = ensureBadge()

  const { innerW, innerH, screenW, screenH, visualW, visualH, dpr } = metrics

  el.innerHTML = `
    <div class="vp-title">Viewport</div>
    <div class="vp-line">inner: <span>${innerW}×${innerH}</span></div>
    <div class="vp-line">screen: <span>${screenW}×${screenH}</span></div>
    <div class="vp-line">visual: <span>${formatNumber(visualW)}×${formatNumber(
    visualH
  )}</span></div>
    <div class="vp-line">dpr: <span>${formatNumber(dpr)}</span></div>
    ${
      isWeird
        ? '<div class="vp-warning">⚠ anomalía detectada</div>'
        : '<div class="vp-ok">✓ config estable</div>'
    }
  `

  el.classList.toggle('is-weird', isWeird)

  // Mostrar / ocultar según config
  if (options.alwaysVisible || isWeird) {
    el.style.display = 'block'
  } else {
    el.style.display = 'none'
  }
}

// --------------------------------------
// 4. Chequeo principal
// --------------------------------------
export function checkViewport() {
  const metrics = computeViewportMetrics()
  const weird = isViewportAnomalous(metrics)

  renderBadge(metrics, weird)

  if (weird && options.logToConsole) {
    console.warn(
      `${options.consoleLabel} Viewport anómalo detectado. ` +
        'Revisa escala de pantalla / zoom del navegador / DevTools / orientación.',
      metrics
    )
  }

  return { metrics, weird }
}

// --------------------------------------
// 5. Inicialización (listeners)
// --------------------------------------
export function initViewportDebug(userOptions = {}) {
  options = { ...DEFAULT_OPTIONS, ...userOptions }

  const handler = () => checkViewport()

  // Al cargar
  window.addEventListener('load', handler, { once: true })

  // Al redimensionar
  window.addEventListener('resize', handler)

  // Al entrar/salir de fullscreen
  document.addEventListener('fullscreenchange', handler)

  // Primera ejecución inmediata
  handler()
}
