# Mini-Aplicación de Podcasts

## ⚠️ **Importante**

> **Documentación e Historias (Storybook):**
>
> Toda la aplicación se encuentra documentada componente por componente. Además, los test son visuales en la herramienta, en el apartado _Interactions_.

> **Deploy:**
>
> Tanto la aplicación como las historias y documentación de componentes se encuentran desplegadas en AWS en el servicio Lightsail. Puede ver:
>
> - **Historias (StoryBook):** [https://files.ridaoc.es/](https://files.ridaoc.es/)
> - **Aplicación Podcast App:** [https://server.ridaoc.es/](https://server.ridaoc.es/)

## Resumen

Este proyecto consiste en la creación de una mini-aplicación para escuchar podcasts musicales. La aplicación es una Single Page Application (SPA) y consta de tres vistas principales:

1. Vista principal.
2. Detalle de un podcast.
3. Detalle de un episodio de un podcast.

## Descripción de las Vistas

### Vista Principal

- **URL**: `/`
- **Requerimientos**:
  - Mostrar un listado de los 100 podcasts más populares según el listado de Apple.
  - Almacenar el listado en el cliente y solo volver a solicitarlo si ha pasado más de un día desde la última solicitud.
  - Permitir filtrar los podcasts por título y autor en tiempo real.
  - Navegar a la vista de detalles del podcast al hacer clic en un podcast.

### Detalle de un Podcast

- **URL**: `/podcast/{podcastId}`
- **Requerimientos**:
  - Mostrar una barra lateral con la imagen, título, autor y descripción del podcast.
  - Mostrar una sección principal con el número de episodios y un listado de estos (título, fecha de publicación y duración).
  - Almacenar los detalles del podcast en el cliente y solo volver a solicitarlo si ha pasado más de un día desde la última solicitud.
  - Navegar a la vista de detalles del episodio al hacer clic en un episodio.

### Detalle de un Episodio

- **URL**: `/podcast/{podcastId}/episode/{episodeId}`
- **Requerimientos**:
  - Mostrar la misma barra lateral que en la vista de detalles del podcast.
  - Mostrar una sección principal con el título del episodio, descripción y un reproductor de audio básico (HTML5).
  - Mostrar la descripción del episodio interpretando HTML si está presente.

### Cabecera

- **Requerimientos**:
  - El título de la aplicación debe actuar como enlace a la vista principal.
  - Mostrar un indicador visual en la esquina superior derecha durante la navegación en cliente.

#### Tecnologías necesarias

- **react**: 18.3.1
- **react-router-dom**: 6.23.1
- **storybook**: 8.1.6
- **sass**: 1.77.4
- **prettier**: 3.3.1
- **eslint**: 8.57.0
- **@storybook/test**: 8.1.6,
- **@storybook/test-runner**: 0.18.2
- **@storybook/testing-library**: 0.2.2
- **@storybook/testing-library**: 0.2.2
- **@storybook/testing-library**: 0.2.2
- **babel**: 7.24.7,
- **webpack**: 5.91.0,

## Instalación y Configuración

### Decisiones de Diseño

- **Arquitectura**: La aplicación está basada en componentes, es modular y escalable.
- **Gestión de Estado**: Utilizamos ContextAPI de React para la gestión global del estado.
- **Caché**: Implementación de almacenamiento en localStorage para mejorar la eficiencia y reducir cargas innecesarias.
- **Rutas Limpias**: Uso de react-router-dom para manejar rutas sin hashes.

### Requisitos Previos

- Node.js (versión 18 o superior)
- npm (versión 10 o superior)

### Clonar el Repositorio

```bash
git clone https://github.com/ridaoc19/mini-podcast-app
cd mini-podcast-app
```

### Instalación de Dependencias

```bash
npm install
```

### Modo Development

```bash
npm start
```

### Modo Production

```bash
npm run build
```

### Ejecutar Tests

```bash
npm run storybook
npm run test-storybook
```

### Pruebas, Validación y herramientas

- **Linter**: Configurado con ESLint para mantener el código limpio y sin errores.
- **Tests**: Configuración de Jest y react testing library en Storybook para realizar testing, se puede verificar en las historias en el apartado iteraciones, ademas puede realizar testing de las historias.
- **Prettier**: Para mantener un código limpio y consistente, se ha integrado [Prettier](https://prettier.io/) en este proyecto. Prettier es una herramienta de formateo de código que asegura que todo el código siga un estilo uniforme.
- **Consola**: La aplicación debe estar libre de errores en la consola del navegador.
- **Storybook**: [Storybook](https://storybook.js.org/) es  herramienta de desarrollo el cual me ayudo a desarrollar componentes de forma independiente y a documentarlos.

Este proyecto fue desarrollado por **Ricardo David Ocampo**.

- **LinkedIn:** [https://www.linkedin.com/in/ridaoc19](https://www.linkedin.com/in/ridaoc19)
- **GitHub:** [https://github.com/ridaoc19](https://github.com/ridaoc19)

