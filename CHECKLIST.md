<!-- ===================================================================== -->
<!-- FILE: CHECKLIST.md                                                    -->
<!-- ===================================================================== -->

# 📋 CHECKLIST — SprintLibroWeb

**Panel de control general del proyecto**  
Todo lo que debe revisarse, completarse y mantenerse durante el desarrollo.

---

## ✅ Estado actual (Qué quedó OK y corregido)

### 🧱 Estructura base

- [x] Organización inicial de carpetas (`docs/`, capítulos, assets)
- [x] Archivos principales creados (`index.html`, `style.css`, `main.js`)
- [x] Base `js/data/` para arrays de capítulos/sprints

### 🎨 UI / Diseño

- [x] Estilo general definido
- [x] Paleta light/dark aplicada
- [x] Radios y espaciados base estandarizados

### 📑 Sidebar (menú tipo GPT)

- [x] Sidebar móvil funcional
- [x] Overlay funciona correctamente
- [x] Botón menú ubicado correctamente en mobile
- [x] Fondo sólido para legibilidad

### 🌙 Modo oscuro

- [x] Variables CSS para dark mode
- [x] Toggle funcional
- [x] Persistencia en localStorage

### 🔧 Modularización JS (base)

- [x] `main.js` lógica general
- [x] `sidebar.js` aislado
- [x] `theme.js` separado
- [x] `scroll.js` funcional (si existe typo en repo, corregir a `scroll.js`)

---

## 1️⃣ Checklist por áreas (permanente)

### 🎨 UI / Diseño — pendientes globales

- [x] Ajustes de tipografía global
- [x] Revisión UX en pantallas pequeñas (900 / 768 / 600)

#### 🔍 Revisión UX (900 / 768 / 600)

- [x] Sidebar se muestra bien en 900px
- [x] TOC ajustado y legible
- [x] Botones flotantes no se superponen
- [x] No hay doble scrollbar
- [x] Tipografías legibles
- [x] Padding adecuado para dedo (mín. 12–16px)
- [x] Animaciones fluidas
- [x] Contraste correcto (light/dark)

---

### 📑 Sidebar (menú tipo GPT) — pendientes

- [x] Ajustar transición apertura/cierre
- [x] Animación suave en items del TOC
- [x] Preparar versión fullscreen (si aplica)

---

### 🔧 JS Modular / Refactorización — pendientes

- [x] Crear/llenar `utils.js` para funciones comunes (si realmente hay duplicación)
- [x] Encabezado en cada archivo JS (docstring estándar)
- [x] Evitar accesos al DOM antes de `DOMContentLoaded`

---

### 🚀 Performance — futuro

- [ ] Minificar CSS (sprint futuro)
- [ ] Minificar JS (sprint futuro)
- [ ] Optimizar imágenes `/assets/img`
- [ ] Lazy-load para imágenes grandes
- [ ] Reducir listeners innecesarios

---

### ♿ Accesibilidad — pendientes

- [x] Botones con `aria-label`
- [x] Área mínima clickeable 40×40
- [ ] Navegación con teclado (sprint futuro)
- [ ] Revisar contraste WCAG real en dark mode
- [ ] Roles semánticos donde aplique (`nav`, `main`, `aside`, `section`, etc.)

---

### 🧹 Limpieza de código — pendientes

- [ ] Prettier configurado (o reglas equivalentes)
- [ ] ESLint (futuro)
- [ ] Remover estilos redundantes
- [ ] Unificar comentarios
- [ ] Revisar indentación general

---

## 2️⃣ Checklist visual — Cierre de sprint (regresión UI)

- [x] `.chapter-tag` tiene aire suficiente arriba/abajo
- [x] Emojis/íconos en `.chapter-tag` alinean con el texto
- [x] `<code>` inline centrado en:
  - [x] Párrafos
  - [x] Títulos con `<code>`
  - [x] Listas con varias `<code>` seguidas
- [x] En 600px las “píldoras” `<code>` no rompen layout
- [x] `pre > code` no afectado por cambios de inline code

---

## 3️⃣ Checklist por Sprints (Fullscreen + Drawer)

