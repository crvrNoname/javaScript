# 📋 CHECKLIST.md

**Panel de control general del proyecto SprintLibroWeb**  
_(Todo lo que debe revisarse, completarse y mantenerse durante el desarrollo)_

---

# 1️⃣ Checklist por ETAPAS del proyecto

### 🧱 **Estructura base**

- [x] Organización inicial de carpetas (`docs/`, `03master/`, etc.)
- [x] Archivos principales creados (`index.html`, `style.css`, `main.js`)
- [x] Crear `utils.js` para funciones comunes

---

### 🎨 **UI / Diseño**

- [x] Estilo general definido
- [x] Paleta de colores light/dark aplicada
- [x] Radii y espaciados estandarizados
- [ ] Ajustes de tipografía global
- [ ] Revisión UX en pantallas pequeñas

#### 🔍 Revisión UX en pantallas pequeñas (breakpoints 900 / 768 / 600px)

- [ ] Sidebar se muestra bien en 900px
- [ ] TOC ajustado y legible
- [ ] Botones flotantes no se superponen
- [ ] No hay doble scrollbar
- [ ] Tipografías legibles
- [ ] Padding adecuado para el dedo (mín. 12–16px)
- [ ] Animaciones fluidas
- [ ] Contraste correcto (light/dark)

---

### 📑 **Sidebar (menú tipo GPT)**

- [x] Sidebar móvil funcional
- [x] Overlay funcionando correctamente
- [x] Botón menú ubicado correctamente en mobile
- [x] Fondo sólido para mejor legibilidad
- [ ] Ajustar transición de apertura/cierre
- [ ] Añadir animación suave en elementos del TOC
- [ ] Preparar versión fullscreen (pendiente)

---

## 🧪 Checklist visual — Cierre del Sprint

- [x] `.chapter-tag` tiene aire suficiente respecto al contenido anterior y siguiente.
- [x] Los emojis/íconos dentro de `.chapter-tag` se alinean bien con el texto.
- [x] Las burbujas `<code>` se ven centradas en:
  - [x] Párrafos normales.
  - [x] Títulos que incluyen `<code>` (ej: “Relación conxxx el DOM (`document`)”).
  - [x] Ítems de listas con varias `<code>` seguidas.
- [x] En **600px (mobile)** las burbujas `<code>` no se montan ni rompen el layout.
- [x] Ningún bloque de código largo (`pre > code`) se vio afectado por los cambios.

### 📱 **Modo Fullscreen (pendiente de construir)**

# ✅ Sprint 005 — Fullscreen Layout (Paso 1)

### ✔ Checklist de implementación (HTML Ready)

- [x] Se agregó la clase `layout-fullscreen` al `<body>`.
- [x] Se asignó `class="main-content"` al `<main>`.
- [x] Se mantuvo el wrapper `.shell` sin eliminarlo (se adaptará en Sprint 006).
- [x] El overlay mobile (`#sidebarOverlay`) permanece intacto.
- [x] Se identificaron los triggers de menú (`menuToggle` y `sidebarToggle`) para unificación futura.
- [x] Estructura HTML lista para recibir el **Fullscreen CSS** (sidebar fija + drawer mobile).
- [x] No se modificó la estructura del contenido (capítulos, header, etc.).

### ✔ Commit aplicado

# 🚀 Sprint 006 — Fullscreen Layout (CSS Base)
### ✔ Checklist

- [x] Body dejó de estar centrado (`layout-fullscreen` aplicado).
- [x] `.shell` convertida a contenedor fullscreen sin bordes ni sombra.
- [x] Sidebar fija en desktop (`position: fixed`, `width: 300px`).
- [x] Main-content correctamente desplazado a la derecha en ≥900px.
- [x] En mobile, la sidebar sigue siendo drawer sin cambios visuales.
- [x] Ningún elemento de contenido pierde padding o estructura.
- [ ] Preparado para Sprint 007 (JS Drawer clean-up).


- [ ] Sidebar ocupa 100% de alto y mayor ancho
- [ ] Animación tipo “drawer” nativa
- [ ] Botón close dedicado (opcional)
- [ ] Ajustes de scroll internos
- [ ] Testing UX para pulgar (one-hand use)

---

### 🌙 **Modo Oscuro**

