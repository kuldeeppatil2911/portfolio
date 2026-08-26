# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# Kuldeep Patil Portfolio

An interactive, frontend-only portfolio for Kuldeep Patil, a Software Engineer and Full Stack Developer. It presents his engineering profile, production experience, systems portfolio, technical vocabulary, applied AI work, problem-solving achievements, and contact channels in a single responsive experience.

## Features

- Animated boot screen and engineering-themed visual system
- Responsive navigation across portfolio sections
- Interactive project cards with case-study modals
- Animated systems architecture and technology visualizations
- Applied AI showcase for InterviewMind and KrishiLens
- Developer console with commands for exploring portfolio information
- Direct email, phone, GitHub, and LinkedIn contact links

## Technology Stack

- **Frontend:** React 19, Vite 8
- **Styling:** CSS with responsive layouts, animation, and CSS variables
- **Tooling:** Vite, Oxlint, npm
- **Deployment:** Vercel
- **Assets:** Local PNG and SVG assets in `src/assets` and `public`

This repository does not currently contain a backend, database, API server, authentication system, or environment variables. The project cards describe related systems Kuldeep has built, but those systems are not implemented in this repository.

## Architecture

The app is a single React entry point rendered into `#root`. Portfolio content is represented as local data in `src/App.jsx`; interactions such as scrolling, project selection, role rotation, and the console are managed with React state and effects. See the full technical description in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Installation

```bash
git clone https://github.com/kuldeeppatil2911/portfolio.git
cd portfolio
npm install
```

## Environment Variables

No environment variables are required. Contact links use the email address, phone number, and social URLs defined in the React view.

## Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173/`.

## Testing and Verification

There is currently no automated test suite. The available checks are:

```bash
npm run lint
npm run build
```

These validate the source with Oxlint and verify that Vite can produce the production bundle.

## Production Build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`, which is ignored by Git.

## Deployment

The project is deployed on Vercel from the `main` branch of [kuldeeppatil2911/portfolio](https://github.com/kuldeeppatil2911/portfolio).

For a new Vercel project, import the repository and use:

- Framework preset: `Vite`
- Root directory: `./`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The deployed portfolio is available at [portfolio-o8el.vercel.app](https://portfolio-o8el.vercel.app/).

## Security

This static site has no server-side secrets, authentication, or user-submitted data. Do not add credentials to source files; use Vercel environment variables if a future backend or API integration is introduced.

## Troubleshooting

- **Blank or missing assets:** confirm `vite.config.js` uses `base: '/'` for Vercel hosting.
- **Dependencies fail to install:** use a current Node.js LTS release and run `npm ci` from the repository root.
- **Changes are not live:** confirm the commit was pushed to `main` and inspect the Vercel deployment for that commit.

## License

No license file is currently included in this repository.
