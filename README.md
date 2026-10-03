# Mtaanisoft Technologies

## Frontend and backend

This repository is an npm workspace with independently runnable applications:

- `apps/frontend` — Next.js App Router website.
- `apps/backend` — Express API for project-brief and talent-profile submissions.

Install dependencies from the repository root, then run both development servers:

```sh
npm install
npm run dev
```

The frontend is available at `http://localhost:3000`; the API listens at
`http://localhost:4000`. The backend health endpoint is `GET /health`.

Copy `apps/frontend/.env.example` to `apps/frontend/.env.local` and
`apps/backend/.env.example` to `apps/backend/.env` (for example, using
`Copy-Item` in PowerShell). `.env.example` files are templates and are not
loaded automatically. Set the Supabase service role key, Resend API key,
verified sender, and recipient addresses in the backend environment only.
Restart the backend after changing environment variables. Never use a
`NEXT_PUBLIC_` prefix for backend secrets.

Run `supabase/schema.sql` in the Supabase SQL editor to create the submission
tables and private resume bucket. Both the backend and Supabase configuration
must be ready before form submissions can be persisted.

If resume uploads return a storage 404, verify that `SUPABASE_URL` points to
the same Supabase project where `supabase/schema.sql` was run, and confirm the
private `resumes` bucket exists in that project's Storage dashboard.

Use `npm run build` to build both apps.
