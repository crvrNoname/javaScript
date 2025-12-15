/**
 * fullscreen.js
 * Propósito: fullscreen API (botón) + sync icon.
 */

export function initFullscreen() {
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
    if (!document.fullscreenElement)
      document.documentElement.requestFullscreen()
    else document.exitFullscreen()
  })

  document.addEventListener('fullscreenchange', updateIcon)
  updateIcon()
}
