# 📑 CHANGELOG.md  
Formato basado en *Keep a Changelog*  
Este proyecto sigue **Semantic Versioning** (MAJOR.MINOR.PATCH)

---

## [Unreleased]
### Added
- Sección inicial para futuros cambios no publicados.

---

## [0.1.3] - 2025-12-09
### Added
- Implementación del menú mobile tipo GPT.
- Botón flotante `menu-toggle` con soporte para tema claro/oscuro.
- Overlay clickeable para cerrar el menú lateral.

### Changed
- Reducción de paddings internos del sidebar.
- Ajustes responsivos del panel lateral en 900px.
- Estandarización de bordes, sombras y variables CSS.
- Limpieza visual del TOC: mayor área útil, paddings optimizados.

### Fixed
- Overlay que impedía hacer clic en los items del menú.
- Problema de transparencia excesiva en modo oscuro.
- Desalineación del TOC dentro del sidebar al abrir en mobile.
- Corrección menor en alturas y scroll interno del sidebar.

---

## [0.1.2] - 2025-12-05
### Added
- Botón flotante de tema (claro/oscuro) con persistencia en localStorage.
- Estilos de código mejorados para inline y bloques `<pre><code>`.

### Changed
- Mejor cohesión visual entre tarjetas (`.sprint-card`) y capítulos (`.chapter-group`).
- Ajustes de tipografía y paddings en mobile (600px y 768px).

### Fixed
- Problema donde los bloques de código sobresalían del contenedor.
- Solución a salto inesperado de scroll en mobile.

---

## [0.1.1] - 2025-12-04
### Added
- Estructura base del proyecto `03master/` con CSS + JS modular.
- Sidebar estático con TOC generable desde datos.
- Primeros sprints cargados dinámicamente.

### Changed
- Mejoras en diseño general: tarjetas, sombras, layout.
- Migración a variables CSS globales.

### Fixed
- Correcciones iniciales de estilos inconsistentes en modo oscuro.

---

## [0.1.0] - 2025-12-03
### Added
- Creación inicial del repositorio.
- Setup de carpetas: `docs/`, `03master/`, `assets/`, `css/`, `js/`, `data/`.
- Archivos principales: `README.md`, `STYLE-GUIDE.md`, `CHECKLIST.md`, `CHANGELOG.md`.

---

