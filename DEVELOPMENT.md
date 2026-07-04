# Dr. Schaida Schirwani Consultancy Site

This project is now a Next.js, TypeScript, Tailwind CSS, and shadcn-style component application.

## Project structure

- App routes and global styles live in `app/`.
- The default shadcn UI component path is `components/ui/`, matching the `components.json` alias configuration.
- Shared utilities live in `lib/`, including `lib/utils.ts` for the `cn()` class-name helper used by shadcn components.

Using `components/ui/` is important because shadcn-generated components and imports such as `@/components/ui/button` assume this path. Keeping that convention makes future CLI-generated components and third-party shadcn examples easier to copy in without rewriting imports.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production check

```bash
npm run typecheck
npm run build
```

## shadcn CLI setup reference

If starting from a blank app, the equivalent setup flow is:

```bash
npx create-next-app@latest my-site --typescript --tailwind --eslint --app --src-dir=false
cd my-site
npx shadcn@latest init
```

When prompted, keep the UI alias as `@/components/ui` and the global CSS path as `app/globals.css`.
