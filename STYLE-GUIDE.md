# 🎨 STYLE-GUIDE.md

**Guía oficial de estilo del proyecto SprintLibroWeb**  
_(Consistencia, orden y escalabilidad para docs y demo master)_

---

## ✅ Estado del documento (actualizado)

✔️ Nomenclatura y estructura normalizadas  
✔️ Paleta claro/oscuro oficial definida  
✔️ Arquitectura CSS y JS coherente con CHECKLIST  
✔️ **Tipografía global definida (NUEVO)**  
✔️ **Reglas UX responsive por breakpoint (NUEVO)**

Este documento cubre directamente los pendientes:

- Ajustes de tipografía global
- Revisión UX en 900 / 768 / 600

---

## 1️⃣ Objetivo del documento

Definir **todas las reglas oficiales** de:

- Estructura del proyecto
- Nomenclatura de archivos y carpetas
- Estándares CSS / JS / HTML
- Arquitectura de módulos
- Tipografía y jerarquía visual
- Responsive design y UX
- Accesibilidad
- Documentación interna
- Buenas prácticas de desarrollo

Es la base para asegurar que el proyecto crezca ordenado sprint por sprint.

---

## 2️⃣ Estructura real del proyecto (oficial)

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
          scroll.js
          sidebar.js
          theme.js
      index.html
.gitignore
CHANGELOG.md
CHECKLIST.md
commits.md
README.md
SPRINT-BEST-PRACTICE.md
STYLE-GUIDE.md
```

⭐ Toda nueva funcionalidad debe respetar esta estructura.

---

## 3️⃣ Convenciones de nombres

### ✔️ Archivos y carpetas

| Tipo     | Regla       | Ejemplo              |
| -------- | ----------- | -------------------- |
| carpetas | kebab-case  | `assets/icons/`      |
| html     | descriptivo | `index.html`         |
| css      | kebab-case  | `style.css`          |
| js       | camelCase   | `sidebar.js`         |
| datos    | organizados | `js/data/sprints.js` |

### ✔️ JavaScript

| Elemento   | Estilo            | Ejemplo           |
| ---------- | ----------------- | ----------------- |
| variables  | camelCase         | `currentTheme`    |
| funciones  | verbo + camelCase | `toggleSidebar()` |
| constantes | MAYÚSCULAS        | `DEFAULT_THEME`   |
| clases DOM | kebab-case        | `"sidebar-open"`  |

### ✔️ CSS

| Elemento  | Regla        | Ejemplo         |
| --------- | ------------ | --------------- |
| clases    | kebab-case   | `.sprint-card`  |
| variables | --kebab-case | `--accent-soft` |

✔️ Nombres semánticos  
❌ `.blue-card`  
✔️ `.sprint-card`

---

## 4️⃣ Tipografía global (OFICIAL)

### 📌 Familia base

```
font-family: system-ui, -apple-system, BlinkMacSystemFont,
             "Segoe UI", Roboto, Inter, sans-serif;
```

### 📐 Escala tipográfica base (desktop ≥ 900px)

| Elemento    | Tamaño  |
| ----------- | ------- |
| body        | 16px    |
| h1          | 2.1rem  |
| h2          | 1.6rem  |
| h3          | 1.25rem |
| p           | 1rem    |
| small       | 0.85rem |
| code inline | 0.9em   |

### 📱 Ajustes tipográficos responsive

#### ≤ 900px

- `h1` → 1.9rem
- `h2` → 1.45rem
- Sidebar con texto ligeramente más compacto

#### ≤ 768px

- `h1` → 1.7rem
- `h2` → 1.35rem
- `p` mantiene 1rem (no bajar legibilidad)

#### ≤ 600px

- `h1` → 1.55rem
- `h2` → 1.25rem
- `p` → 0.95rem
- `line-height` mínimo: 1.55

✔️ Nunca bajar texto base de lectura bajo 15px efectivos.

---

## 5️⃣ Guía visual (CSS)

### 🌈 Paleta de colores

#### Tema claro

```
--bg: #f5f5f7
--bg-alt: #ffffff
--text: #1e1e20
--accent: #2563eb
--accent-soft: rgba(37,99,235,0.08)
--chapter-bg: #f8fafc
```

#### Tema oscuro

```
--bg: #020617
--bg-alt: #020617
--text: #e5e7eb
--accent: #38bdf8
--accent-soft: rgba(56,189,248,0.16)
--chapter-bg: #0b1120
```

---

## 6️⃣ Spacing y aire visual

| Elemento             | Valor        |
| -------------------- | ------------ |
| sidebar padding      | 1.25–1.75rem |
| toc link             | 0.45–0.7rem  |
| sprint-card          | 1–1.2rem     |
| chapter-group        | 1.2–1.5rem   |
| main-content padding | 2.4–3rem     |

✔️ El contenido debe “respirar” incluso en fullscreen.

---

## 7️⃣ Responsive UX (REGLAS CLAVE)

### Breakpoints oficiales

```
≤ 900px → mobile + sidebar drawer tipo GPT
≤ 768px → layout compacto, cards 1 columna
≤ 600px → foco en lectura + pulgar
```

### Reglas UX obligatorias

✔️ No doble scrollbar  
✔️ Botones flotantes no se superponen  
✔️ Sidebar siempre cerrable (overlay / Esc)  
✔️ Padding mínimo tocable: 12–16px  
✔️ Nada crítico queda fuera de viewport

---

## 8️⃣ JavaScript: arquitectura por módulos

```
main.js    → orquestación/render
sidebar.js → drawer + overlay
theme.js   → light/dark
scroll.js  → back to top
js/data/   → datos del proyecto
```

### Encabezado obligatorio en cada JS

```js
/**
 * sidebar.js
 * Control del menú lateral móvil
 */
```

✔️ Si una función se repite → `utils.js`.

---

## 9️⃣ Accesibilidad

✔️ `aria-label` obligatorio  
✔️ Área mínima clic: 40×40  
✔️ Contraste válido en ambos temas  
⏳ Navegación teclado → sprint futuro

---

## 🔟 Atomic commits

✔️ Un objetivo por commit  
✔️ No mezclar UI + lógica  
✔️ Documentar en `commits.md`

Ejemplo:

```
feat(ui): ajustar escala tipográfica y espaciados responsive
```

---

## 🏁 Conclusión

Este STYLE-GUIDE.md es la **constitución visual y técnica** del proyecto.

Si surge una duda de:

- tamaños
- colores
- UX
- responsive
- estructura

👉 la respuesta vive aquí.
