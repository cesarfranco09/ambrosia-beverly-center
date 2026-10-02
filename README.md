# Ambrosia — Beverly Center, Los Angeles

Website for **Ambrosia**, a Greek · Italian · Mediterranean restaurant at the Beverly Center.
It is a static site with no build step: plain HTML, CSS and JavaScript.

The look comes from the restaurant's printed menus: ivory paper, navy ink, olive branches,
Roman capitals and Greek-key borders. The layout borrows ideas from upscale Mediterranean
restaurant sites: a full-bleed hero, generous white space and an editorial serif type scale.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx http-server .   # or: python3 -m http.server
```

## Deploy

Drag the folder into Netlify, Vercel or Cloudflare Pages, or enable GitHub Pages on this repository.
No build command is needed and the output directory is the repository root.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page markup and sections |
| `css/styles.css` | All styling (color/typography tokens at the top) |
| `js/menu-data.js` | **All menus and prices.** Edit dishes here |
| `js/main.js` | Nav, menu tabs, reservation form, scroll effects, and `SITE_CONFIG` |
| `assets/` | Olive-branch ornament and favicon |

## Before launch: details to get from the restaurant

Fill these in under `SITE_CONFIG` at the top of `js/main.js`. Fields left empty stay hidden on the page.

- [ ] Phone number
- [ ] Email for reservation requests, **or** a Formspree/Basin form endpoint, **or** an OpenTable/Resy link
- [ ] Lunch & dinner hours (only brunch 8–2 and happy hour M–F 3–6 appear on the menus)
- [ ] Instagram / social links, if any
- [ ] Unit number / level inside the Beverly Center
- [ ] Prices not readable on the menu photos: **Mashed Potatoes, Homemade Fruit Tart, Homemade Cheesecake**
      (set `price` in `js/menu-data.js`)
- [ ] Confirm which lunch & dinner menu is current. Two printed versions exist. This site uses the
      longer one (with Tuna Tartare, Chicken Petroniana, Rack of Lamb). The shorter one also lists Ricotta & Spinach
      Ravioli, Tagliatelle Cacio e Pepe and Tagliatelle with Smoked Salmon.

## Photos

Every photo is a placeholder from [Unsplash](https://unsplash.com/license), which is free to use, loaded by URL.
Swap them for real photos of Ambrosia's food and dining room as soon as you can.
Search the code for `images.unsplash.com` to find each one.