> Esta sección es la “verdad única” de los sprints técnicos del layout. Evitamos duplicados en otros lados.

### ✅ Sprint 005 — Fullscreen Layout (Paso 1: HTML)

- [x] `body.layout-fullscreen` agregado
- [x] `<main class="main-content">` aplicado
- [x] Wrapper `.shell` se mantiene (se adapta luego)
- [x] Overlay mobile (`#sidebarOverlay`) intacto
- [x] Triggers identificados (`menuToggle`, `sidebarToggle`) para unificación
- [x] HTML listo para Fullscreen CSS (sidebar fija + drawer mobile)
- [x] Sin cambios en contenido (capítulos/header)

### ✅ Sprint 006 — Fullscreen Layout (CSS Base)

- [x] Body deja de estar centrado
- [x] `.shell` fullscreen sin bordes/sombra
- [x] Sidebar fija en desktop (`position: fixed`, `width: 300px`)
- [x] `.main-content` desplazado a la derecha en ≥900px
- [x] Mobile mantiene drawer
- [x] Sin pérdida de padding/estructura en contenido
- [x] Listo para Sprint 007 (JS cleanup)

### ✅ Sprint 007 — Sidebar Drawer (JS Clean & Scroll Lock)

- [x] Drawer abre/cierra con `#menuToggle`
- [x] Botón interno `#sidebarToggle` también controla drawer (si se mantiene)
- [x] Click en overlay cierra
- [x] Click en link del TOC cierra (mobile)
- [x] Tecla `Esc` cierra
- [x] Al pasar mobile→desktop el drawer queda cerrado (sin romper layout)
- [x] Mobile (≤900px) con drawer abierto:
  - [x] body bloquea scroll (`overflow: hidden`)
  - [x] overlay visible y clicable
- [x] Desktop (>900px):
  - [x] sidebar fija
  - [x] sin overlay
  - [x] main normal
- [x] Sin errores de consola (`menuToggle`, `sidebar`, `sidebarOverlay`, `sidebarToggle`)
- [x] TOC dinámico sigue funcionando

### 🧪 Sprint 008 — Fine-Tuning Fullscreen Layout (pendiente)

- [ ] Paddings globales del `<main>` ajustados (≈2.4rem–3rem)
- [ ] Contenido más respirado sin perder densidad
- [ ] Distancia sidebar ↔ contenido agradable en desktop
- [ ] Scroll suave y estable (`scroll-behavior: smooth`)
- [ ] Layout perfecto al activar F11 (fullscreen real)
- [ ] Sin restos del layout centrado (padding/centrado antiguos)
- [ ] `h1` estilo workspace (Notion/GPT)
- [ ] Sidebar con padding vertical más cómodo (≈2rem)
- [ ] UI fullscreen sin “pegotes” en bordes
- [ ] Nada rompe mobile/tablet

### 🕐 Sprint 009 — Fullscreen Real (API requestFullscreen) + Polish (pendiente)

#### Funcionalidad

- [ ] Botón `#fullscreenToggle` visible junto a theme
- [ ] Click entra a fullscreen (API `requestFullscreen`)
- [ ] Icono cambia (normal ↔ fullscreen)
- [ ] `fullscreenchange` sincroniza icono al usar F11/ESC
- [ ] Sin errores de consola

#### UX / Visual

- [ ] En fullscreen real el contenido no queda pegado a bordes
- [ ] Sidebar mantiene padding superior cómodo
- [ ] Botón fullscreen se integra con theme + back-to-top
- [ ] Layout sigue perfecto al usar F11

#### Compatibilidad

- [ ] Si fullscreen no está soportado, no se rompe (fallback controlado)
- [ ] En mobile/tablet la app sigue funcionando normal

---

## 4️⃣ Checklist atómico por módulo

### 📌 `sidebar.js`

- [x] Fondo sólido para lectura en mobile
- [ ] Animación más suave abrir/cerrar
- [ ] Ajustar ancho del panel según contenido
- [ ] Asegurar cierre automático en todos los links del TOC (validar 100%)
- [ ] Si hay duplicación, extraer a `utils.js`
- [ ] Preparar versión fullscreen definitiva

