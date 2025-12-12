<!-- ===================================================================== -->
<!-- FILE: SPRINT-BEST-PRACTICE.md                                          -->
<!-- ===================================================================== -->

# 🧩 SprintLibroWeb — Mejores Prácticas Globales del Proyecto

**Documento permanente — Consultar antes de iniciar cualquier sprint, refactor o cambio estructural.**  
Este archivo define las reglas maestras para mantener el proyecto **ordenado, consistente, escalable y mantenible**.

---

## ✅ Estado actual del proyecto (Qué quedó OK y corregido)

✔️ Estructura base del repo creada y operativa (docs + capítulos + assets).  
✔️ Sidebar mobile funcional (drawer + overlay).  
✔️ Theme toggle (light/dark) funcional y persistente (localStorage).  
✔️ Render dinámico de capítulos/sprints desde `docs/js/data/`.  
✔️ Botón “volver arriba” funcional (pendiente de rename si aplica).  
✔️ Documentación base creada: `CHECKLIST.md`, `STYLE-GUIDE.md`, `CHANGELOG.md`, `commits.md`.

> Nota: lo “OK” aquí significa **funciona y está validado visual/funcionalmente**. Lo pendiente vive en `CHECKLIST.md` y en el backlog de sprints.

---

## 🎯 1) Objetivo del documento

Establecer reglas maestras que garanticen:

- orden
- consistencia
- escalabilidad
- mantenibilidad técnica
- crecimiento sostenible del proyecto

Este documento centraliza **todo lo que debes revisar** antes de crear nuevos módulos, nuevas pantallas o aplicar refactors.

---

## 📁 2) Organización general del proyecto

### ✔️ Reglas base

- Cada carpeta/archivo debe responder a un **propósito claro**.
- Nada existe “por si acaso”.
- Mínimo acoplamiento entre módulos.
- Código legible sin explicaciones extra.
- Si una decisión afecta al proyecto “para siempre”, se documenta aquí.

### ✔️ Estructura oficial del repo (referencia)

> Mantener coherente con `README.md`. Si cambia el repo, se actualiza aquí y en README.

```txt
docs/
  01junior/
  02midLevel/
  03master/
  assets/
    img/
  css/
    style.css
  js/
    data/
    main.js
    sidebar.js
    theme.js
    scroll.js
  index.html

CHANGELOG.md
CHECKLIST.md
commits.md
STYLE-GUIDE.md
SPRINT-BEST-PRACTICE.md
README.md
```

### ✔️ Convenciones de nombres (regla práctica)

- JS: `camelCase` (variables/funciones) + `PascalCase` (clases).
- CSS: `kebab-case`.
- Archivos: sin typos (ej: `scroll.js`, nunca `scrooll.js`).
- Documentos: mantener nombres exactos:
  - `SPRINT-BEST-PRACTICE.md` (singular y consistente)
  - `CHECKLIST.md`
  - `sprintLibroWeb.md`

---

## 💾 3) Versionado y commits

### ✔️ Atomic Commits (regla de oro)

Cada commit debe:

- hacer **una sola cosa**
- ser fácil de revertir
- tener mensaje claro y profesional
- actualizar `commits.md` o `CHANGELOG.md` cuando corresponda

### ✔️ Formato recomendado

```txt
feat(ui): mejorar sidebar en mobile
fix(css): corregir overflow en tarjetas
refactor(js): separar lógica de scroll en módulo propio
docs: actualizar README con estructura nueva
chore: limpieza de nombres y estructura
```

### 🚫 Prohibido

- commits gigantes (“update all”)
- mezclar UI + lógica en un mismo commit
- subir código sin probar (desktop + mobile)

---

## 🧱 4) Estructura de módulos (JavaScript)

### ✔️ Reglas generales

- Cada archivo JS resuelve **una única responsabilidad**.
- Si un archivo supera **200–250 líneas**, se divide.
- Todo módulo comienza con encabezado:

```js
/**
 * Archivo: <nombre>
 * Propósito: <qué resuelve>
 * Exporta/Expone: <funciones>
 * Dependencias: <qué usa>
 */
```

### ✔️ Módulos actuales (referencia)

- `main.js` → orquestación/render general
- `sidebar.js` → lógica de menú/drawer + overlay
- `theme.js` → modo oscuro/claro + persistencia
- `scroll.js` → volver arriba (y lógica asociada)
- `js/data/*.js` → datos estáticos (capítulos/sprints)

### ✔️ Futuro (cuando el proyecto crezca)

