# SUKHAN

Minimalist fragrance storefront. Static site, no build step, hosted on GitHub Pages.

- Live: https://nadeem9986.github.io/sukhan/
- Ordering: each "Buy now" button opens WhatsApp to +91 76192 25624 with a prefilled
  "I would like to buy <NAME> from SUKHAN." message and a link to the product image.
  WhatsApp links cannot attach images, so the image is included as a link that renders a preview.
- Current products (NOOR, RAAT, FIKR, ISHQ, SABR, KHWAAB) are clearly marked samples:
  names, notes and imagery are placeholders until the real catalogue, photos and prices are supplied.

## Structure

- `index.html` — single-page storefront (hero, collection with scent-family filters, order steps, about)
- `styles.css` — ivory/ink/amber minimalist theme (Fraunces serif + Inter)
- `app.js` — filter chips and reveal-on-scroll (respects prefers-reduced-motion)
- `images/` — generated product and hero imagery (samples)
- `IMPROVEMENTS.md` — change log and quality gate for this project

## Editing products

Each product is one `<article class="card" data-family="...">` in `index.html`.
Update the image, name, family, one-line description, notes (Top/Heart/Base) and the
`href` of its Buy now link (a `https://wa.me/917619225624?text=...` URL — the message is
URL-encoded; keep the product name in it in sync with the card).
