/**
 * fullscreen.js
 * Propósito: Fullscreen real (API) + sync de icono (incluye mobile/webkit).
 * Nota: En algunos móviles `fullscreenElement` no se actualiza igual → usamos fallback webkit/ms.
 */

export const initFullscreen = () => {
  const btn = document.getElementById('fullscreenToggle')
  if (!btn) return

  const rootEl = document.documentElement

  const ENTER_ICON = '⛶'
  const EXIT_ICON = 'X'

  const isFullscreen = () =>
    !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    )

  const requestFs = async () => {
    try {
      if (rootEl.requestFullscreen) return await rootEl.requestFullscreen()
      if (rootEl.webkitRequestFullscreen)
        return await rootEl.webkitRequestFullscreen()
      if (rootEl.msRequestFullscreen) return await rootEl.msRequestFullscreen()
    } catch (err) {
      console.warn('[fullscreen] requestFullscreen failed:', err)
    }
  }

  const exitFs = async () => {
    try {
      if (document.exitFullscreen) return await document.exitFullscreen()
      if (document.webkitExitFullscreen)
        return await document.webkitExitFullscreen()
      if (document.msExitFullscreen) return await document.msExitFullscreen()
    } catch (err) {
      console.warn('[fullscreen] exitFullscreen failed:', err)
    }
  }

  function updateIcon() {
    if (isFullscreen()) {
      btn.textContent = EXIT_ICON
      btn.setAttribute('aria-label', 'Salir de pantalla completa')
    } else {
      btn.textContent = ENTER_ICON
      btn.setAttribute('aria-label', 'Pantalla completa')
    }
  }

  // Eventos (desktop + iOS/Safari + algunos Android WebView)
  document.addEventListener('fullscreenchange', updateIcon)
  document.addEventListener('webkitfullscreenchange', updateIcon)
  document.addEventListener('MSFullscreenChange', updateIcon)

  btn.addEventListener('click', async () => {
    if (!isFullscreen()) await requestFs()
    else await exitFs()

    // En algunos móviles el evento llega tarde o no llega → forzamos refresh.
    updateIcon()
  })

  updateIcon()
}
