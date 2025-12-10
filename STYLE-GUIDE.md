# 🎨 STYLE-GUIDE.md  
**Guía oficial de estilo del proyecto SprintLibroWeb**  
*(Consistencia, orden y escalabilidad para docs y demo master)*  

---

# 1️⃣ Objetivo del documento
Este documento define **todas las reglas oficiales** de:

- Estructura del proyecto  
- Nomenclatura de archivos y carpetas  
- Estándares CSS / JS / HTML  
- Arquitectura de módulos  
- Responsiveness  
- Accesibilidad  
- Documentación interna  
- Buenas prácticas de desarrollo  

Es la base para asegurar que el proyecto crezca ordenado mientras avanzamos sprint por sprint.

---

# 2️⃣ Estructura real del proyecto (oficial)

```
docs/
  01junior/
  02midLevel/
  03master/
      assets/
          icons/
          img/
      css/
          style.css
      js/
          data/
          main.js
          scrooll.js
          sidebar.js
          theme.js
      index.html
.gitignore
CHANGELOG.md
CHECKLIST.md
commits.md
README.md
SPRINT-BEST-PRACTICES.md
STYLE-GUIDE.md
```

⭐ *Esta es la estructura oficial. Toda nueva funcionalidad debe respetarla.*

---

# 3️⃣ Convenciones de nombres

## ✔️ Archivos y carpetas
| Tipo | Regla | Ejemplo |
|------|--------|---------|
| carpetas | kebab-case (excepto docs) | `assets/icons/`, `03master/js/` |
| html | nombre descriptivo | `index.html`, `domAvanzado.html` |
| css | kebab-case | `style.css` |
| js | camelCase para archivos funcionales | `sidebar.js`, `theme.js` |
| datos | carpetas internas organizadas | `js/data/sprints.js` |

---

## ✔️ JavaScript (variables, funciones, módulos)
| Elemento | Estilo | Ejemplo |
|----------|---------|---------|
| variables | camelCase | `currentTheme` |
| funciones | verbo + camelCase | `toggleSidebar()` |
| clases DOM | kebab-case | `"sidebar-open"` |
| constantes | MAYÚSCULAS | `DEFAULT_THEME = "light"` |

---

## ✔️ CSS
| Elemento | Regla | Ejemplo |
|----------|--------|---------|
| clases | kebab-case | `.sidebar-header` |
| variables CSS | --kebab-case | `--accent-soft` |

**Reglas clave:**

✔️ nombres **semánticos**, no visuales  
❌ `.blue-card`  
✔️ `.sprint-card`

✔️ evitar selectores profundos  
❌ `.sidebar .header .wrap .title span`  
✔️ `.sidebar-title`

---

# 4️⃣ Guía visual (CSS)

## 🌈 Paleta de colores

### ✨ Tema claro
```
--bg: #f5f5f7
--bg-alt: #ffffff
--text: #1e1e20
--accent: #2563eb
--accent-soft: rgba(37,99,235,0.08)
--chapter-bg: #f8fafc
```

### 🌙 Tema oscuro
```
--bg: #020617
--bg-alt: #020617
--text: #e5e7eb
--accent: #38bdf8
--accent-soft: rgba(56,189,248,0.16)
--chapter-bg: #0b1120
```

---

## 📐 Bordes y radios
- tarjetas → `16px`  
- contenedores → `20px – 32px`  
- botones circulares → `999px`  

---

## 📏 Spacing oficial
| Elemento | Espaciado |
|---------|-----------|
| `.sidebar` | `1.25rem – 1.75rem` |
| `.toc a` | `0.45rem – 0.70rem` |
| `.sprint-card` | `1.0rem – 1.2rem` |
| `.chapter-group` | `1.2rem – 1.5rem` |

---

# 5️⃣ Responsive design

### 🔹 Breakpoints oficiales
```
@media (max-width: 900px) → mobile + sidebar tipo GPT  
@media (max-width: 768px) → tarjetas a 1 columna  
@media (max-width: 600px) → ajustes tipográficos + botones  
```

### Reglas
✔️ El sidebar móvil **solo se controla desde 900px**  
✔️ Cada breakpoint modifica solo lo necesario  
✔️ Deben documentarse cambios importantes en este archivo  

---

# 6️⃣ JavaScript: arquitectura por módulos

Tu estructura actual:

```
main.js        → lógica general
sidebar.js     → menú lateral móvil + overlay
theme.js       → modo claro/oscuro + localStorage
scrooll.js     → botón "volver arriba" + efectos de scroll
js/data/       → datos del proyecto (TOC, sprints, metadatos)
```

---

### ✔️ Encabezado obligatorio en cada archivo JS

\`\`\`js
/**
 * sidebar.js
 * Control del menú lateral móvil tipo ChatGPT
 * - Toggle
 * - Overlay
 * - Cerrar al seleccionar sprint
 */
\`\`\`

---

### ✔️ No duplicar lógica
Si una función se repite → mover a `utils.js` (se creará cuando haya suficientes funciones).

---

### ✔️ Todo acceso al DOM debe ejecutarse dentro de:

\`\`\`js
document.addEventListener("DOMContentLoaded", () => {
  // ...
});
\`\`\`

---

# 7️⃣ Accesibilidad

✔️ Todos los botones con `aria-label`  
✔️ Área mínima clickeable: `40px × 40px`  
✔️ Contrastes revisados para claro/oscuro  
✔️ Interacción con teclado → *Pendiente, sprint futuro*  

---

# 8️⃣ Reglas de documentación interna

Cada archivo CSS/JS debe incluir:

- Nombre del módulo  
- Propósito  
- Funciones principales  
- Dependencias internas si las hay  

Ejemplo:

\`\`\`js
// theme.js
// Controla el tema claro/oscuro del sitio
// - Guarda preferencia en localStorage
// - Aplica variables CSS dinámicamente
\`\`\`

---

# 9️⃣ Atomic commits (regla oficial)

✔️ Cambios pequeños  
✔️ Objetivo único por commit  
✔️ No mezclar UI + lógica  
✔️ Documentar cada commit en `commits.md`  
✔️ Mensaje en formato convencional:

Ejemplo real:

```
feat(ui): ampliar área del menú lateral en mobile y optimizar paddings
```

---

# 🔟 Conclusión

Este STYLE-GUIDE.md define los **estándares oficiales del proyecto SprintLibroWeb**.

Seguirlo garantiza:

- Orden  
- Escalabilidad  
- Clean code  
- Documentación consistente  
- Flujo profesional de desarrollo  
- Continuidad entre sprints  

Siempre que agregues algo nuevo, vuelve aquí.  
Este archivo es la **constitución del proyecto** ⚡