### 🌗 `theme.js`

- [x] Guarda preferencia en localStorage
- [x] Aplica tema en `DOMContentLoaded`
- [ ] Animación suave al cambiar tema
- [ ] Revisar contraste de todos los elementos

### 🡅 `scroll.js`

- [x] Botón “volver arriba” funcional
- [ ] Mejorar condición de aparición
- [ ] Animación más fluida al hacer scroll
- [ ] Confirmar nombre final del archivo: `scroll.js` (sin typos)

### 🧩 `main.js`

- [ ] Eliminar funciones ya movidas a módulos
- [ ] Asegurar ejecución tras `DOMContentLoaded`
- [ ] Preparar instancias limpias para futura modularización
- [ ] Documentación interna pendiente

---

## 5️⃣ Checklist de buenas prácticas activas

### ✔️ Convenciones del proyecto

- [x] JS: camelCase
- [x] CSS: kebab-case
- [x] Variables CSS documentadas
- [ ] Evitar selectores profundos
- [ ] Encabezado en todos los JS

### ✔️ Reglas de commits

- [x] Commits atómicos
- [x] Formato convencional (`feat:`, `fix:`, etc.)
- [x] Documentar commits en `commits.md`
- [ ] Etiqueta por milestone

### ✔️ Documentación del repo

- [x] README estructurado
- [x] `STYLE-GUIDE.md` incluido
- [x] `SPRINT-BEST-PRACTICE.md` incluido
- [x] `CHECKLIST.md` incluido
- [ ] `CHANGELOG.md` actualizado sprint a sprint

---

## 6️⃣ Última verificación antes de cada Sprint

- [ ] Sidebar OK en mobile
- [ ] Theme OK y persistente
- [ ] TOC muestra capítulos/sprints correctamente
- [ ] Scroll interno sidebar no rompe layout
- [ ] Sin errores de consola
- [ ] Sprint anterior documentado
- [ ] Commit atómico listo

---

## 7️⃣ Checklist técnica — SPA PoC (si se ejecuta)

### A) Preparación

- [ ] Crear `docs/02midLevel/partials/`
- [ ] Crear `01objetoWindow.partial.html`
- [ ] Crear `docs/js/router.js`

### B) Shell único (`docs/index.html`)

- [ ] Agregar `<div id="appView"></div>`
- [ ] Botones flotantes existen solo en Shell (no en partials)
- [ ] Crear dos listas:
  - [ ] `<ul id="toc-general" class="toc"></ul>`
  - [ ] `<ul id="toc-sprint" class="toc"></ul>` (oculta por defecto)

### C) Router SPA (sin recarga)

- [ ] `navigate(path)`:
  - [ ] `fetch()` partial
  - [ ] inyecta en `#appView`
  - [ ] `history.pushState()`
- [ ] `popstate` back/forward
- [ ] Interceptar clicks SPA (cards + sidebar)
- [ ] Estado Home (índice general)

### D) Doble menú

- [ ] TOC general llama `navigate()` (no href a html completos)
- [ ] TOC sprint:
  - [ ] detectar `h2[id]` / `section[id]`
  - [ ] generar anchors internos (scroll)
  - [ ] oculto automáticamente en Home

### E) Estados persistentes

- [ ] Fullscreen no se pierde al navegar
- [ ] Theme se mantiene (ya OK)
- [ ] BackToTop OK
- [ ] MenuToggle coherente en desktop y mobile

### F) QA rápido

- [ ] Home → índice general
- [ ] Click Sprint 01 → carga sin recarga
- [ ] TOC sprint aparece
- [ ] Volver Home → TOC sprint se oculta
- [ ] Fullscreen ON → navegar → sigue ON
- [ ] Drawer mobile ≤900px
- [ ] Back/Forward del navegador

---

# ✔️ Conclusión

Este archivo es el centro de control general.  
Si se mantiene actualizado, el proyecto seguirá una ruta profesional, ordenada y escalable sprint tras sprint.

---
