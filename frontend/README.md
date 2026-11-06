# Frontend

Angular 22 application (NgModule-based) for the online book store. Requires Node.js `^22.22.3 || ^24.15.0 || >=26`.

## Development server

Run `npm start` (or `npx ng serve`) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `npx ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to create a production build. The build artifacts will be stored in the `dist/frontend` directory.

## Running unit tests

Run `npm test -- --watch=false` to execute the unit tests via [Vitest](https://vitest.dev) (jsdom).

## Continuous integration

`.github/workflows/frontend.yml` runs `npm ci`, the unit tests and the production build on every push / pull request to `master` that touches `frontend/`.
