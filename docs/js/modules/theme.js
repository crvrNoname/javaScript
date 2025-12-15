// docs/js/modules/theme.js
/**
 * theme.js
 * Propósito: modo claro/oscuro + persistencia.
 */

import { getStorage, setStorage } from '../utils/utils.js'

export function initTheme() {
  const root = document.documentElement
  const btn = document.getElementById('themeToggle')
  if (!btn) return

  const iconSpan = btn.querySelector('.icon')
  const labelSpan = btn.querySelector('.label')

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme)
    if (!iconSpan || !labelSpan) return
    if (theme === 'dark') {
      iconSpan.textContent = '☀️'
      labelSpan.textContent = 'Modo claro'
    } else {
      iconSpan.textContent = '🌙'
      labelSpan.textContent = 'Modo oscuro'
    }
  }

  const stored = getStorage('mljs-theme')
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
    setStorage('mljs-theme', next)
  })
}
