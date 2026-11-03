# Abishek D — Portfolio

The portfolio is a single standalone page. Open `index.html` directly in a browser, or publish that file to any static host. No build step or JavaScript framework is required. Google Fonts load from their CDN; system fallbacks are included.

## Edit content

Update the page copy directly in `index.html`. The sections are marked with IDs: `about`, `skills`, `experience`, `projects`, and `contact`.

## Add a project

Copy the `<article class="project-row">…</article>` inside the Projects section. Replace its heading, description, technology tags, and GitHub URL. The small inline SVG symbols are defined near the top of the document and can be reused with `<svg><use href="#icon-spring"/></svg>`.

Theme colors and light/dark variants are CSS custom properties near the beginning of the `<style>` block. Theme preference is stored in local storage when available.
