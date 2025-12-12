// ============================================
// 📄 Archivo: /docs/js/main.js
// Descripción: Lógica principal del Libro Web
// ===========================================

import { sprintsMidLevelDaltoPlus } from './data/sprintsMidLevel.js'
import { initViewportDebug } from './utils/viewportDebug.js' // Importamos módulo de diagnóstico de viewport

// =========================
// 1) RENDER DEL ÍNDICE PRINCIPAL
// =========================

const cardsContainer = document.getElementById('sprints-container')
const tocContainer = document.getElementById('toc-dynamic')

if (cardsContainer) {
  renderSprintCards()
}

if (tocContainer) {
  renderSidebarToc()
}

// En el main: título de capítulo + burbujas de sprints
function renderSprintCards() {
  cardsContainer.innerHTML = ''

  sprintsMidLevelDaltoPlus.forEach((capitulo) => {
    // contenedor por capítulo
    const capWrapper = document.createElement('section')
    capWrapper.classList.add('chapter-group')
    capWrapper.id = `capitulo-${capitulo.capitulo}`

    const titleEl = document.createElement('h3')
    titleEl.classList.add('chapter-group-title')
    titleEl.textContent = capitulo.tituloCapitulo

    const descEl = document.createElement('p')
    descEl.classList.add('chapter-group-desc')
    descEl.textContent = capitulo.descripcion

    // grid interno de tarjetas
    const grid = document.createElement('div')
    grid.classList.add('chapter-sprints-grid')

    capitulo.sprints.forEach((sprint) => {
      const card = document.createElement('div')
      card.classList.add('sprint-card')
      card.id = `sprint-${sprint.numero}`

      card.innerHTML = `
        <div class="sprint-title">
          Sprint Nº${sprint.numero} — ${sprint.titulo}
        </div>
        <div class="sprint-sub">
          ${capitulo.tituloCapitulo}
        </div>
        <a class="sprint-link" href="${sprint.archivo ?? '#'}">
          📘 Ver Sprint
        </a>
      `

      grid.appendChild(card)
    })

    capWrapper.appendChild(titleEl)
    capWrapper.appendChild(descEl)
    capWrapper.appendChild(grid)
    cardsContainer.appendChild(capWrapper)
  })
}

// En el sidebar: links al capítulo y a cada sprint
function renderSidebarToc() {
  tocContainer.innerHTML = ''

  sprintsMidLevelDaltoPlus.forEach((capitulo) => {
    const liCap = document.createElement('li')

    // link al título del capítulo
    const aCap = document.createElement('a')
    aCap.href = `#capitulo-${capitulo.capitulo}`
    aCap.textContent = capitulo.tituloCapitulo
    aCap.classList.add('chapter-link')

    liCap.appendChild(aCap)

    const ulSprints = document.createElement('ul')
    ulSprints.classList.add('sprint-list')

    capitulo.sprints.forEach((sprint) => {
      const liSprint = document.createElement('li')
      const aSprint = document.createElement('a')

      // link al sprint dentro del índice (burbuja)
      aSprint.href = `#sprint-${sprint.numero}`
      aSprint.textContent = `Sprint Nº${sprint.numero} — ${sprint.titulo}`

      liSprint.appendChild(aSprint)
      ulSprints.appendChild(liSprint)
    })

    liCap.appendChild(ulSprints)
    tocContainer.appendChild(liCap)
  })
}

// =========================
// 2) MODO OSCURO
// =========================
;(function () {
  const root = document.documentElement
  const btn = document.getElementById('themeToggle')
  if (!btn) return

  const iconSpan = btn.querySelector('.icon')
  const labelSpan = btn.querySelector('.label')

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme)
    if (theme === 'dark') {
      iconSpan.textContent = '☀️'
      labelSpan.textContent = 'Modo claro'
    } else {
      iconSpan.textContent = '🌙'
      labelSpan.textContent = 'Modo oscuro'
    }
  }

  const stored = localStorage.getItem('mljs-theme')

  if (stored === 'light' || stored === 'dark') {
    applyTheme(stored)
  } else {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark ? 'dark' : 'light')
  }

  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'light'
    const next = current === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    localStorage.setItem('mljs-theme', next)
  })
})()

