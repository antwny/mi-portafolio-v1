<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/terminal-square.svg" alt="Logo" width="80" height="80">
  
  <h3 align="center">Antony A. Benites | Developer Portfolio</h3>

  <p align="center">
    Un portafolio profesional, moderno y altamente interactivo construido con React, Vite y Tailwind CSS.
    <br />
    <br />
    <a href="#características"><strong>Explorar características »</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## 🌟 Sobre el Proyecto

Este repositorio contiene el código fuente de mi portafolio web personal. Diseñado desde cero para destacar mi experiencia en Desarrollo de Software, Soporte IT y Ciberseguridad. 

El diseño utiliza una paleta de colores oscuro-cristalina (Glassmorphism), acentos de colores vivos (`#27e9b5`), y una gran atención al detalle a través de micro-interacciones avanzadas y animaciones impulsadas por **Framer Motion**.

### Características Principales

*   **Diseño Interactivo (Glassmorphism):** Efectos visuales de cristal esmerilado que reaccionan dinámicamente al entorno oscuro y luces de fondo animadas.
*   **Cursor Magnético:** Un cursor personalizado que altera su forma, reacciona a los clics y envuelve mágicamente los elementos interactivos (`a`, `button`).
*   **Seguimiento Dinámico del Ratón:** Las tarjetas de Proyectos y Experiencia cuentan con un brillo de linterna (`spotlight glow`) que persigue el cursor en tiempo real usando eventos en el DOM.
*   **Barra de Navegación Inteligente (Scrollspy):** El menú de estado y navegación superior (`Navbar.tsx`) resalta dinámicamente la sección en la que te encuentras a medida que haces scroll en la página.
*   **Marquesina CSS Horizontal Continua:** Una fluida cinta deslizante que muestra de forma ininterrumpida las herramientas y lenguajes base del Stack tecnológico usando fotogramas clave puros de CSS (`@keyframes`).

### Construido Con

El proyecto utiliza un conjunto moderno de herramientas de frontend:

*   [![React][React.js]][React-url]
*   [![Vite][Vite.js]][Vite-url]
*   [![Tailwind][Tailwind.com]][Tailwind-url]
*   [![TypeScript][TypeScript.com]][TypeScript-url]
*   [![FramerMotion][FramerMotion.com]][FramerMotion-url]

<!-- GETTING STARTED -->
## 🚀 Instalación y Uso Local

Para correr una copia local de este proyecto sigue estos sencillos pasos.

### Prerrequisitos

Necesitas tener **Node.js** instalado en tu computadora. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

### Instalación

1. Clona el repositorio
   ```sh
   git clone https://github.com/tu-usuario/dev-portfolio.git
   ```
2. Entra al directorio del proyecto
   ```sh
   cd dev-portfolio
   ```
3. Instala todas las dependencias usando NPM
   ```sh
   npm install
   ```
4. Inicia el servidor de desarrollo local
   ```sh
   npm run dev
   ```
5. Abre la aplicación de prueba abriendo en tu explorador `http://localhost:5173`.

<!-- USAGE EXAMPLES -->
## 📁 Estructura del Código Fuente

A continuación se detalla cómo está diseñado el árbol central de los componentes (`src/`):

- `App.tsx`: Contiene todo el layout principal, el esqueleto del fondo luminoso y la inserción del `CustomCursor`.
- `index.css`: Contiene las clases personalizadas, variables globales de Tailwind (`@theme`), animaciones `@keyframes` y el estilo de los "botones brillantes" (`glow-btn`).
- `components/Navbar.tsx`: El menú de navegación inteligente superior.
- `components/Hero.tsx`: La sección inicial de presentación en 2 columnas, con gráficas oscuras orbitantes elaboradas a mano.
- `components/About.tsx`: Biografía personal y detalles funcionales en forma de grilla.
- `components/TechStack.tsx`: Implementación del carrusel/Marquee horizontal infinito de habilidades.
- `components/Projects.tsx`: Componente de tarjetas responsivas con efecto lupa (Zoom In hover) y foco dinámico.
- `components/Experience.tsx`: Línea de tiempo vertical usando Framer Motion para entradas suaves al hacer scroll.
- `components/Contact.tsx`: Pie de la página global de la aplicación.


<!-- CONTACT -->
## 📬 Contacto

Antony A. Benites - [@antwny](https://github.com/antw-ny) 

Perfil LinkedIn: [https://www.linkedin.com/in/antony-a-benites-b2b16b1ab/](https://www.linkedin.com/in/antony-a-benites-b2b16b1ab/)


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite.js]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Tailwind.com]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[TypeScript.com]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[FramerMotion.com]: https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue
[FramerMotion-url]: https://www.framer.com/motion/
