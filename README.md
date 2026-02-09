# React Next Blog (Pages Router)

A simple blog built with Next.js Pages Router. It includes a landing page, a blogs listing page, and dynamic blog detail routes.

## Features
- Pages Router structure under `pages/`
- Dynamic route for blog details using `pages/blogs/[blogId]/index.js`
- Static mock data in `data/mockPosts`
- Reusable blog components in `components/blog/`

## Routes
- `/` -> `pages/index.js` (landing page)
- `/blogs` -> `pages/blogs/index.js` (all blogs)
- `/blogs/[blogId]` -> `pages/blogs/[blogId]/index.js` (dynamic blog detail)

## Dynamic Routes
The blog detail page is implemented with a dynamic segment:
```text
pages/blogs/[blogId]/index.js
```
When you navigate to a URL like `/blogs/1`, the value `1` is available as `blogId` via `useRouter().query`.

## Getting Started
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

## Project Structure
```text
components/
  blog/
data/
  mockPosts.js
pages/
  index.js
  blogs/
    index.js
    [blogId]/
      index.js
```

## Notes
- This project uses the Pages Router (not the App Router).
- Dynamic routes live in square‑bracket folders.
