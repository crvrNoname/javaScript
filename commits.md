# 📜 Historial de Commits — Roadmap JS (Mobile Upgrade)

Registro cronológico y técnico de los commits relevantes del proyecto **SprintLibroWeb**.  
Cada entrada resume **qué se hizo**, **por qué** y **qué desbloquea** a nivel de roadmap.

---

## 001 — initial layout sync

**Tipo:** `chore(layout)`

- Ajustes base de estructura del proyecto
- Sincronización con diseño original
- Preparación del layout para mejoras mobile y fullscreen

---

## 002 — mobile shell improvements

**Tipo:** `feat(ui)`

- Mejora de padding general
- Ajuste de `border-radius`
- Optimización del contenedor `.shell`
- Base para layout fullscreen posterior

---

## 003 — mobile sidebar spacing

**Tipo:** `feat(ui)`

- Reducción del padding del sidebar
- Mejora del ancho efectivo del TOC
- Legibilidad mejorada en pantallas pequeñas
- Primer refinamiento del menú tipo GPT

---

## 004 — sidebar mobile overlay fix

**Tipo:** `fix(ui)`

- Corrección de overlay en mobile
- Evita clics fantasma sobre el contenido
- Asegura cierre correcto del drawer

---

## 005 — fullscreen layout base (HTML)

**Tipo:** `feat(layout)`

- Introducción de `body.layout-fullscreen`
- Aplicación de `<main class="main-content">`
- Mantención del wrapper `.shell`
- HTML preparado para fullscreen real

---

## 006 — fullscreen layout base (CSS)

**Tipo:** `feat(layout)`

- Eliminación del layout centrado
- `.shell` pasa a fullscreen real
- Sidebar fija en desktop
- Drawer mantenido en mobile
- Sin impacto en el contenido existente

---

## 007 — sidebar drawer cleanup & scroll lock

**Tipo:** `refactor(js)`

- Unificación de lógica del drawer
- Cierre por:
  - botón
  - overlay
  - tecla `Esc`
  - click en TOC (mobile)
- Bloqueo de scroll del body en mobile
- Comportamiento estable en resize

---

## 008 — chapter tag & inline code polish

**Tipo:** `chore(ui)`

- Ajuste visual de `.chapter-tag`
- Corrección de espaciado vertical
- Refinamiento de `<code>` inline:
  - centrado
  - padding
  - separación entre píldoras
- Sin afectar bloques `pre > code`

---

## 009 — sidebar fade & toc visual refinement

**Tipo:** `feat(ui)`

- Implementación de fade inferior real en sidebar
- Mejora del ocultamiento progresivo del TOC
- Ajustes de contraste light/dark en el degradé
- Preparación visual para fullscreen

---

## 010 — responsive padding, typography & sidebar polish

**Tipo:** `feat(ui)`

- Tipografía global consistente
- Jerarquía h1 / h2 / h3 por breakpoint
- Padding táctil correcto en mobile (≤600px)
- Animaciones suaves en ítems del TOC
- Corrección de selectores inconsistentes
- UI validada en:
  - desktop
  - tablet
  - mobile
  - fullscreen base

---

## 011 — fullscreen real API + sync

**Tipo:** `feat(layout)`

- Implementación de Fullscreen real vía `requestFullscreen`
- Botón dedicado independiente de F11
- Sincronización de icono mediante `fullscreenchange`
- Ajustes de padding específicos para fullscreen real
- Fallback seguro en navegadores sin soporte
- Sin impacto en mobile/tablet

---

## 012 — js modular cleanup

**Tipo:** `refactor(js)`

- Validación final de `utils.js` como helpers reutilizables
- Eliminación de listeners duplicados
- Separación clara de responsabilidades por módulo
- `main.js` reducido a orquestación de inicialización
- Garantía de acceso al DOM solo tras `DOMContentLoaded`
- Base sólida para escalado futuro (SPA / React)

---

## 🔜 Próximos commits esperados (planificados)

> Estos commits NO llevan fecha: son una **ruta de cierre** del proyecto.  
> Ordenados para minimizar riesgo (primero contenido/modelo, después tooling).

### 013 — sprints model stabilization (data contract)

**Tipo:** `refactor(data)`

- Normalizar el “contrato” del objeto sprint/capítulo en `sprintsMidLevel.js`
- Asegurar campos mínimos (ejemplo):
  - `capitulo`, `tituloCapitulo`, `descripcion`
  - `sprints[]: { numero, titulo, archivo, estado?, tags? }`
