# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Cloudflare Pages Order Email

This project now includes a Cloudflare Pages Function endpoint at:

- `POST /api/send-order-email`
- Source: `functions/api/send-order-email.js`

It sends checkout order data via Resend.


### Required environment variables (Cloudflare Pages)

- `RESEND_API_KEY`
- `ORDER_EMAIL_FROM` (must be a verified sender in Resend)
- `ORDER_EMAIL_TO` (destination inbox)
- `CONTACT_EMAIL_FROM` (must also be a verified sender in Resend)
- `CONTACT_EMAIL_TO` (optional; defaults to `apex.peptides.cr@gmail.com` if not set)

Set these in Cloudflare Pages:

1. Go to your Pages project.
2. Open **Settings** > **Environment variables**.
3. Add variables for both **Production** and **Preview** as needed.

### Build settings

- Build command: `npm run build`
- Build output directory: `dist`

Cloudflare Pages will automatically deploy the static app and the `functions/` API routes together.
