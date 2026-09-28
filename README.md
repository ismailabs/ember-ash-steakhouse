# Ember & Ash — Fictional Steakhouse Portfolio

A cinematic, responsive front-end portfolio project for an original fictional premium steakhouse. The site demonstrates brand-led UI design, React architecture, route-level composition, animation, accessibility-minded interactions, client-side form validation, and a polished gallery experience.

> **Portfolio disclosure:** Ember & Ash is not a real restaurant. The restaurant name, address, contact details, chef, menu, prices, opening hours, reservations, and business claims are fictional and exist only for demonstration.

## Stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 4 via `@tailwindcss/vite`
- Motion for React
- React Router

## Pages

1. **Home** — cinematic hero, brand premise, featured dishes, concept statistics, atmosphere and demo reservation CTA.
2. **Menu** — responsive category filtering across starters, signature steaks, mains, sides, desserts and zero-proof drinks.
3. **About** — original fictional story, philosophy, chef profile, principles and concept facts.
4. **Gallery** — responsive mixed-span image grid with an accessible escape-key lightbox.
5. **Contact** — fictional contact information, opening hours and a validated front-end-only reservation demo.

A custom 404 route is also included.

## Key Features

- Responsive mobile/tablet/desktop layouts
- Accessible responsive navigation with escape-key close behavior
- Scroll progress indicator
- Route transitions, reveals, hover interactions and restrained parallax
- `prefers-reduced-motion` support
- Semantic headings and landmarks
- Keyboard-visible focus states
- Client-side reservation validation and explicit demo success state
- Menu category filtering
- Gallery lightbox
- Per-route document title and description updates
- Lazy-loaded noncritical imagery
- Persistent fictional-project disclosure
- Supplied `built-by-ismail.png` attribution banner integrated in the footer
- Centralized content and image references for straightforward editing

## Project Structure

```text
ember-and-ash-steakhouse/
├─ public/
│  ├─ built-by-ismail.png
│  └─ favicon.svg
├─ src/
│  ├─ components/      # Navigation, footer, buttons, reveals, headings, etc.
│  ├─ data/site.ts     # Restaurant content, menu and remote image references
│  ├─ hooks/           # Route metadata helper
│  ├─ pages/           # Five primary route pages + 404
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ styles.css
├─ index.html
├─ package.json
└─ vite.config.ts
```

## Run Locally

Requirements: a current Node.js LTS/current release compatible with Vite 8.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Type Check / Production Build

```bash
npm run typecheck
npm run build
npm run preview
```

The production output is written to `dist/`.

## Image Handling

Restaurant photography is referenced remotely from Unsplash through centralized URLs in `src/data/site.ts`. This keeps the project ZIP compact and makes imagery easy to replace.

To replace an image:

1. Open `src/data/site.ts`.
2. Replace the relevant URL inside the `images` object.
3. Keep equivalent aspect ratios where possible to preserve intentional crops.
4. Update alt text if the subject changes.

For a production client site, prefer owned/licensed assets and a dedicated image CDN with explicit width/format transformation and asset governance.

## Built by Ismail Banner

The supplied source asset is stored at:

```text
public/built-by-ismail.png
```

`Footer.tsx` renders the original asset as a responsive image. Its source file is not altered.

## Reservation Form

The contact-page form is intentionally front-end only. It performs local validation and shows a demo confirmation state. It does **not** send, store, or create a real reservation.

A production implementation would require a real reservation provider or backend, verified availability, spam protection, privacy handling, transactional messaging, and error/retry behavior.

## Static Hosting Note

Because the app uses client-side routing, hosts should be configured with an SPA fallback to `index.html` for direct visits to `/menu`, `/about`, `/gallery`, and `/contact`.

## Accessibility Notes

The project uses semantic markup, visible focus treatment, labelled form controls, keyboard-operable navigation/lightbox controls, reduced-motion behavior, useful image alt text, and high-contrast typography. A production release should still undergo automated and manual accessibility testing in real browsers and assistive technologies.

## Portfolio Use

This project is designed to be customized. Replace the fictional identity, copy, menu and imagery before adapting it for a real client. For a real restaurant, remove portfolio-only disclosure only after every business detail has been verified and real booking/contact infrastructure has been connected.
