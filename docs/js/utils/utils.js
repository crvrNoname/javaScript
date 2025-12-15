/**
 * /docs/js/utils/utils.js
 * Propósito: helpers reutilizables (DOM, clases, mobile, storage).
 * Nota: mantener pequeño y solo con funciones reutilizadas.
 */

export const qs = (sel, root = document) => root.querySelector(sel)
export const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel))

export const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts)

export const isMobile = (bp = 900) => window.innerWidth <= bp

export const addClass = (el, cls) => el && el.classList.add(cls)
export const removeClass = (el, cls) => el && el.classList.remove(cls)
export const toggleClass = (el, cls) => el && el.classList.toggle(cls)

export const getStorage = (k) => localStorage.getItem(k)
export const setStorage = (k, v) => localStorage.setItem(k, v)
