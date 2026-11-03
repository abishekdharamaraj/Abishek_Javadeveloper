# Abishek D | Developer Portfolio

A luxury, single-page portfolio website for **Abishek D**, a Java Backend Developer. It features a dark emerald and brass-gold design, an animated monogram intro, a Spring Boot terminal card in the hero, and slow, smooth scroll animations.

🔗 **Live site:** `[YOUR-LIVE-LINK](https://abishekdharamaraj.github.io/Abishek_Javadeveloper/)`

---

## 🛠️ Tech stack used to build this site

| Layer | Technology | Used for |
|---|---|---|
| Markup | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic page structure (header, nav, sections, footer) |
| Styling | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | CSS variables, Grid and Flexbox layout, keyframe animations, transitions, responsive design |
| Scripting | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Vanilla JS: theme toggle, scroll reveal, scroll progress bar, preloader sequence |
| Fonts | ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white) | Bodoni Moda (headings) and Hanken Grotesk (body text) |
| Icons | Inline SVG | Custom line icons for skills and project tags, plus the animated "AD" monogram |
| Hosting | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=githubpages&logoColor=white) | Free static hosting (or Vercel / Netlify) |
| Version control | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | Source control |
| AI assistance | ![Claude](https://img.shields.io/badge/Claude-D97757?style=flat-square&logo=claude&logoColor=white) | Design and code generation |

**No frameworks, no build step, no dependencies.** The whole site is one self-contained HTML file, so it loads fast and is easy to edit.

---

## ✨ Features

- Opening sequence: the "AD" monogram draws itself, the screen lifts away, and the name rises into place
- Terminal card in the hero showing a Spring Boot app starting up, line by line
- Dark and light themes with a toggle (the choice is remembered)
- Sections fade up gently as you scroll, with a slim gold scroll progress bar
- Timeline whose line draws itself as it scrolls into view
- Skill icons and project tags drawn as inline SVG
- Fully responsive, with accessible focus states
- Respects `prefers-reduced-motion`
- Safe-area support for phones with notches

---

## 🎨 Design system

| Token | Dark | Light |
|---|---|---|
| Background | `#0C1B16` (deep emerald) | `#F3EEE1` |
| Text | `#EFE9DA` (ivory) | `#0F2019` |
| Muted text | `#9FB0A6` | `#5D675F` |
| Accent (brass gold) | `#C9AA63` | `#8A6D2B` |

**Typography:** Bodoni Moda for headings and the name, Hanken Grotesk (light 300) for body text, and a system monospace font for the terminal card.

**Motion:** easing `cubic-bezier(0.22, 1, 0.36, 1)` with durations between 0.8s and 1.3s. Only `transform` and `opacity` are animated, to keep scrolling smooth.

---

## 📁 Project structure

```
portfolio/
├── index.html      # the entire site: HTML, CSS and JavaScript
└── README.md
```

---

## 🚀 Run locally

```bash
git clone https://github.com/abishekdharamaraj/portfolio.git
cd portfolio
```

Open `index.html` in your browser. No installation is needed.

---

## 🌐 Deploy to GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and click **Save**.
4. Your site will be live at `https://abishekdharamaraj.github.io/portfolio/` after a minute or two.

You can also drag the folder into [Netlify Drop](https://app.netlify.com/drop) or import the repo on Vercel.

---

## ✏️ Customize

- **Text and links:** edit the content directly in `index.html` (About, Experience, Projects, Contact).
- **Colors:** change the CSS variables at the top of the `<style>` block.
- **Add a project:** copy an `<article class="pr rv">…</article>` block inside the Projects section and update the title, description and tags.
- **Add a skill:** add an `<li>` with an icon, such as `<svg><use href="#db"/></svg>`, to a skills list.

---

## 👤 Author

**Abishek D**, Java Backend Developer
📧 abishek21092001@gmail.com · 💼 [LinkedIn](https://www.linkedin.com/in/abishek-d-416873190) · 🐙 [GitHub](https://github.com/abishekdharamaraj)
