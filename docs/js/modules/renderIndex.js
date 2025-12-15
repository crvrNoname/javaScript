/**
 * renderIndex.js
 * Propósito: render del índice principal (cards) + TOC sidebar.
 * Dependencias: data/sprintsMidLevel.js
 */

import { sprintsMidLevelDaltoPlus } from '../data/sprintsMidLevel.js'

export function renderSprintCards(cardsContainer) {
  if (!cardsContainer) return
  cardsContainer.innerHTML = ''

  sprintsMidLevelDaltoPlus.forEach((capitulo) => {
    const capWrapper = document.createElement('section')
    capWrapper.classList.add('chapter-group')
    capWrapper.id = `capitulo-${capitulo.capitulo}`

    const titleEl = document.createElement('h3')
    titleEl.classList.add('chapter-group-title')
    titleEl.textContent = capitulo.tituloCapitulo

    const descEl = document.createElement('p')
    descEl.classList.add('chapter-group-desc')
    descEl.textContent = capitulo.descripcion

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

export function renderSidebarToc(tocContainer) {
  if (!tocContainer) return
  tocContainer.innerHTML = ''

  sprintsMidLevelDaltoPlus.forEach((capitulo) => {
    const liCap = document.createElement('li')

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
      aSprint.href = `#sprint-${sprint.numero}`
      aSprint.textContent = `Sprint Nº${sprint.numero} — ${sprint.titulo}`
      liSprint.appendChild(aSprint)
      ulSprints.appendChild(liSprint)
    })

    liCap.appendChild(ulSprints)
    tocContainer.appendChild(liCap)
  })
}
