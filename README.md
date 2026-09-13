# COSMO E-Commerce Storefront

**COSMO** is an editorial-grade, multi-department fashion and lifestyle storefront inspired by contemporary luxury fashion houses. Built purely with semantic HTML5, vanilla CSS3, and modular ES6+ JavaScript, it delivers a responsive, lightning-fast shopping experience across **Ladies**, **Men**, **Kids**, and **Home** collections without any external framework overhead.

---

## 🌟 Key Highlights & Architecture

- **Editorial Typography & Branding**: High-contrast masthead logo inspired by Canela and Editorial New (rendered via Cormorant Garamond), crisp **Plus Jakarta Sans** UI typography, and bold product card titles.
- **Adaptive Navigation Header**: Desktop navbar features left-aligned department links, a centered brand logo, and right-aligned text utilities (`ACCOUNT`, `SEARCH`, `CART`, and `FAVORITES`). On mobile screens, all navigation utilities collapse neatly inside the 3-line slide-out drawer with zero bracket spacing and text-only favorite links (`FAV.`).
- **Targeted Announcement Bar**: Red promotional banner (`FREE SHIPPING OVER RS. 1,399`) rendered strictly on department home pages.
- **Curated Editorial Showcase**: Features bold section typography ("Don't Shop Around") paired with editorial campaign cards.
- **Selective Discount Pricing**: Non-discounted items display in solid black, while discounted pieces highlight sale values in red with original crossed-out prices.
- **Integrated Shopping Flow**: Instant Apple-style search overlay, QuickView modal, persistent `localStorage` cart with voucher discounts, and a sliding Wishlist drawer.
- **Light-Themed Minimalist Footer**: Clean 4-column link hierarchy inspired by high-end architectural layouts, with the signature COSMO logo positioned in the final row.
- **Local Asset Management**: All product images, model lookbooks, apparel cutouts, and campaign banners are loaded directly from the local [`images/`](images/) folder.

---

## 🚀 Quick Start

Run the storefront with any local web server:

```bash
# Using Node.js
npx -y serve .

# Using Python
python -m http.server 5500
```

Open `http://localhost:5500/index.html` in your browser.
