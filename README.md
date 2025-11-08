## 🚀 Instalación de paquetes principales

Antes de iniciar el proyecto, asegúrate de instalar los paquetes principales que se usan comúnmente en un entorno NestJS moderno:

```bash
# NestJS core y dependencias esenciales
npm install @nestjs/common @nestjs/core @nestjs/platform-express rxjs reflect-metadata

# Tipos y herramientas de desarrollo
npm install --save-dev @nestjs/cli @types/node typescript ts-node

# Validación con Zod
npm install zod @anatine/zod-nestjs
```

---

## 📘 Ejemplo de lista de estudiantes

A continuación se muestra un ejemplo de datos que puedes usar para pruebas en la API.  
Estos deben incluirse en el archivo JSON ubicado dentro de la carpeta 📁 `database`:

```json
[
  {
    "id": 1,
    "nombre": "Elena",
    "apellido": "Domínguez",
    "edad": 20
  },
  {
    "id": 2,
    "nombre": "Marco",
    "apellido": "Serrano",
    "edad": 24
  },
  {
    "id": 3,
    "nombre": "Laura",
    "apellido": "Campos",
    "edad": 19
  },
  {
    "id": 4,
    "nombre": "Emilio",
    "apellido": "Rojas",
    "edad": 26
  },
  {
    "id": 5,
    "nombre": "Paula",
    "apellido": "Salinas",
    "edad": 22
  },
  {
    "id": 6,
    "nombre": "Tomás",
    "apellido": "Quiroz",
    "edad": 28
  },
  {
    "id": 7,
    "nombre": "Natalia",
    "apellido": "Garrido",
    "edad": 21
  },
  {
    "id": 8,
    "nombre": "Jorge",
    "apellido": "Pineda",
    "edad": 25
  },
  {
    "id": 9,
    "nombre": "Martina",
    "apellido": "Lagos",
    "edad": 23
  },
  {
    "id": 10,
    "nombre": "Rodrigo",
    "apellido": "Fuentes",
    "edad": 27
  }
]
```

---

## 📋 Validaciones del recurso `/estudiantes`

A continuación se muestran algunos ejemplos de solicitudes con errores comunes y las respuestas esperadas del API:

| Método    | URL              | Body (JSON)                                      | Respuesta esperada                     |
| ---------- | ---------------- | ------------------------------------------------ | -------------------------------------- |
| **POST**   | `/estudiantes`   | `{"nombre":"Ana","apellido":"Gómez","edad":130}` | **400** – *edad máxima 120*            |
| **PUT**    | `/estudiantes/1` | `{"nombre":"Luis"}`                              | **400** – *faltan campos obligatorios* |
| **PATCH**  | `/estudiantes/1` | `{"edad":4}`                                     | **400** – *edad mínima 5*              |

---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

---

## 🧩 Project setup

```bash
$ npm install
```

## 🧠 Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🧪 Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

## ☁️ Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible.  
Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

---

## 📚 Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Discord Community](https://discord.gg/G7Qnnhy)
- [Video Courses](https://courses.nestjs.com/)
- [NestJS Mau Deployment](https://mau.nestjs.com)
- [NestJS Devtools](https://devtools.nestjs.com)
- [Enterprise Support](https://enterprise.nestjs.com)
- [Jobs board](https://jobs.nestjs.com)

---

## ✨ Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

---

## 🪪 License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
