# FlowMason AI

Production-ready Next.js website for FlowMason AI, a premium AI Delivery Stream consulting business.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GitHub Pages static deployment

## Local development

Install dependencies and run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production checks

```bash
npm run check
```

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical production URL. Defaults to `https://flowmason.ai`. |
| `GITHUB_PAGES` | In GitHub Actions | Set to `true` to build with the `/flowmason-ai` base path. |

The contact form is static-hosting compatible and opens a prefilled email to `hello@flowmason.ai`.

## Deployment

The repository includes `.github/workflows/deploy-pages.yml`, which builds a static Next.js export and deploys `out/` to GitHub Pages.

For GitHub Pages project hosting, the workflow sets:

```bash
GITHUB_PAGES=true
NEXT_PUBLIC_SITE_URL=https://jirakj.github.io/flowmason-ai
```

The production URL is `https://jirakj.github.io/flowmason-ai/`.
