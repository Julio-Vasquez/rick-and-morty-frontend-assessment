# Documentación del Proyecto: Rick and Morty Character

Este documento proporciona una descripción general completa del proyecto, su arquitectura, tecnologías y cómo ponerlo en marcha.

Para una documentación más visual e interactiva, ¡explora nuestro Deep-Wiki!

[![Rick and Morty Frontend Assessment](https://img.shields.io/badge/Rick%20and%20Morty-Frontend%20Assessment-brightgreen)](https://deepwiki.com/Julio-Vasquez/rick-and-morty-frontend-assessment)

## 1. ¿Qué es este proyecto?

Es una aplicación web front-end que permite a los usuarios explorar personajes del universo de "Rick and Morty". La aplicación consume una API de GraphQL para obtener, mostrar, filtrar y buscar personajes. Las características clave incluyen:

- Visualización de una lista paginada de personajes.
- Búsqueda de personajes por nombre.
- Ver los detalles de un personaje específico.
- Marcar y desmarcar personajes como favoritos (la selección se guarda localmente).

## 2. Tecnologías Utilizadas

El proyecto está construido con un stack moderno de tecnologías de front-end:

- **Framework Principal:** React 18
- **Lenguaje:** TypeScript
- **Bundler y Entorno de Desarrollo:** Vite
- **Cliente GraphQL:** Apollo Client
- **Enrutamiento:** React Router
- **Estilos:** TailwindCSS
- **Testing:** Vitest y React Testing Library
- **Linting:** ESLint
- **Formateo de Código:** Prettier

## 3. Cómo Iniciar el Proyecto

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

### Prerrequisitos

- **Node.js:** Versión `20.x` o superior.
- **Gestor de Paquetes:** `yarn` o `npm` (los scripts usan `yarn` por defecto).

### Pasos de Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/Julio-Vasquez/rick-and-morty-frontend-assessment.git
    cd rick-and-morty-frontend-assessment
    ```

2.  **Instala las dependencias:**

    ```bash
    yarn install
    # O si usas npm:
    # npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    La aplicación se iniciará en `http://localhost:5173` (o el puerto que Vite asigne).
    ```bash
    yarn dev
    # O si usas npm:
    # npm run dev
    ```

### Otros Scripts Útiles

- **Ejecutar pruebas en modo "watch":**
  Lanza Vitest y se queda escuchando cambios en los archivos para volver a ejecutar los tests relevantes.

  ```bash
  yarn test
  ```

- **Ejecutar pruebas con UI interactiva:**
  Abre la interfaz de usuario de Vitest en el navegador para una experiencia más visual.

  ```bash
  yarn test:ui
  ```

- **Generar reporte de cobertura de código:**
  Ejecuta todas las pruebas una vez y genera un reporte de cobertura en la carpeta `coverage/`.

  ```bash
  yarn coverage
  ```

- **Construir para producción:**
  Los archivos optimizados se generarán en la carpeta `dist/`.

  ```bash
  yarn build
  ```

- **Linting y Formateo:**
  ```bash
  yarn lint
  yarn format
  ```

## 4. Arquitectura del Proyecto

El proyecto sigue los principios de la **Arquitectura Limpia (Clean Architecture)** para lograr una separación de conceptos clara, mantenibilidad y escalabilidad. La regla fundamental es que las dependencias solo pueden apuntar hacia adentro, desde las capas externas hacia las internas.

![Clean Architecture Diagram](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

El código se organiza en cuatro capas principales que se corresponden con el diagrama, dentro del directorio `src/`:

```
src/
├── application/  # Capa de Casos de Uso
├── domain/       # Capa de Entidades
├── infrastructure/ # Capa de Frameworks y Drivers
└── presentation/   # Capa de UI (Controladores y Presentadores)
```

### 4.1. Capa de Dominio (`domain`)

Es el núcleo del software (Capa de Entidades). No tiene dependencias de ninguna otra capa.

- `domain/entities`: Define las entidades de negocio principales (ej. `CharacterEntity`).
- `domain/repositories`: Define las **interfaces** (contratos) para los repositorios de datos (ej. `CharacterRepository`). Especifica _qué_ se puede hacer, pero no _cómo_.
- `domain/types`: Define tipos y estructuras de datos utilizados en el dominio.

### 4.2. Capa de Aplicación (`application`)

Orquesta el flujo de datos y la lógica de negocio (Capa de Casos de Uso). Depende del Dominio.

- `application/use-cases`: Contiene los casos de uso de la aplicación (ej. `getCharacters`, `getCharacterById`). Un caso de uso encapsula una interacción específica del usuario y utiliza las interfaces de repositorio del dominio para ejecutarla.

### 4.3. Capa de Infraestructura (`infrastructure`)

Contiene las implementaciones concretas de las interfaces definidas en el dominio (Capa de Frameworks y Drivers). Depende del Dominio.

- `infrastructure/api`: Implementa los repositorios utilizando una tecnología específica.
  - `repositories/character-repository.ts`: Es la implementación de `CharacterRepository` que usa **Apollo Client** para hacer llamadas a la API de GraphQL.
- `infrastructure/storage`: Implementa repositorios para el almacenamiento local (ej. `localStorage`).

### 4.4. Capa de Presentación (`presentation`)

Es la capa más externa, responsable de la interfaz de usuario (UI). Depende de la capa de Aplicación. Su estructura de componentes sigue la metodología **Atomic Design** para fomentar la reutilización y la consistencia.

- `presentation/components`: Componentes de React reutilizables, organizados por complejidad (`atoms`, `molecules`, `organism`, `templates`).
- `presentation/pages`: Las vistas principales de la aplicación (ej. `Home`, `Character`).
- `presentation/hooks`: Hooks de React personalizados que encapsulan la lógica de la UI y la comunicación con los casos de uso.
- `presentation/context`: Proveedores de contexto de React, cruciales para la Inyección de Dependencias.
- `presentation/routes`: Configuración del enrutamiento de la aplicación.

## 5. Principios de Diseño (SOLID y DI)

### SOLID

La estructura del proyecto promueve los principios SOLID:

- **Single Responsibility Principle:** Cada componente, hook o caso de uso tiene una única responsabilidad.
- **Open/Closed Principle:** La arquitectura permite añadir nuevos casos de uso o fuentes de datos sin modificar el código existente.
- **Liskov Substitution Principle:** Las implementaciones de repositorios (`CharacterGraphQLRepository`) son sustituibles por otras siempre que cumplan el contrato de la interfaz (`CharacterRepository`).
- **Interface Segregation Principle:** Las interfaces de repositorio son específicas y cohesivas.
- **Dependency Inversion Principle:** Las capas de alto nivel (Dominio, Aplicación) no dependen de las de bajo nivel (Infraestructura), sino de abstracciones (interfaces).

### Inyección de Dependencias (DI)

La inyección de dependencias es el mecanismo que conecta las capas. En este proyecto, se realiza a través del proveedor de contexto de React `ServicesProvider`.

- **`src/presentation/context/service/ServiceProvider.tsx`**: Este componente actúa como el "Composition Root". Aquí es donde:

  1.  Se crea la instancia del cliente Apollo.
  2.  Se crea la instancia del `CharacterGraphQLRepository` (infraestructura), inyectándole el cliente Apollo.
  3.  Se crean los casos de uso (`getCharacters`), inyectándoles el repositorio.
  4.  Estos servicios (casos de uso) se proveen al resto de la aplicación a través de un contexto de React.

- **`src/presentation/hooks/contexts/useServices.ts`**: Un hook personalizado que permite a los componentes y otros hooks de la capa de presentación acceder a los casos de uso sin estar acoplados a su implementación.

## 6. Configuraciones Importantes

- **`vite.config.ts`**: Configuración del entorno de desarrollo y build de Vite. Incluye la integración con TypeScript, TailwindCSS y Vitest.
- **`tsconfig.json`**: Configuración del compilador de TypeScript. Es importante la sección `paths` que permite alias de importación como `@domain`, `@presentation`, etc., para mantener las importaciones limpias.
- **`infrastructure/api/client/apollo-client.ts`**: Aquí se configura el cliente Apollo, incluyendo la URL de la API de GraphQL (`https://rickandmortyapi.com/graphql`).
- **`tailwind.config.js`**: (No listado, pero implícito) Archivo para configurar y extender los estilos de TailwindCSS.