// =========================
// 3) SIDEBAR MOBILE + DESKTOP
// =========================
;(function () {
  const body = document.body
  const sidebar = document.getElementById('sidebar')
  const menuToggle = document.getElementById('menuToggle')
  const sidebarOverlay = document.getElementById('sidebarOverlay')
  const innerToggle = document.getElementById('sidebarToggle') // botón dentro del header sidebar

  if (!sidebar || !menuToggle || !sidebarOverlay) return

  const OPEN_CLASS = 'sidebar-open'

  const isMobile = () => window.innerWidth <= 900

  const openSidebar = () => {
    body.classList.add(OPEN_CLASS)
  }

  const closeSidebar = () => {
    body.classList.remove(OPEN_CLASS)
  }

  const toggleSidebarMobile = () => {
    if (body.classList.contains(OPEN_CLASS)) {
      closeSidebar()
    } else {
      openSidebar()
    }
  }

  // Botón hamburguesa flotante (escritorio + mobile)
  menuToggle.addEventListener('click', () => {
    if (isMobile()) {
      // En mobile → abre/cierra drawer lateral
      toggleSidebarMobile()
    } else {
      // En escritorio → colapsa/expande sidebar
      body.classList.toggle('sidebar-collapsed')
    }
  })

  // Botón interno dentro de la sidebar:
  // - Mobile: abre/cierra drawer
  // - Desktop: colapsa/expande sidebar
  if (innerToggle) {
    innerToggle.addEventListener('click', () => {
      if (isMobile()) {
        toggleSidebarMobile()
      } else {
        body.classList.toggle('sidebar-collapsed')
      }
    })
  }

  // Cerrar tocando el overlay (solo drawer mobile)
  sidebarOverlay.addEventListener('click', () => {
    if (isMobile()) {
      closeSidebar()
    }
  })

  // Cerrar al seleccionar un link del índice (solo mobile)
  const tocLinks = sidebar.querySelectorAll('.toc a')
  tocLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (isMobile()) {
        closeSidebar()
      }
    })
  })

  // Cerrar con tecla Escape (solo mobile)
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMobile()) {
      closeSidebar()
    }
  })

  // Si redimensionamos:
  // - Al pasar a desktop: cerramos drawer y dejamos sidebar visible
  // - Al pasar a mobile: quitamos colapso de escritorio si lo hubiera
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      closeSidebar()
    } else {
      body.classList.remove('sidebar-collapsed')
    }
  })
})()

// =========================
// 4) BOTÓN "VOLVER ARRIBA"
// =========================
;(function () {
  const btnTop = document.getElementById('backToTop')
  if (!btnTop) return

  const mainContent = document.querySelector('.main-content')

  // 🧠 Detecta automáticamente quién tiene scroll real:
  // - Si .main-content desborda → usamos .main-content
  // - Si no → usamos window
  const getScrollSource = () => {
    if (mainContent && mainContent.scrollHeight > mainContent.clientHeight) {
      return mainContent
    }
    return window
  }

  const getScrollY = () => {
    const src = getScrollSource()
    if (src === window) {
      return window.scrollY || document.documentElement.scrollTop
    }
    return src.scrollTop
  }

  const toggleVisibility = () => {
    const y = getScrollY()

    // 👉 Umbral distinto según viewport:
    // - Mobile / tablet (≤900px): aparece antes
    // - Desktop: más abajo
    const threshold = window.innerWidth <= 900 ? 150 : 400

    if (y > threshold) {
      btnTop.classList.add('visible')
    } else {
      btnTop.classList.remove('visible')
    }
  }

  // Escuchamos scroll en ambos por si acaso,
  // pero getScrollSource decide de dónde leer.
  window.addEventListener('scroll', toggleVisibility)
  if (mainContent) {
    mainContent.addEventListener('scroll', toggleVisibility)
  }

  // Forzamos estado correcto al cargar
  toggleVisibility()

  btnTop.addEventListener('click', () => {
    const src = getScrollSource()
    if (src === window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      src.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  })
})()

// =========================
// 5) FULLSCREEN API (sin mezclar F11)
// =========================
;(function () {
  const btn = document.getElementById('fullscreenToggle')
  if (!btn || !document.documentElement.requestFullscreen) return

  const ENTER_ICON = '⛶'
  const EXIT_ICON = '🞬'

  function updateIcon() {
    if (document.fullscreenElement) {
      btn.textContent = EXIT_ICON
      btn.setAttribute('aria-label', 'Salir de pantalla completa')
    } else {
      btn.textContent = ENTER_ICON
      btn.setAttribute('aria-label', 'Pantalla completa')
    }
  }

  btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  })

  document.addEventListener('fullscreenchange', updateIcon)

  updateIcon()
})()

// Inicialización del debug de viewport
initViewportDebug({
  alwaysVisible: false, // true = siempre visible (modo desarrollo)
  logToConsole: true,
})
// =========================
// FIN archivo: /docs/js/main.js
// =========================