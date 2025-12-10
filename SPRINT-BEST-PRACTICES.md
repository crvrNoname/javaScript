# 🧩 Sprint X — Mejores Prácticas Globales del Proyecto  
**Documento permanente — Consultar antes de iniciar cualquier sprint o refactor**

---

# 🎯 1) Objetivo del Sprint

Establecer un conjunto de **reglas maestras** que garanticen:

- orden  
- consistencia  
- escalabilidad  
- mantenibilidad técnica  
- crecimiento sostenible del proyecto  

Este archivo centraliza TODO lo que debes revisar antes de crear nuevos módulos, nuevas pantallas o aplicar refactor.

---

# 📁 2) Organización general del proyecto

### ✔️ Reglas base
- Toda carpeta y archivo debe responder a un **propósito claro**.  
- Nada debe existir “por si acaso”.
- Mínimo acoplamiento entre módulos.
- Código fácil de leer sin necesidad de explicaciones extra.

### ✔️ Estructura oficial del proyecto
(Reflejada en `README.md` y mantenida siempre actualizada)

```
docs/
  01junior/
  02midLevel/
  03master/
      assets/
      css/
      js/
          data/
          modules (futuro)
      index.html
CHANGELOG.md
CHECKLIST.md
commits.md
STYLE-GUIDE.md
SPRINT-BEST-PRACTICES.md
README.md
```

---

# 💾 3) Versionado y commits

### ✔️ Atomic Commits (Regla de Oro)
Cada commit debe:
- hacer **una sola cosa**
- ser fácil de revertir
- tener un mensaje claro y profesional
- actualizar `commits.md` o `CHANGELOG.md` cuando corresponda

### ✔️ Formato recomendado
```
feat(ui): mejorar sidebar en mobile
fix(css): corregir overflow en tarjetas
refactor(js): separar lógica de scroll en módulo propio
docs: actualizar README con estructura nueva
```

### ✔️ Prohibido:
- commits gigantes (tipo “update all”)
- mezclar UI + lógica en un mismo commit
- subir código sin probarlo antes

---

# 🧱 4) Estructura de módulos (JavaScript)

### ✔️ Reglas generales
- Cada archivo JS debe resolver *una única responsabilidad*.
- Si un archivo supera **200–250 líneas**, debe dividirse.
- Todo módulo debe comenzar con:

```js
/**
 * Nombre del archivo
 * Propósito
 * Funciones incluidas
 * Dependencias
 */
```

### ✔️ Archivos actuales
- `main.js` → orquestación general  
- `sidebar.js` → menú móvil  
- `theme.js` → modo oscuro/claro  
- `scroll.js` → botón volver arriba  
- `data/*.js` → datos estáticos del proyecto  

### ✔️ Futuro (cuando el proyecto crezca)
```
js/
  modules/
    router.js
    tocBuilder.js
    renderSprints.js
```

---

# 🎨 5) Organización del CSS

### ✔️ Reglas clave
- No usar selectores profundos.  
- No usar IDs para estilo, sólo para JS.  
- Todo color va en variables CSS `--var`.  
- Usar dos capas:  
  **1) tokens:** colores, bordes, z-index  
  **2) componentes:** sidebar, cards, botones  

### ✔️ Orden recomendado dentro del CSS
1. variables  
2. resets  
3. layout general  
4. componentes (sidebar, cards, header…)  
5. utilidades  
6. media queries  

---

# 🔍 6) Refactor atómico

Cada refactor debe:
- ser pequeño  
- no romper nada ya funcional  
- incluir una prueba manual o automática  
- actualizar documentación si cambia algo del comportamiento

Ejemplos de refactor atómico:
- mover un listener a otro archivo  
- simplificar una función  
- reducir un selector CSS  
- extraer bloques repetidos en funciones reutilizables  

---

# 🧪 7) Micro-testing manual

Antes de cerrar un sprint, revisar SIEMPRE:

### ✔️ Sidebar
- abre / cierra correctamente  
- overlay funciona  
- TOC se puede hacer scroll  
- el botón no tapa contenido  

### ✔️ Diseño responsive
- 900px  
- 768px  
- 600px  
- modo claro / oscuro  

### ✔️ Accesibilidad base
- todos los botones tienen `aria-label`  
- touch-friendly (mínimo 40×40 px)  
- contraste correcto  

---

# 🛑 8) Lista de “NO HACER”

❌ no usar estilos inline  
❌ no meter CSS dentro del JS  
❌ no dejar comentarios inútiles  
❌ no subir código que no has probado en mobile  
❌ no ignorar warnings del inspector  
❌ no mantener código muerto “por si sirve”  

---

# 📚 9) Documentación obligatoria por sprint

Cada sprint debe contener:

- Objetivo del sprint  
- Explicación profesional  
- Código relevante formateado  
- Antes / después si aplica  
- Tareas realizadas  
- Mini checklist final  

*Esto mantiene la evolución del proyecto clara y consultable.*

---

# 🧭 1️⃣0️⃣ Revisión previa antes de abrir un nuevo sprint

Antes de avanzar, SIEMPRE revisa:

- [ ] ¿El código está formateado (Prettier)?  
- [ ] ¿La estructura del repo sigue intacta?  
- [ ] ¿El último sprint quedó completamente cerrado?  
- [ ] ¿El diseño móvil está correcto?  
- [ ] ¿El README está actualizado?  
- [ ] ¿Este cambio merece su propio commit?  

Si **2 o más casillas están en “no”**, no abras un sprint nuevo.

---

# 🏁 1️⃣1️⃣ Conclusión

Este documento funciona como tu **mapa de referencia** para toda la vida del proyecto.

Debe leerse antes de:

✔️ comenzar un sprint  
✔️ refactorizar  
✔️ hacer cambios estructurales  
✔️ trabajar UI/UX  
✔️ dividir módulos  

Mantener este archivo actualizado garantizará que SprintLibroWeb crezca **limpio, profesional y escalable**.

---

# 📌 Última nota
Si en algún sprint aparece una nueva práctica que el proyecto adopta de forma oficial, se agrega AQUÍ.

