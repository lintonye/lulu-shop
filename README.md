# Lululemon shopping chat bot

## Architecture

- Next.js, React, TailwindCSS, Prisma (just for generating tables)
- Vercel’s AI SDK: hopefully the easiest way to build a chat app

Backend:

- Supabase: for storing user data, product data and brand knowledge (both regular data and vectors)
- The chat endpoints need to be hosted as edge functions to enable streaming

Frontend:

- Chrome extension / web app?

Data scraping:

- We’d manually populate the database with scraped data
