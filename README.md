# To My Forever Little Sister 💗

A cinematic, responsive Sweet Sixteen love letter built with React, Vite, TypeScript, Framer Motion, Lucide, and Tailwind-ready tooling.

## Run locally

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run build
npm run preview
```

## Personalize it

1. Open [`src/config.ts`](./src/config.ts).
2. Change `sisterName`, `birthday`, the letter, gift message, final message, wishes, timeline, and gallery captions.
3. Add your own files in:
   - `public/images/your-photo-name.jpg` for the personal photo gallery and hero/final images
   - `public/audio/happy-birthday.wav` for the birthday music
4. Keep the existing paths, or update the matching values in `src/config.ts`.

The site includes a graceful placeholder for every missing photo, so the project remains presentable before personal assets are added. It never generates or modifies faces.

## Deploy

This is a standard Vite site. Import the repository into Vercel or Netlify with:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

No environment variables, login, server, or database are needed.

## Experience checklist

- [x] Envelope intro with keyboard-accessible opening action
- [x] Responsive hero with birthday countdown and date-aware message
- [x] Filterable, lazy-loaded photo gallery with lightbox
- [x] Animated letter, timeline, gift reveal, wishes wall, cake candles, confetti
- [x] Optional music toggle with no autoplay
- [x] Reduced-motion support and semantic landmarks
- [x] Local asset paths with safe visual fallbacks
