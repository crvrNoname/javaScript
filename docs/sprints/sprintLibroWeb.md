# 📘 Libro de Sprints — Proyecto Web (Dalto+)

Registro histórico, técnico y estratégico del proceso de desarrollo del proyecto.  
Cada sprint documenta: objetivos, tareas, decisiones técnicas, cambios al código y próximos pasos.

---

## 📅 Sprint 001 — Inicio del Proyecto & Estructura Base
**Estado:** ✔️ Completado  
**Fecha:** 2025-01-XX  

### 🎯 Objetivos
- Crear la estructura general del proyecto.
- Implementar repositorio Git en GitHub.
- Crear archivos iniciales: README.md, .gitignore, index.html.

### 🧩 Resultado
- Proyecto inicial operativo.
- Carpetas base creadas.
- Flujo de trabajo con VSCode + Git funcionando.

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
- `data/` con arrays de capítulos y sprints.
- Diseño base de sidebar listo.

---

## 📅 Sprint 003 — Mobile Menu (tipo GPT) + Mejora UI
**Estado:** ✔️ Completado  
**Fecha:** 2025-01-XX  

### 🎯 Objetivos
- Hacer el menú lateral usable en mobile.
- Botón hamburguesa flotante.
- Overlay clicable.
- Mejoras en paddings y legibilidad.

### 🧪 Problemas detectados y resueltos
- Sidebar quedaba borroso → corregido.
- Overlay no permitía clic en elementos → solucionado.
- Padding excesivo → optimizado.

### 🧩 Cambios técnicos
- CSS responsive reorganizado.
- `sidebar-open` logic refinada.
- Ajustes de `.toc` y espaciados.

---

## 📅 Sprint 004 — Mejores Prácticas + Documentación del Proyecto
**Estado:** 🔄 En desarrollo  
**Fecha:** 2025-01-XX  

### 🎯 Objetivos
- Crear STYLE-GUIDE.md
- Crear SPRINT-BEST-PRACTICES.md
- Crear CHECKLIST.md
- Crear CHANGELOG.md
- Organizar flujo profesional de commits.

### 📚 Archivos documentales agregados
- `STYLE-GUIDE.md`
- `CHECKLIST.md`
- `SPRINT-BEST-PRACTICES.md`
- `CHANGELOG.md`
- `commits.md`

---
# 🧩 Sprint Nº004.5 — Chapter Tag & Code Pills

> Ajuste visual de la burbuja `chapter-tag` y de las burbujas `<code>` inline  
> para evitar que queden “apretadas” con el contenido y se vean desalineadas.

---

## 🎯 Objetivo del Sprint

- Dar **más aire vertical** a los mensajes tipo “nota/tip” (`.chapter-tag`).
- Centrar mejor las burbujas `<code>` en la línea de texto.
- Evitar que las burbujas `<code>` queden pegadas entre sí o al texto.
- Mantener compatibilidad con el diseño actual y con `STYLE-GUIDE.md`.

---

## ✅ Tareas

1. **Actualizar el bloque CSS de `.chapter-tag`** al final de  
   `/docs/css/style.css` para:
   - Agregar margen vertical extra.
   - Ajustar `line-height` y layout interno si es necesario.

2. **Definir estilo específico para `<code>` inline** (sin afectar `pre > code`):
   - Convertirlos en “píldoras” centradas (`inline-flex`).
   - Ajustar padding interno y `border-radius`.
   - Agregar `margin` lateral para que no se peguen entre sí.

3. **Probar el nuevo diseño en los anchos clave**:
   - 1200px+ (layout full).
   - 900px.
   - 768px.
   - 600px (mobile).
   - Verificar:
     - que `.chapter-tag` no roce ni con el listado anterior ni con el título
       siguiente;
     - que las burbujas `<code>` no se monten unas sobre otras y se vean
       centradas tanto en párrafos como en títulos/viñetas.

4. **Test de regresión rápido**:
   - Revisar al menos 2 capítulos distintos donde haya:
     - una `.chapter-tag`;
     - varias `<code>` seguidas (`window`, `document`, etc.);
     - títulos con `<code>` dentro de un `h2/h3`.

