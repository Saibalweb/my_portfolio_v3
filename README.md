# Saibal Kole — Developer Portfolio

A desktop-first Next.js App Router portfolio based on the light and dark desktop screens in the Stitch project **Freelance Developer Portfolio Website**.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run typecheck
npm run build
npm start
```

## Structure

- `app/`: App Router page, layout, metadata, favicon, and global stylesheet.
- `app/globals.css`: semantic light/dark theme tokens, shared component styles, and desktop-first responsive breakpoints. No component-specific color palettes.
- `components/ui/`: locally owned shadcn-style primitives using Radix, Tailwind, and class-variance-authority.
- `components/`: portfolio sections, project previews, theme switching, navigation, and inquiry form.
- `lib/portfolio.ts`: profile information and reusable arrays for projects, services, process, experience, and technologies.
- `references/`: refreshed Stitch desktop HTML and source content retained for comparison.

## Behavior

- The theme follows the system preference initially; the header toggle persists the visitor's choice.
- Mobile navigation uses a keyboard-accessible Radix dialog.
- Each project opens an accessible case-study dialog.
- Project interfaces are illustrative previews, clearly labeled as such.
- The inquiry form validates required fields and prepares a mailto draft. Visitors must send it from their email app; no backend delivery service is configured.
- Contact links support email, phone, WhatsApp, LinkedIn, and GitHub. The email address can be copied.

The updated Stitch project no longer included a standalone portrait asset, and its desktop preview showed a broken portrait. A developer monogram fills that space without an external image dependency. Replace the monogram in `components/hero.tsx` with your portrait when available.

Claims and experience descriptions use the supplied portfolio source. Unverified performance figures, uptime numbers, delivery guarantees, and placeholder social links from the generated design were omitted.

## Verification in this workspace

- TypeScript checking passed against locally cached dependencies.
- Tailwind compiled the global stylesheet successfully.
- Server-rendered all seven portfolio sections and checked for duplicate IDs, missing anchor targets, and placeholder links; none were found.
- A normal dependency installation and production build remain unverified: this environment could not resolve `registry.npmjs.org`, and its cache lacks the required Tailwind PostCSS package.
- Browser visual checks could not run because the execution sandbox prevented Chromium from launching.

Run `npm install`, `npm run typecheck`, and `npm run build` on a machine with registry access before deployment.
