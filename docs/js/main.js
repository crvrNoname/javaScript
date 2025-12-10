// docs/js/main.js

import { sprintsMidLevelDaltoPlus } from './data/sprintsMidLevel.js'

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
// 3) SIDEBAR MOBILE
// =========================
// (function () {
//   const sidebar = document.getElementById("sidebar");
//   const sidebarToggle = document.getElementById("sidebarToggle");

//   if (!sidebar || !sidebarToggle) return;

//   sidebarToggle.addEventListener("click", () => {
//     sidebar.classList.toggle("collapsed");
//   });

//   const tocLinks = sidebar.querySelectorAll(".toc a");
//   tocLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       if (window.innerWidth <= 900) {
//         sidebar.classList.add("collapsed");
//       }
//     });
//   });
// })();

// ----- Sidebar tipo GPT en mobile (drawer unificado) -----
;(function () {
  const body = document.body
  const sidebar = document.getElementById('sidebar')
  const menuToggle = document.getElementById('menuToggle')
  const sidebarOverlay = document.getElementById('sidebarOverlay')
  const innerToggle = document.getElementById('sidebarToggle') // botón dentro del header sidebar (opcional)

  if (!sidebar || !menuToggle || !sidebarOverlay) return

  const OPEN_CLASS = 'sidebar-open'

  const isMobile = () => window.innerWidth <= 900

  const openSidebar = () => {
    body.classList.add(OPEN_CLASS)
  }

  const closeSidebar = () => {
    body.classList.remove(OPEN_CLASS)
  }

  const toggleSidebar = () => {
    if (!isMobile()) return // solo drawer en mobile
    if (body.classList.contains(OPEN_CLASS)) {
      closeSidebar()
    } else {
      openSidebar()
    }
  }

  // Botón hamburguesa flotante (abajo izquierda)
  menuToggle.addEventListener('click', toggleSidebar)

  // Botón interno dentro de la sidebar (si existe)
  if (innerToggle) {
    innerToggle.addEventListener('click', toggleSidebar)
  }

  // Cerrar tocando el overlay
  sidebarOverlay.addEventListener('click', closeSidebar)

  // Cerrar al seleccionar un link del índice (solo mobile)
  const tocLinks = sidebar.querySelectorAll('.toc a')
  tocLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (isMobile()) {
        closeSidebar()
      }
    })
  })

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeSidebar()
    }
  })

  // Si redimensionamos a desktop, garantizar que el drawer esté cerrado
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      closeSidebar()
    }
  })
})()

// =========================
// 4) BOTÓN "VOLVER ARRIBA"
// =========================
;(function () {
  const btnTop = document.getElementById('backToTop')
  if (!btnTop) return

  const toggleVisibility = () => {
    const y = window.scrollY || document.documentElement.scrollTop
    if (y > 400) {
      btnTop.classList.add('visible')
    } else {
      btnTop.classList.remove('visible')
    }
  }

  window.addEventListener('scroll', toggleVisibility)

  btnTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
})()