```txt
js/
  modules/
    router.js
    tocGeneral.js
    tocSprint.js
    renderSprints.js
    utils.js
```

---

## 🎨 5) Organización del CSS

### ✔️ Reglas clave

- Evitar selectores profundos.
- No usar IDs para estilo (IDs solo para JS).
- Colores y valores globales en variables `:root { --var }`.
- Separar:
  1. **tokens** (colores, bordes, z-index, sombras)
  2. **componentes** (sidebar, cards, botones)

### ✔️ Orden recomendado en `style.css`

1. variables (tokens)
2. resets
3. layout general
4. componentes
5. utilidades
6. media queries

---

## 🔍 6) Refactor atómico

Cada refactor debe:

- ser pequeño
- no romper lo ya funcional
- incluir prueba manual (mínimo) o automática (si aplica)
- actualizar documentación si cambia comportamiento

Ejemplos de refactor atómico:

- mover un listener a otro módulo
- simplificar una función
- reducir un selector CSS
- extraer repetidos a helpers reutilizables

---

## 🧪 7) Micro-testing manual (antes de cerrar sprint)

### ✔️ Sidebar

- abre/cierra correctamente
- overlay funciona y es clicable
- TOC hace scroll sin romper layout
- el botón no tapa contenido

### ✔️ Responsive (mínimo)

- 900px
- 768px
- 600px
- tema claro / oscuro

### ✔️ Accesibilidad base

- botones con `aria-label`
- touch-friendly (mínimo 40×40)
- contraste correcto

---

## 🛑 8) Lista de NO HACER

❌ no usar estilos inline  
❌ no meter CSS dentro del JS  
❌ no dejar comentarios inútiles  
❌ no subir código sin probar en mobile  
❌ no ignorar warnings del inspector  
❌ no mantener código muerto “por si sirve”

---

## 📚 9) Documentación obligatoria por sprint

Cada sprint debe contener:

- objetivo
- explicación profesional
- código relevante formateado
- antes/después si aplica
- tareas realizadas
- mini checklist final

---

## 🧭 10) Revisión previa antes de abrir un sprint

Antes de avanzar, revisa:

- [ ] ¿Código formateado (Prettier/estilo consistente)?
- [ ] ¿Estructura del repo intacta?
- [ ] ¿Último sprint cerrado y documentado?
- [ ] ¿Mobile OK (900/768/600)?
- [ ] ¿README / CHECKLIST / CHANGELOG al día?
- [ ] ¿Este cambio merece su propio commit atómico?

> Si **2 o más** están en “no”, no abras sprint nuevo.

---

## 🏁 11) Conclusión

Este documento es el mapa de referencia del proyecto.  
Debe leerse antes de: iniciar sprint, refactorizar, cambiar estructura, trabajar UI/UX, dividir módulos.

---

## 📎 Apéndice A — Sprint Plantilla (PoC) Migración SPA + Doble menú

> Esto no es “best practice” por sí mismo: es una **iniciativa arquitectónica**.  
> Se deja aquí como referencia oficial porque afecta decisiones globales.

### 🎯 Objetivo del Sprint (PoC)

Implementar una base SPA (sin recarga) que permita:

- Mantener fullscreen y estado UI (theme, botones flotantes, sidebar) entre navegación.
- Soportar 2 niveles de navegación:
  1. índice general (capítulos + lista de sprints)
  2. índice del sprint (secciones internas del sprint)
- Probar con 1 sprint como Proof of Concept.
- Dejar listo para escalar a múltiples capítulos/sprints.

### ✅ Alcance (Sí incluye)

- Router mínimo con `history.pushState()` y `popstate`.
- Shell único (`docs/index.html`) + contenedor dinámico `#appView`.
- Sprint PoC convertido a partial (solo contenido).
- Doble TOC:
  - `toc-general` siempre visible
  - `toc-sprint` solo cuando hay sprint cargado
- Botones flotantes viven en Shell y nunca se duplican en partials.

### 🚫 Fuera de alcance (por ahora)

- Migrar todos los sprints a partials (solo 1 PoC).
- Search / tags / progreso por sprint.
- React / Sass.

### 📦 Definition of Done

1. `docs/index.html` funciona como Shell único.
2. `docs/js/router.js` navega sin recargar.
3. `docs/02midLevel/partials/<sprint>.partial.html` se inyecta en `#appView`.
4. Sidebar muestra:
   - TOC general siempre
   - TOC sprint solo cuando corresponde
5. Fullscreen no se pierde al navegar (no hay recarga).
6. Botones flotantes siempre funcionales.
7. Commit atómico y reversible.

---
