# Vue Testing Project 🧪

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vuex](https://img.shields.io/badge/Vuex-35495E?style=for-the-badge&logo=vuex&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

## 📋 Descripción

Este proyecto es una aplicación de Vue.js que demuestra la implementación de varias características fundamentales del framework, incluyendo gestión de estado con Vuex, navegación con Vue Router, comunicación entre componentes y pruebas unitarias con Jest. También incluye despliegue en Firebase Hosting.

## ✨ Características

- 🔄 Contador con Vuex
- 🚦 Sistema de rutas con Vue Router
- 👨‍👧 Comunicación entre componentes Parent-Child
- 🧪 Pruebas unitarias completas
- 🚀 Despliegue en Firebase Hosting

## 🛠️ Tecnologías Utilizadas

- Vue.js 3
- Vuex 4
- Vue Router 4
- Jest
- Firebase Hosting

## 🚀 Instalación y Configuración

1. **Clonar el repositorio**

```bash
git clone https://github.com/FideoKojima/DesarrolloAppFrontEndVue.git
cd vue-testing-project
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
cp .env.example .env
```

4. **Iniciar servidor de desarrollo**

```bash
npm run serve
```

## 🧪 Ejecutar Pruebas

### Pruebas Unitarias

```bash
npm run test:unit
```

### Ver cobertura de pruebas

```bash
npm run test:unit -- --coverage
```

## 📦 Estructura del Proyecto

```
vue-testing-project/
├── src/
│   ├── components/
│   │   ├── Counter.vue
│   │   ├── Parent.vue
│   │   └── Child.vue
│   ├── store/
│   │   └── index.js
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── Home.vue
│   │   └── About.vue
│   ├── App.vue
│   └── main.js
├── tests/
│   └── unit/
│       ├── counter.spec.js
│       ├── router.spec.js
│       └── child.spec.js
└── firebase.json
```

## 🔍 Componentes Principales

### 1. Counter (Ejercicio 1)

- Implementa un contador usando Vuex
- Funcionalidades de incremento y decremento
- Pruebas unitarias para verificar el estado inicial y las mutaciones

### 2. Vue Router (Ejercicio 2)

- Sistema de navegación entre vistas
- Pruebas para validar la existencia de componentes
- Configuración de rutas dinámicas

### 3. Parent-Child Communication (Ejercicio 3)

- Demostración de comunicación entre componentes
- Implementación de eventos personalizados
- Pruebas de emisión y recepción de eventos

## 🚀 Despliegue

1. **Construir para producción**

```bash
npm run build
```

2. **Inicializar Firebase**

```bash
firebase login
firebase init hosting
```

3. **Desplegar a Firebase**

```bash
firebase deploy
```

## 🧪 Pruebas Implementadas

- ✅ Verificación del valor inicial del contador
- ✅ Pruebas de incremento y decremento
- ✅ Validación de componentes en rutas
- ✅ Pruebas de comunicación entre componentes
- ✅ Snapshots de componentes

## 📝 Scripts Disponibles

- `npm run serve`: Inicia el servidor de desarrollo
- `npm run build`: Construye para producción
- `npm run test:unit`: Ejecuta pruebas unitarias
- `npm run lint`: Ejecuta el linter
- `npm run deploy`: Construye y despliega a Firebase

## 👥 Contribuir

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🤝 Contacto

Tu Nombre - [@tuTwitter](https://twitter.com/tuTwitter) - email@example.com

Link del Proyecto: [https://desarrollo-app-front-end-vue.vercel.app/](https://desarrollo-app-front-end-vue.vercel.app/)

---

⌨️ con ❤️ por [Luis Suarez](https://github.com/FideoKojima/) 😊
