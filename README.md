# Init REST API

This repository includes all the files to generate a basic REST API with all the tools needed as a developer.

## Disclaimer
This repository is not intended to be runned by itself, it contains the required files to generate a REST API.
To use this code, report to the [Node-Generator](https://github.com/Node-Generator/Node-Generator).

## What is Generated
- Routes ([`routes.js`](/src/routes/routes.js)):
  - `/`: is returning a success message.
  - `/error`: is returning an error message.
- Scripts ([`initAPI.js`](/initAPI.js)):
  - `lint`: runs eslint with the `eslint-config-airbnb-base`.
  - `test`: runs the tests using `mocha`.
  - `dev`: runs the development environment with `nodemon` and `dotenv`.
  - `start`: runs the production environment of the application.
- Utils:
  - Custom error manager: [`customError.js`](/src/utils/customError.js).
- Middlewares:
  - Errors handler: [`errorHandler.js`](/src/middlewares/errorHandler.js).
- Tests:
  - Routes testing: [`routes.test.js`](/root/test/routes/routes.test.js).
- Environement variables:
  - Config file to manage it: [`config.js`](/src/config.js).
  - Env file to change them in dev script: [`.env`](/root/.env)
- [`.gitignore`](/root/.gitignore)