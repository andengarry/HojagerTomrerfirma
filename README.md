# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

________________________________________________________________
Projekt af Jane Lundsgaard

for at køre hjemmesiden skal vite udviklingsserveren køre. 
den kører på http://localhost:5173/

for at stoppe serveren tryk ctrl + c og når den skal startes, skal være i denne mappe og køre:
npm run dev
dev kører lokalt og herved kan ændringerne ses inden de deployes og til sidst når alt ok push til main

for produktion kør først
npm run buid og derefter npm run deploy
herved vil npm opdatere branch som hjemmesiden kører på på github pages

med react loades siden som komponenter. app indeholder sammensætningen af alle komponenter.
_________________________________________________________________

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