5. **Commit & mensaje**:
   - Commit sugerido:  
     `chore(ui): refine chapter tag spacing & inline code pills`
---------------------------------------------

## 📅 Sprint 005 — Fullscreen Layout (Próximo)
**Estado:** 🕐 Próximo  
**Objetivo:** Llevar el proyecto a un layout fullscreen moderno, sin envolvente `.shell`, como aplicaciones tipo Notion / ChatGPT.

### 📌 Alcance previsto
- Eliminar container fijo central.
- Sidebar flotante + contenido en ancho completo en desktop.
- Adaptación al nuevo sistema responsive.

---

## 📅 Sprint 006 — Modularización del JavaScript
**Estado:** 🕐 Pendiente  
**Objetivo:** Separar completamente `main.js` en módulos atómicos.

### Módulos previstos:
- `sidebar.js`
- `scroll.js`
- `theme.js`
- `render.js`
- `data.js`

---

## 📅 Sprint 007 — Optimización del Performance
**Estado:** 🕐 Pendiente  
**Objetivo:**
- Lazy-loading del contenido
- Menos repaints
- CSS minificado
- Evaluación del DOM cost

---

## 📅 Sprint 008 — Accesibilidad y SEO
**Estado:** 🕐 Pendiente  
**Objetivo:**
- ARIA Roles
- Tabindex ordenado
- Contrastes WCAG
- Meta tags SEO

---

## 📅 Sprint 009 — Refactorización del CSS
**Estado:** 🕐 Pendiente  
**Objetivo:**  
- Separar CSS en componentes  
- BEM o Utility Classes  
- Limpieza de duplicados  

---

## 📅 Sprint 010 — Refactorización del HTML
**Estado:** 🕐 Pendiente  
**Objetivo:**  
- Semántica  
- Estructura optimizada  
- Menos “div soup”  

---

## 📅 Sprint 011 — Migración a JS Modules (import/export)
**Estado:** 🕐 Pendiente  
**Objetivo:**  
- Estructura ESM profesional  
- Archivos interconectados  
- Preparación para builds futuras  

---

## 📅 Sprint 012 — Preparación para app React (a futuro)
**Estado:** 🕐 Pendiente  
**Objetivo:**  
- Extraer datos y UI a JSON para reutilizar  
- Crear arquitectura portable  
- Dejar el proyecto listo para migración a un frontend framework  

---

# 📌 Estado general del proyecto
| Sprint | Estado |
| ------ | ------ |
| 001    | ✔️     |
| 002    | ✔️     |
| 003    | ✔️     |
| 004    | 🔄     |
| 005    | 🕐     |
| 006    | 🕐     |
| 007    | 🌱     |
| 008    | 🌱     |
| 009    | 🕐     |
| 010    | 🌱     |
| 011    | 🌱     |
| 012    | 🌱     |


| Icono | Estado                        | Significado                                                         |
| ----- | ----------------------------- | ------------------------------------------------------------------- |
| ✔️    | **Completado**                | El sprint está terminado y validado. No requiere más trabajo.       |
| 🔄    | **En progreso**               | El sprint está activo: se está construyendo o ajustando.            |
| 🕐    | **Pendiente**                 | Sprint planificado pero aún no iniciado.                            |
| 🧩    | **Parcial / En revisión**     | Sprint parcialmente implementado, en espera de revisión o refactor. |
| ⚠️    | **Bloqueado**                 | No avanza por dependencia externa o decisión pendiente.             |
| 🚧    | **En mantenimiento**          | Sprint ya completado que está siendo optimizado o corregido.        |
| 🧪    | **En pruebas**                | Sprint finalizado funcionalmente pero en evaluación QA/UX.          |
| 🌱    | **Sugerido / Futuro posible** | Sprint tentativo, ideal para backlog a largo plazo.                 |
| 🔥    | **Alta prioridad**            | Sprint urgente o crítico para la estructura del proyecto.           |

---

# 📌 Cómo agregar nuevos sprints
Copiar esta plantilla:

````md
## 📅 Sprint XXX — Título
**Estado:** 🕐  
**Fecha:**  

### 🎯 Objetivos

### 🧩 Cambios técnicos

### 🧪 Problemas encontrados

### 📍 Próximos pasos
