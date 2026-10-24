# Resume

A modern online resume scaffold built with Next.js, TypeScript, and Tailwind, following the same pages-based architecture pattern used in the reference app.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Production build

```bash
npm run build
```

## Notes

## Resume content

Roles and projects are stored as Markdown files under `public/roles` and `public/projects`. They are served directly at `/roles/<filename>.md` and `/projects/<filename>.md`; the filename without `.md` becomes the detail-page slug. YAML frontmatter provides card and page metadata. Project frontmatter can set `relatedRole` to a role filename (without `.md`) to show that project on the role page.

Add a role thumbnail beside its Markdown file using the same filename and a `.png`, `.jpg`, or `.webp` extension; for example, `public/roles/dfinity-foundation.md` can use `public/roles/dfinity-foundation.webp`. If no image is present, the page displays an initials placeholder.
