# 📚 README — Libro Web de JavaScript (Dalto⁺ + Proyectos Propios)

Este es el README **completo, profesional y listo para tu repositorio**.  
Incluye:  
✔ Descripción clara del proyecto  
✔ Objetivos generales  
✔ Estructura REAL del repositorio  
✔ Cómo funciona el Libro Web  
✔ Buenas prácticas del proyecto  
✔ Configuración para GitHub Pages  

---

# 📘 1. Descripción del Proyecto

**Libro Web de JavaScript** es una plataforma de estudio personal desarrollada para organizar, visualizar y practicar todos los contenidos del aprendizaje JavaScript, combinando:

- El curso **JavaScript Mid-Level de Dalto⁺**  
- Contenidos del nivel Junior  
- Ejercicios y miniproyectos propios  
- Documentación generada sprint por sprint  

El objetivo es tener un **sitio web modular, navegable y escalable**, donde cada Sprint corresponde a un tema clave del aprendizaje.

La web se aloja en la carpeta **`/docs/`**, lista para GitHub Pages.

---

# 🎯 2. Objetivos generales

- Construir un **ecosistema de estudio completo** accesible desde cualquier dispositivo.  
- Documentar cada Sprint del curso Mid-Level (DOM avanzado, eventos, arrays, JSON, async, fetch, storage…).  
- Integrar **proyectos aplicados** a un sistema administrativo real.  
- Mantener una arquitectura clara, organizada y extensible:
  - 01Junior  
  - 02MidLevel  
  - 03Master (futuro)  
- Implementar navegación dinámica (TOC), sidebar responsivo y modularización JS.

---

# 🗂 3. Estructura del Proyecto

Esta es la estructura **real y actualizada** del repositorio:



libroWeb/
├─ .vscode/ # Configuración de VSCode (opcional)
├─ docs/ # Carpeta publicada en GitHub Pages
│ ├─ 01junior/ # Sección Nivel Junior
│ ├─ 02midLevel/ # Sección Mid-Level (Dalto⁺)
│ │ ├─ 01objetoWindow.html
│ │ ├─ 02pestanaElement.html
│ │ ├─ 03eventosAvanzados.html
│ │ ├─ 04controlFlujo&Errores.html
│ │ ├─ 05obsolencia&Compatibilidad.html
│ │ ├─ 06asincronia.html
│ │ ├─ 07peticionesHTTP.html
│ │ ├─ asincronismo.html
│ │ └─ domAvanzado.html
│ ├─ 03master/ # Carpeta futura para nivel Master
│ ├─ assets/
│ │ ├─ icons/
│ │ └─ img/
│ ├─ css/
│ │ └─ style.css # Estilos globales del Libro Web
│ ├─ js/
│ │ ├─ data/
│ │ │ └─ sprintsMidLevel.js # Data del Roadmap dinámico
│ │ ├─ main.js # Lógica general (render TOC, capítulos…)
│ │ ├─ scrooll.js # Botón "volver arriba" (renombrar a scroll.js)
│ │ ├─ sidebar.js # Sidebar móvil tipo GPT
│ │ ├─ theme.js # Modo claro/oscuro (con localStorage)
│ │ └─ utils.js # Utilidades globales (en desarrollo)
│ ├─ sprints/
│ │ ├─ sprintLibroWeb.md # Registro de todos los Sprints del proyecto
│ │ └─ sandBox/ (opcional) # Carpeta ignorada para pruebas personales
│ └─ index.html # Página principal del Libro Web
├─ .gitignore
├─ CHANGELOG.md # Historial semántico de versiones
├─ CHECKLIST.md # Checklist global del proyecto
├─ commits.md # Registro narrativo de commits
├─ README.md # Este archivo
├─ SPRINT-BEST-PRACTICES.md # Sprint eterno de buenas prácticas
└─ STYLE-GUIDE.md # Guía oficial de estilo del proyecto


---

# 🧭 4. Cómo navegar el Libro Web

- **index.html** → Entrada principal del sitio (TOC dinámico + Roadmap)
- **docs/01junior** → Primer nivel de contenido
- **docs/02midLevel** → Cada archivo HTML corresponde a una clase del curso
- **docs/sprints** → Documentación completa del avance Sprint por Sprint
- **sidebar.js** → Control del menú lateral
- **theme.js** → Alternancia de modos claro/oscuro
- **sprintsMidLevel.js** → Estructura automática del TOC

---

# 🛠 5. Cómo editar y mantener el proyecto

### 📌 CSS  
Todo el diseño está en `docs/css/style.css`  
→ seguir reglas del `STYLE-GUIDE.md`.

### 📌 JS  
Código modular en `/docs/js/`.  
→ Cada archivo debe incluir encabezado descriptivo.

### 📌 HTML  
Archivos independientes por tema, fácilmente exportables.

### 📌 Documentación  
Los siguientes archivos deben mantenerse actualizados:

- `sprintLibroWeb.md`
- `CHECKLIST.md`
- `CHANGELOG.md`
- `SPRINT-BEST-PRACTICES.md`

---

# 🚀 6. Cómo desplegar en GitHub Pages

1. Subir el repo a GitHub  
2. Ir a **Settings → Pages**  
3. Seleccionar:  
   **Source:** `Deploy from branch`  
   **Branch:** `main` → `/docs`  
4. Guardar  
5. La web se publicará como:  

https://<tu-usuario>.github.io/<repositorio>/

---

# 🧪 7. Buenas prácticas esenciales

- Commits atómicos  
- Versionado semántico  
- Código limpio y modular  
- Comentarios claros  
- Uso de ESLint / Prettier (opcional)  
- Testing manual en mobile y desktop  
- Documentar cada sprint antes de avanzar  

---

# 🏁 8. Créditos

Proyecto creado por **Cristo**, diseñado como una herramienta de estudio profesional y evolutiva para dominar JavaScript desde cero hasta nivel avanzado.





<!-- GitHUB -->
echo "# javaScript" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/crvrNoname/javaScript.git
git push -u origin main

<!-- PUSH -->
git remote add origin https://github.com/crvrNoname/javaScript.git
git branch -M main
git push -u origin main