- Definir validación simple (runtime) o fallback seguro si falta data
- Dejar el modelo listo para:
  - render del índice
  - render del TOC
  - futuro: filtros/búsqueda/progreso

**Desbloquea:** rellenar contenido sin romper UI por inconsistencias.

---

### 014 — sprint content template (single source of truth)

**Tipo:** `docs(content)`

- Definir plantilla oficial de contenido de sprint (estructura interna):
  - Objetivo
  - Explicación
  - Ejemplos
  - Checklist final
- Acordar placeholders estándar (logo, capturas, demo gifs)
- Alinear `STYLE-GUIDE.md` + `SPRINT-BEST-PRACTICE.md` con esta plantilla

**Desbloquea:** que todos los sprints queden homogéneos y escalables.

---

### 015 — midLevel completion pass (fill + links integrity)

**Tipo:** `docs(content)`

- Rellenar sprints MidLevel según el modelo estabilizado
- Verificar:
  - `archivo` existe / link correcto
  - anchors internos coherentes
  - navegación desde tarjetas y TOC sin roturas
- Cierre del bloque MidLevel en modo “producto usable”

**Desbloquea:** pasar formalmente a Junior y Master sin deuda de estructura.

---

### 016 — junior scaffold + index integration

**Tipo:** `feat(content)`

- Crear base `01junior/` con estructura de sprints
- Integrar Junior en `sprintsMidLevel.js` (o renombrar a `sprintsRoadmap.js`)
- Ajustar render para soportar múltiples niveles sin hacks

**Desbloquea:** roadmap completo (Junior → MidLevel → Master) en una sola app.

---

### 017 — master scaffold + advanced sections

**Tipo:** `feat(content)`

- Crear base `03master/` (o la ruta final definida)
- Definir “macro-capítulos” Master (arquitectura, patrones, tooling, etc.)
- Integrar Master al índice general y TOC

**Desbloquea:** cierre total del “Libro Web” como sistema.

---

### 018 — accessibility baseline (keyboard + landmarks)

**Tipo:** `feat(a11y)`

- Landmarks semánticos (`nav`, `main`, `aside`, `section`)
- Navegación por teclado básica:
  - focus visible
  - tab order lógico
  - `Esc` coherente (ya lo tienes en drawer)
- Revisión de contraste real (dark mode) en links/hover/selected

**Desbloquea:** nivel profesional + usabilidad real.

---

### 019 — search / filter (TOC + cards)

**Tipo:** `feat(ui)`

- Búsqueda simple (filtra sprints por título / tags)
- (Opcional) filtros por estado: `pendiente / hecho / en progreso`
- Mantener sin dependencias (vanilla)

**Desbloquea:** navegar cientos de sprints sin fricción.

---

### 020 — sass migration (structure only, no behavior change)

**Tipo:** `refactor(css)`

- Migrar `style.css` a estructura SCSS:
  - `tokens/` (variables)
  - `base/` (reset, typografía)
  - `layout/` (shell, main)
  - `components/` (sidebar, cards, buttons, toc)
  - `utils/` (helpers)
- Compilar a un **único CSS final** para GitHub Pages
- Mantener output idéntico visualmente (cero cambios de UI)

**Desbloquea:** mantenimiento del CSS y futura migración a React con menos dolor.

---

### 021 — performance pass (safe wins)

**Tipo:** `perf(web)`

- Reducir listeners innecesarios (si aparecen)
- Lazy-load imágenes grandes (si existen)
- Optimización básica de assets (tamaño / formatos)
- (Opcional) minificado simple via build script

**Desbloquea:** carga rápida y experiencia sólida.

---

### 022 — SPA PoC (optional, if you decide)

**Tipo:** `feat(spa)`

- Router mínimo con `pushState/popstate`
- Shell único + carga de partials
- Doble índice (General vs Sprint) si se mantiene como meta del proyecto

**Desbloquea:** sensación “app” real + estado persistente en navegación.

---

### 023 — react migration kickoff (future)

**Tipo:** `chore(react)`

- Crear base React (si se decide)
- Reutilizar data model (commit 013) como fuente
- Mantener la versión vanilla estable como referencia

**Desbloquea:** escalado real de UI/estado sin perder el trabajo anterior.

---

# ✔️ Nota final

Este historial **no es solo un log**, es un **mapa de decisiones técnicas**.  
Mantenerlo actualizado permite:

- entender por qué el código es como es
- evitar refactors innecesarios
- facilitar migración futura a React

Este archivo debe crecer junto al proyecto.
