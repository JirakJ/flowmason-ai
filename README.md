# StreamForge AI

Production-ready Next.js website for StreamForge AI, a premium AI Delivery Stream consulting business.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel deployment target

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
| `NEXT_PUBLIC_SITE_URL` | No | Canonical production URL. Defaults to `https://streamforge.ai`. |
| `CONTACT_WEBHOOK_URL` | For lead form delivery | Webhook endpoint that receives qualified lead submissions from `/api/lead`. |

If `CONTACT_WEBHOOK_URL` is not configured, the form returns a clear configuration message and directs prospects to email `hello@streamforge.ai`.

## Deployment

Deploy on Vercel as a standard Next.js project. Set `NEXT_PUBLIC_SITE_URL` to the production domain and configure `CONTACT_WEBHOOK_URL` before using the lead form in production.
