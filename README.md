# 📚 README — Libro Web de JavaScript (Dalto⁺ + Proyectos Propios)

Este es el README **completo, profesional y listo para tu repositorio**.  
Incluye:  
✔ Descripción clara del proyecto  
✔ Objetivos del Libro Web  
✔ Cómo navegarlo  
✔ Cómo editarlo  
✔ Cómo desplegarlo en GitHub Pages  
✔ Buenas prácticas de carpetas y archivos  
✔ Estructura REAL del repo (integrada dentro del texto)

---

# 📘 1. Descripción del Proyecto

**Libro Web de JavaScript** es una plataforma de estudio personal desarrollada para organizar, visualizar y practicar todos los contenidos del aprendizaje JavaScript, combinando:

- El curso **JavaScript Mid-Level de Dalto⁺**  
- Material Junior propio  
- Ejercicios prácticos  
- Mini proyectos  
- Documentación generada en el proceso

El objetivo es tener un **sitio web modular**, fácil de navegar y escalable, donde cada Sprint corresponde a un tema clave del aprendizaje.

La web se aloja en la carpeta `/docs/`, lista para GitHub Pages.

---

# 🎯 2. Objetivos generales

- Crear un **ecosistema de estudio completo**, centralizado y consultable desde cualquier dispositivo.
- Documentar cada Sprint (DOM avanzado, eventos, arrays, JSON, asincronía, fetch, storage).
- Implementar **proyectos prácticos** aplicados a un Sistema Administrativo.
- Mantener una estructura clara para extender el libro a:
  - nivel Junior  
  - nivel Mid-Level  
  - nivel Avanzado (futuro)  
- Integrar recursos gráficos, índices dinámicos y modularización en JavaScript (ES Modules).

---

# 🗂 3. Estructura del Proyecto

La estructura real del repositorio es:

```text
libroWeb/
├─ docs/                    # Carpeta principal de la web (GitHub Pages)
│  ├─ 01junior/             # Ejercicios y material del nivel Junior
│  ├─ 02midLevel/           # Sección Mid-Level basada en Dalto⁺
│  │  ├─ asincronismo.html
│  │  ├─ domAvanzado.html
│  │  ├─ eventosAvanzados.html
│  │  ├─ fetchApi.html       # (luego se puede renombrar a fetchApi.html)
│  │  ├─ objetosJson.html
│  │  └─ storage.html
│  ├─ 03master/
│  ├─ assets/            # Íconos e imágenes (más adelante: assets/)
│  │  ├─ icons/
│  │  └─ img/
│  ├─ css/
│  │  └─ style.css          # Estilos globales de la web
│  ├─ js/
│  │  ├─ data/
│  │  │  └─ sprintsMidLevel.js  # Data de los Sprints Mid-Level
│  │  └─ main.js            # Lógica principal de la web (render del índice, etc.)
│  └─ index.html            # Página principal del “Libro Web”
├─ .gitignore
└─ README.md


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