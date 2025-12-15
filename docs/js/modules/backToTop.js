/**
 * backToTop.js
 * Propósito: botón volver arriba, detectando si scroll es window o main.
 */

import { isMobile } from '../utils/utils.js'

export function initBackToTop() {
  const btnTop = document.getElementById('backToTop')
  if (!btnTop) return

  const mainContent = document.querySelector('.main-content')

  const getScrollSource = () => {
    if (mainContent && mainContent.scrollHeight > mainContent.clientHeight) {
      return mainContent
    }
    return window
  }

  const getScrollY = () => {
    const src = getScrollSource()
    if (src === window)
      return window.scrollY || document.documentElement.scrollTop
    return src.scrollTop
  }

  const toggleVisibility = () => {
    const y = getScrollY()
    const threshold = isMobile(900) ? 150 : 400
    btnTop.classList.toggle('visible', y > threshold)
  }

  window.addEventListener('scroll', toggleVisibility)
  if (mainContent) mainContent.addEventListener('scroll', toggleVisibility)
  toggleVisibility()

  btnTop.addEventListener('click', () => {
    const src = getScrollSource()
    src === window
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : src.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
