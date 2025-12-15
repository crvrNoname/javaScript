// docs / js / sidebar.js
/**
 * sidebar.js
 * Propósito: drawer mobile + colapso desktop.
 * Reglas: cerrar con overlay, ESC, click en links, resize.
 */

import { isMobile } from '../utils/utils.js'

export function initSidebar() {
  const body = document.body
  const sidebar = document.getElementById('sidebar')
  const menuToggle = document.getElementById('menuToggle')
  const sidebarOverlay = document.getElementById('sidebarOverlay')
  const innerToggle = document.getElementById('sidebarToggle')

  if (!sidebar || !menuToggle || !sidebarOverlay) return

  const OPEN_CLASS = 'sidebar-open'

  const openSidebar = () => body.classList.add(OPEN_CLASS)
  const closeSidebar = () => body.classList.remove(OPEN_CLASS)
  const toggleSidebarMobile = () =>
    body.classList.contains(OPEN_CLASS) ? closeSidebar() : openSidebar()

  menuToggle.addEventListener('click', () => {
    if (isMobile(900)) toggleSidebarMobile()
    else body.classList.toggle('sidebar-collapsed')
  })

  if (innerToggle) {
    innerToggle.addEventListener('click', () => {
      if (isMobile(900)) toggleSidebarMobile()
      else body.classList.toggle('sidebar-collapsed')
    })
  }

  sidebarOverlay.addEventListener('click', () => {
    if (isMobile(900)) closeSidebar()
  })

  // IMPORTANTE: re-evaluar links por si el TOC se renderiza dinámico
  const bindTocClose = () => {
    const tocLinks = sidebar.querySelectorAll('.toc a')
    tocLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (isMobile(900)) closeSidebar()
      })
    })
  }
  bindTocClose()

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMobile(900)) closeSidebar()
  })

  window.addEventListener('resize', () => {
    if (!isMobile(900)) closeSidebar()
    else body.classList.remove('sidebar-collapsed')
  })

  // Exponer helper por si renderizas el TOC después y quieres re-bindeo
  return { bindTocClose }
}
