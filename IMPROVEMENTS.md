# SUKHAN — improvements and incident log

Quality gate carried over from the Morse project: mistakes get written down, and the
shipped artifact is reviewed against them before delivery.

## 2026-11-15 — v1.0 initial build

### What was researched before building
Fragrance storefront comparison: Dossier, Le Labo, KAYALI, Diptyque, Snif, ISAK Fragrances
plus a 2026 perfume-design trend survey. Features taken: storytelling single-CTA hero,
scent-family filtering, Top/Heart/Base note structure on every product, editorial one-line
descriptions, mobile-first layout, restrained palette with one accent, accessibility basics
(contrast, focus rings, alt text, reduced-motion). Features deliberately left out as not
credible for a brand with no public history yet: fake review counts, fake testimonials,
"as seen on" badges, discount banners.

### Mistakes / traps logged
1. **Placeholder data can masquerade as real inventory.** Product names, notes and imagery
   are samples until the owner supplies the real catalogue. Mitigation: visible
   "Catalogue preview" note under the hero and in the footer; no prices shown at all
   rather than invented ones.
2. **WhatsApp cannot attach images to a prefilled message.** Mitigation: the Buy now
   message includes the product image URL, which WhatsApp renders as a link preview;
   disclosed to the owner instead of silently promising "with the image".
3. **AI-generated imagery can render garbled text labels.** Mitigation: prompts explicitly
   required blank, unlabeled bottles; each shipped image must be visually inspected before
   upload, not trusted from generation success.
4. **Shipping without seeing the real page.** Gate: desktop and mobile screenshots of the
   live Pages site, plus clicking a real Buy now link, are required before calling v1 done.

### Pre-ship review checklist (v1)
- [ ] All 7 images visually inspected (no text artifacts, consistent series)
- [ ] Live Pages URL loads on desktop and mobile widths
- [ ] Filter chips work; no card disappears unexpectedly
- [ ] Buy now link opens wa.me with the correct product name prefilled
- [ ] Repo is private; Pages source points at main/(root)
