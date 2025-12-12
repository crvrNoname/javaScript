<!-- ===================================================================== -->
<!-- FILE: sprintLibroWeb.md                                               -->
<!-- ===================================================================== -->

# 📘 Libro de Sprints — SprintLibroWeb (Dalto+)

Registro histórico, técnico y estratégico del proceso de desarrollo.  
Cada sprint documenta objetivos, tareas, decisiones técnicas, cambios al código y próximos pasos.

---

## 📅 Sprint 001 — Inicio del Proyecto & Estructura Base

**Estado:** ✔️ Completado  
**Fecha:** 2025-01-XX

### 🎯 Objetivos

- Crear estructura general del proyecto.
- Implementar repositorio Git en GitHub.
- Crear archivos iniciales: README, .gitignore, index.

### 🧩 Resultado

- Proyecto inicial operativo.
- Carpetas base creadas.
- Flujo VSCode + Git funcionando.

---

## 📅 Sprint 002 — Sidebar + Render Dinámico de Sprints

**Estado:** ✔️ Completado  
**Fecha:** 2025-01-XX

### 🎯 Objetivos

- Crear menú lateral (sidebar).
- Implementar render dinámico con JS.
- Añadir estructura de capítulos y sprints.

### 🧩 Cambios técnicos

- `sidebar.js` creado.
- `docs/js/data/` con arrays de capítulos y sprints.
- Base de diseño de sidebar lista.

---

## 📅 Sprint 003 — Mobile Menu (tipo GPT) + Mejora UI

**Estado:** ✔️ Completado  
**Fecha:** 2025-01-XX

### 🎯 Objetivos

- Menú lateral usable en mobile.
- Botón hamburguesa flotante.
- Overlay clicable.
- Mejoras en paddings y legibilidad.

### 🧪 Problemas detectados y resueltos

- Sidebar borrosa → corregido.
- Overlay bloqueaba interacción → solucionado.
- Padding excesivo → optimizado.

### 🧩 Cambios técnicos

- CSS responsive reorganizado.
- Lógica `sidebar-open` refinada.
- Ajustes `.toc` y espaciados.

---

## 📅 Sprint 004 — Documentación & Mejores Prácticas del Proyecto

**Estado:** 🔄 En desarrollo  
**Fecha:** 2025-01-XX

### 🎯 Objetivos

- Crear `STYLE-GUIDE.md`
- Crear `SPRINT-BEST-PRACTICE.md`
- Crear `CHECKLIST.md`
- Crear `CHANGELOG.md`
- Organizar flujo profesional de commits

### 📚 Archivos documentales agregados

- `STYLE-GUIDE.md`
- `CHECKLIST.md`
- `SPRINT-BEST-PRACTICE.md`
- `CHANGELOG.md`
- `commits.md`

---

## 📅 Sprint 004.5 — Chapter Tag & Code Pills (UI Fix)

**Estado:** ✔️ Completado  
**Fecha:** 2025-01-XX

> Ajuste visual de `.chapter-tag` y `<code>` inline para evitar roces y desalineación.

### 🎯 Objetivo

- Más aire vertical en `.chapter-tag`.
- `<code>` inline como “píldoras” centradas sin afectar `pre > code`.
- Compatibilidad con breakpoints (1200 / 900 / 768 / 600).

### ✅ Tareas realizadas

- Ajuste CSS de `.chapter-tag`.
- Estilo específico `<code>` inline.
- Pruebas en breakpoints clave.
- Test de regresión en capítulos con uso intensivo de `<code>`.

### 💬 Commit sugerido (referencia)

`chore(ui): refine chapter tag spacing & inline code pills`

---

## 📅 Sprint 005 — Fullscreen Layout (HTML Prep)

**Estado:** ✔️ Completado  
**Fecha:** 2025-01-XX

**Objetivo:** preparar HTML para layout fullscreen moderno (tipo Notion/ChatGPT).  
**Notas:** detalle completo en `CHECKLIST.md` (Sprint 005).

---

## 📅 Sprint 006 — Fullscreen Layout (CSS Base)

**Estado:** ✔️ Completado  
**Fecha:** 2025-01-XX

**Objetivo:** fullscreen CSS base con sidebar fija en desktop y drawer en mobile.  
**Notas:** detalle completo en `CHECKLIST.md` (Sprint 006).

---

## 📅 Sprint 007 — Sidebar Drawer (JS Clean & Scroll Lock)

**Estado:** ✔️ Completado  
**Fecha:** 2025-01-XX

**Objetivo:** unificar control del drawer y bloquear scroll en mobile.  
**Notas:** detalle completo en `CHECKLIST.md` (Sprint 007).

