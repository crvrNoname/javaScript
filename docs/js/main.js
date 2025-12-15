/**
 * main.js
 * Propósito: orquestación (init de módulos).
 * Regla: no tocar DOM antes de DOMContentLoaded.
 */

import { initBackToTop } from './modules/backToTop.js'
import { initFullscreen } from './modules/fullscreen.js'
import { renderSidebarToc, renderSprintCards } from './modules/renderIndex.js'
import { initSidebar } from './modules/sidebar.js'
import { initTheme } from './modules/theme.js'

// ✅ Debug opcional: si lo quieres, descomenta import + init
// import { initViewportDebug } from './utils/viewportDebug.js'

document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.getElementById('sprints-container')
  const tocContainer = document.getElementById('toc-dynamic')

  if (cardsContainer) renderSprintCards(cardsContainer)
  if (tocContainer) renderSidebarToc(tocContainer)

  initTheme()
  const sidebarApi = initSidebar()
  initBackToTop()
  initFullscreen()

  // Si renderizas TOC después de initSidebar por SPA en el futuro:
  // sidebarApi?.bindTocClose?.()

  // initViewportDebug?.({ alwaysVisible: false, logToConsole: true })
})