- [x] Variables CSS para dark mode
- [x] Botón toggle funcional
- [x] Persistencia en localStorage
- [ ] Refinar sombras para tema oscuro
- [ ] Mejorar contraste accesible en enlaces del TOC

---

### 🔧 **JS Modular / Refactorización**

- [x] `main.js` con lógica general
- [x] `sidebar.js` aislado
- [x] `theme.js` para modo oscuro
- [x] `scrooll.js` para scroll top (renombrar luego a `scroll.js`)
- [ ] Mover funciones duplicadas a `utils.js`
- [ ] Documentación interna en cada módulo
- [ ] Evitar accesos al DOM antes de `DOMContentLoaded`

---

### 🚀 **Performance**

- [ ] Minificar CSS (en sprint futuro)
- [ ] Minificar JS (en sprint futuro)
- [ ] Optimizar imágenes de `/img`
- [ ] Lazy-load de imágenes grandes
- [ ] Reducir listeners innecesarios

---

### ♿ **Accesibilidad**

- [x] Todos los botones con `aria-label`
- [x] Área mínima clickeable: 40×40
- [ ] Navegación con teclado (futuro sprint)
- [ ] Revisar contraste WCAG en modo oscuro
- [ ] Añadir `role` en estructuras importantes

---

### 🧹 **Limpieza de código**

- [ ] Prettier configurado
- [ ] ESLint (futuro sprint)
- [ ] Remover estilos redundantes
- [ ] Unificar comentarios
- [ ] Revisar indentación general del proyecto

---

# 2️⃣ Checklist ATÓMICO por cada módulo

---

## 📌 **sidebar.js**

- [ ] Añadir animación más suave al abrir/cerrar
- [ ] Ajustar ancho del panel según contenido
- [ ] Asegurar cierre automático en todos los TOC links
- [ ] Mover lógica repetida en un futuro a utils.js
- [x] Fondo sólido para mejor lectura en mobile
- [ ] Preparar versión fullscreen

---

## 🌗 **theme.js**

- [x] Guardar preferencia en localStorage
- [x] Aplicar tema en `DOMContentLoaded`
- [ ] Animación suave al cambiar de tema
- [ ] Revisar contraste de todos los elementos

---

## 🡅 **scrooll.js (renombrar a scroll.js)**

- [x] Botón "volver arriba" funcional
- [ ] Mejorar condiciones de aparición
- [ ] Animación más fluida al hacer scroll
- [ ] Unificar nombre de archivo a `scroll.js`

---

## 🧩 **main.js**

- [ ] Eliminar funciones que ya se movieron a módulos específicos
- [ ] Garantizar que TODO el DOM se ejecute con `DOMContentLoaded`
- [ ] Preparar instancias limpias para modularización futura
- [ ] Documentación interna pendiente

---

# 3️⃣ Checklist de buenas prácticas ACTIVAS

### ✔️ Convenciones del proyecto

- [x] Nombres en JS → camelCase
- [x] Nombres en CSS → kebab-case
- [x] Variables CSS documentadas
- [ ] Evitar selectores profundos
- [ ] Añadir encabezado a todos los archivos JS

---

### ✔️ Reglas de commits

- [x] Commits atómicos
- [x] Formato convencional (`feat:`, `fix:`, etc.)
- [x] Documentar cada commit en `commits.md`
- [ ] Crear etiqueta para cada milestone del proyecto

---

### ✔️ Documentación del repositorio

- [x] README estructurado
- [x] Incluir STYLE-GUIDE.md
- [x] Incluir BEST-PRACTICES.md
- [x] Incluir CHECKLIST.md
- [ ] Mantener changelog actualizado sprint por sprint

---

# 4️⃣ Última verificación antes de cada Sprint

Antes de avanzar al siguiente sprint debes revisar:

- [ ] Sidebar funciona bien en mobile
- [ ] Theme toggle funciona y mantiene persistencia
- [ ] El TOC muestra correctamente todos los capítulos
- [ ] El scroll dentro del sidebar no rompe el layout
- [ ] No hay errores en la consola
- [ ] Todos los archivos del sprint anterior están documentados
- [ ] Se escribió el commit atómico correspondiente

---

# ✔️ Conclusión

Este archivo es tu **centro de control general**.  
Si lo mantienes actualizado, tu proyecto seguirá una ruta profesional, ordenada y escalable sprint tras sprint.