---

## 📅 Sprint 008 — Fine-Tuning Fullscreen Layout

**Estado:** 🧪 En pruebas / pendiente de cierre  
**Fecha:** 2025-01-XX

**Objetivo:** pulir paddings, alturas, scroll y “feeling web-app” (Notion/ChatGPT).  
**Notas:** checklist detallado en `CHECKLIST.md` (Sprint 008).

---

## 📅 Sprint 009 — Fullscreen Real (API requestFullscreen) + Polish

**Estado:** 🕐 Pendiente  
**Fecha:** 2025-01-XX

**Objetivo:** botón fullscreen real tipo F11 + sincronización por `fullscreenchange`.  
**Notas:** checklist detallado en `CHECKLIST.md` (Sprint 009).

---

## 📅 Sprint 010 — Optimización de Performance

**Estado:** 🌱 Sugerido / futuro posible  
**Fecha:** -

### 🎯 Objetivo

- Lazy-load de imágenes / contenido pesado
- Menos repaints
- CSS/JS minificado (si se agrega pipeline)
- Evaluación de costo DOM/listeners

---

## 📅 Sprint 011 — Accesibilidad & SEO

**Estado:** 🌱 Sugerido / futuro posible  
**Fecha:** -

### 🎯 Objetivo

- Navegación teclado
- Contraste WCAG real en dark mode
- Roles semánticos + landmarks
- Meta tags SEO básicos

---

## 📅 Sprint 012 — Refactor CSS (Componentización)

**Estado:** 🌱 Sugerido / futuro posible  
**Fecha:** -

### 🎯 Objetivo

- Separar CSS por componentes (sidebar, cards, layout, utils)
- Limpieza de duplicados
- Estándar consistente (sin “div soup” de estilos)

---

## 📅 Sprint 013 — Refactor HTML (Semántica & Orden)

**Estado:** 🌱 Sugerido / futuro posible  
**Fecha:** -

### 🎯 Objetivo

- Mejor semántica (nav/main/aside/section)
- Estructura optimizada
- Menos wrappers innecesarios

---

## 📅 Sprint 014 — Migración a JS Modules (import/export)

**Estado:** 🌱 Sugerido / futuro posible  
**Fecha:** -

### 🎯 Objetivo

- ESM profesional
- Archivos interconectados con imports claros
- Preparación para build futuro (si se decide)

---

## 📅 Sprint 015 — Preparación para app React (a futuro)

**Estado:** 🌱 Sugerido / futuro posible  
**Fecha:** -

### 🎯 Objetivo

- Extraer datos/UI a JSON para reutilizar
- Arquitectura portable
- Base sólida para migración a framework

---

## 📌 Estado general del proyecto

| Sprint | Estado |
| ------ | ------ |
| 001    | ✔️     |
| 002    | ✔️     |
| 003    | ✔️     |
| 004    | 🔄     |
| 004.5  | ✔️     |
| 005    | ✔️     |
| 006    | ✔️     |
| 007    | ✔️     |
| 008    | 🧪     |
| 009    | 🕐     |
| 010    | 🌱     |
| 011    | 🌱     |
| 012    | 🌱     |
| 013    | 🌱     |
| 014    | 🌱     |
| 015    | 🌱     |

| Icono | Estado                        | Significado                                             |
| ----- | ----------------------------- | ------------------------------------------------------- |
| ✔️    | **Completado**                | Sprint terminado y validado.                            |
| 🔄    | **En progreso**               | Sprint activo (construcción/ajuste).                    |
| 🕐    | **Pendiente**                 | Sprint planificado no iniciado.                         |
| 🧩    | **Parcial / En revisión**     | Parcialmente implementado; requiere revisión/refactor.  |
| ⚠️    | **Bloqueado**                 | No avanza por dependencia externa o decisión pendiente. |
| 🚧    | **Mantenimiento**             | Completado pero optimizándose/corrigiéndose.            |
| 🧪    | **En pruebas**                | Funcionalmente listo, en QA/UX antes de cerrar.         |
| 🌱    | **Sugerido / Futuro posible** | Tentativo, backlog a largo plazo.                       |
| 🔥    | **Alta prioridad**            | Sprint crítico/urgente para estructura del proyecto.    |

---

## 📌 Cómo agregar nuevos sprints (plantilla)

```md
## 📅 Sprint XXX — Título

**Estado:** 🕐  
**Fecha:** YYYY-MM-DD (o 2025-01-XX)

### 🎯 Objetivos

### 🧩 Cambios técnicos

### 🧪 Problemas encontrados

### 📍 Próximos pasos
```
