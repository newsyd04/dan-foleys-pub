# Dan Foley's Pub

Marketing site for Dan Foley's Pub in Annascaul, Co. Kerry. Built with Vite + React 18 + Tailwind CSS, deployed to [danfoleys.ie](https://danfoleys.ie).

## Stack

- **Vite 6** with React 18 and React Router 7
- **Tailwind CSS 3.4** with a heritage palette (cream, burgundy, charcoal, gold, dusty-rose)
- **motion** (framer-motion) for fade-in-on-scroll animations
- **yet-another-react-lightbox** for the gallery
- Cormorant Garamond (display) + Inter (body), served from Google Fonts

## Pages

| Route       | Page          | Purpose                                                    |
| ----------- | ------------- | ---------------------------------------------------------- |
| `/`         | Home          | Hero, intro, photo teaser, visit teaser                    |
| `/history`  | History       | The pub's story · Dan Foley, magic, the 2025 reopening     |
| `/gallery`  | Gallery       | Photos of the pub (lightbox-on-click, multi-column flow)   |
| `/visit`    | Visit         | Address, hours, socials, Google Maps embed                 |
| `*`         | NotFound      | 404 with a route back home                                 |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produces dist/
npm run preview  # serves dist/ for production-build check
```

## Open TODOs

Search the codebase for `TODO:` to find every unconfirmed fact. Current ones:

1. **`HomePage.jsx`** · "Open from 2 pm daily" · confirm with pub
2. **`VisitPage.jsx`** · daily hours table (currently "2pm to late" everyday placeholder) · confirm
3. **`public/og-image.jpg`** · needs a real 1200×630 social card. Generate from a hero screenshot once a real exterior photo lands.
4. **`src/assets/photos/`** · gallery is empty. Drop in JPGs (~1200 px on the long edge) and add to the `PHOTOS` array in `GalleryPage.jsx` as `{ src, alt }` entries.

## Photo replacement

The Gallery and Home page are wired with an empty placeholder state until photos are added. To populate:

1. Drop image files into `src/assets/photos/`.
2. In [`src/pages/GalleryPage.jsx`](./src/pages/GalleryPage.jsx) at the top, import each photo and add to the `PHOTOS` array:
   ```js
   import pub01 from "../assets/photos/pub-01.jpg";
   const PHOTOS = [{ src: pub01, alt: "Pink front of Dan Foley's Pub" }, ...];
   ```
3. For the home page hero · replace the gradient `<div>` in [`HomePage.jsx`](./src/pages/HomePage.jsx) with an `<img src={hero} />` once a hero photo is chosen.

## Deployment

Site auto-deploys to Vercel from the `main` branch.

DNS for `danfoleys.ie`:

- **A record** `@` → `76.76.21.21`
- **CNAME** `www` → `cname.vercel-dns.com`

After Vercel pushes, `danfoleys.ie` and `www.danfoleys.ie` should both resolve to the site.

## Sources / verification

The history copy is drawn from public sources:

- [Accidentally Wes Anderson · Dan Foley's Pub](https://accidentallywesanderson.com/places/dan-foleys-pub/)
- [Kerry's Eye · June 2025 reopening announcement](https://x.com/Kerrys_Eye/status/1920214639662551280)
- [Tripadvisor · Dan Foley's Pub](https://www.tripadvisor.com/Attraction_Review-g983232-d33244619-Reviews-Dan_Foley_s_Pub-Annascaul_Dingle_Peninsula_County_Kerry.html)

Anything not verified by a public source is marked with a `TODO:` comment in the code.
