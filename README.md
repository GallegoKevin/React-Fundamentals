# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Cómo Configurar un Proyecto con Vite + React

### Pasos para la Configuración

1. **Instalar Yarn globalmente**:
    ```bash
    npm install --global yarn
    ```

2. **Crear un nuevo proyecto con Vite**:
    ```bash
    yarn create vite
    ```
    Durante la creación del proyecto, se te pedirá:
    - **Nombre del proyecto**: Escribe `react-fundamentals`.
    - **Seleccionar un framework**: Elige `React`.
    - **Seleccionar una variante**: Elige `JavaScript`.

3. **Ingresar al directorio del proyecto**:
    ```bash
    cd react-fundamentals
    ```

4. **Verificar la instalación de Node.js**:
    ```bash
    node -v
    ```

5. **Instalar las dependencias del proyecto**:
    ```bash
    yarn
    ```

6. **Iniciar el servidor de desarrollo**:
    ```bash
    yarn dev
    ```

## Maquetación Web

![Demo](https://i.ibb.co/VWG1n9c/Fire-Shot-Capture-056-Vite-React-localhost.png)


Maquetación de una página web utilizando Vite + React. 
Dentro de la carpeta components, se encuentran diversas subcarpetas, cada una conteniendo archivos `.jsx` y `.css` que definen la estructura visual y funcional de la página web.

### Estructura de Carpetas y Archivos

Dentro de la carpeta `components`, las subcarpetas se organizan de la siguiente manera:

- **Card**
- **Features**
- **Footer**
- **Header**
- **Herosection**
- **Nav**
- **TourList**

Cada subcarpeta tiene una estructura consistente:

- `ComponentName.jsx`: Archivo principal del componente.
- `ComponentName.css`: Archivo de estilos específico para el componente.

### Integración de Componentes

Todos estos componentes se importan y organizan dentro de un contenedor principal (`app-container`) en el archivo `App.jsx`. 
La estructura resultante se renderiza de manera coherente para crear la maquetación completa de la web.






