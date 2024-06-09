# ![Icono](./src/assets/icon.svg) Mini-Aplicación de Podcasts

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

> **Tutorial:**
>
> Para ver la respuesta a la solución en detalle ingrese puede ingresar a esta pagina, ella tiene una tabla de contenido, en el cual puede redirigirse a la sección que desee
>
> - **Detalle Prueba Técnica:** [https://client.ridaoc.es/](https://client.ridaoc.es/)

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

  ![vista Principal](./src/assets/image%208.png)

### Detalle de un Podcast

- **URL**: `/podcast/{podcastId}`
- **Requerimientos**:

  - Mostrar una barra lateral con la imagen, título, autor y descripción del podcast.
  - Mostrar una sección principal con el número de episodios y un listado de estos (título, fecha de publicación y duración).
  - Almacenar los detalles del podcast en el cliente y solo volver a solicitarlo si ha pasado más de un día desde la última solicitud.
  - Navegar a la vista de detalles del episodio al hacer clic en un episodio.

  ![detalle podcast](./src/assets/image%2011.png)

### Detalle de un Episodio

- **URL**: `/podcast/{podcastId}/episode/{episodeId}`
- **Requerimientos**:

  - Mostrar la misma barra lateral que en la vista de detalles del podcast.
  - Mostrar una sección principal con el título del episodio, descripción y un reproductor de audio básico (HTML5).
  - Mostrar la descripción del episodio interpretando HTML si está presente.

  ![detalle episodio](./src/assets/image%2013.png)

### Cabecera

- **Requerimientos**:
  - El título de la aplicación debe actuar como enlace a la vista principal.
  - Mostrar un indicador visual en la esquina superior derecha durante la navegación en cliente.

#### Tecnologías necesarias

- **sass**: 1.77.4
- **react**: 18.3.1
- **babel**: 7.24.7,
- **eslint**: 8.57.0
- **webpack**: 5.91.0,
- **prettier**: 3.3.1
- **storybook**: 8.1.6
- **react-router-dom**: 6.23.1
- **@storybook/test**: 8.1.6,
- **@storybook/test-runner**: 0.18.2
- **@storybook/testing-library**: 0.2.2

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

### Ejecutar Tests y documentación

Para iniciar Storybook, utiliza el comando `npm run storybook`. Para verificar la integridad y el funcionamiento de las historias, así como para garantizar que las pruebas estén en orden, ejecuta `npm run test-storybook`. Es importante destacar que este último comando solo funcionará si ya has iniciado Storybook con el comando anterior.

Cada componente cuenta con su propia historia, test y documentación. Puedes explorar estas historias en detalle en nuestro entorno de producción en https://files.ridaoc.es/. Recuerda que cada componente es independiente, lo que facilita su comprensión y pruebas por separado.

```bash
npm run storybook
npm run test-storybook
```

![test](./src/assets/image%204.png)

### Pruebas, Validación y herramientas

- **ESlint**: Configurado con ESLint para mantener el código limpio y sin errores.

```bash
npm run lint
```

- **Prettier**: Para mantener un código limpio y consistente, se ha integrado [Prettier](https://prettier.io/) en este proyecto. Prettier es una herramienta de formateo de código que asegura que todo el código siga un estilo uniforme.

```bash
npm run format
```

- **Tests**: Configuración de Jest y react testing library en Storybook para realizar testing, se puede verificar en las historias en el apartado iteraciones, ademas puede realizar testing de las historias.
- **Consola**: La aplicación debe estar libre de errores en la consola del navegador.
- **Storybook**: [Storybook](https://storybook.js.org/) es herramienta de desarrollo el cual me ayudo a desarrollar componentes de forma independiente y a documentarlos.

![storybook principal](./src/assets/image.png)

Este proyecto fue desarrollado por **Ricardo David Ocampo**.

- **LinkedIn:** [https://www.linkedin.com/in/ridaoc19](https://www.linkedin.com/in/ridaoc19)
- **GitHub:** [https://github.com/ridaoc19](https://github.com/ridaoc19)
