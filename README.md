# Cerveza Quiltre 🍺

Bienvenido al repositorio del sitio web de **Cerveza Quiltre**. Este proyecto es una Landing Page moderna diseñada para presentar la marca, sus productos y procesos de elaboración artesanal.

## 🚀 Tecnologías Utilizadas

El proyecto está construido con un stack tecnológico moderno enfocado en rendimiento y experiencia de desarrollador:

-   **[Vite](https://vitejs.dev/):** Entorno de desarrollo frontend de próxima generación.
-   **[React](https://reactjs.org/):** Biblioteca para construir interfaces de usuario.
-   **[TypeScript](https://www.typescriptlang.org/):** Superset tipado de JavaScript.
-   **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilidades CSS.
-   **[shadcn/ui](https://ui.shadcn.com/):** Colección de componentes UI reutilizables construidos con Radix UI y Tailwind.
-   **[Framer Motion](https://www.framer.com/motion/):** Biblioteca de animaciones para React.

## 📂 Estructura del Proyecto

La estructura principal del código fuente se encuentra en `src/`:

-   `components/sections/`: Contiene las secciones principales de la Landing Page (Hero, Nosotros, Galería, Proceso, Productos).
-   `components/ui/`: Componentes base de la interfaz (botones, diálogos, carruseles, etc.), provenientes de shadcn/ui.
-   `pages/`: Vistas principales de la aplicación (Index, NotFound).
-   `lib/`: Utilidades y configuraciones compartidas.

## 🛠️ Instalación y Uso

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (o [Bun](https://bun.sh/)).

1.  **Instalar dependencias:**

    ```bash
    npm install
    # o si usas bun
    bun install
    ```

2.  **Iniciar el servidor de desarrollo:**

    ```bash
    npm run dev
    # o
    bun dev
    ```

3.  **Construir para producción:**

    ```bash
    npm run build
    ```

## ✨ Características Principales

-   **Diseño Responsivo:** Adaptado a móviles y escritorio.
-   **Secciones Informativas:**
    -   **Hero:** Impacto visual inicial.
    -   **Productos:** Catálogo de cervezas.
    -   **Proceso:** Explicación de la elaboración.
    -   **Galería:** Imágenes destacadas.
-   **Interacción:** Integración con botón de WhatsApp para contacto directo.