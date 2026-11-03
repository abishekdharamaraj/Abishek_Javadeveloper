# Abishek D — Developer portfolio

A responsive, single-page React portfolio with a restrained editorial layout, Framer Motion transitions, and a persistent light/dark theme.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

The production files are written directly to the project root: `index.html` and `assets/`. After each build, they are copied to `docs/` for the repository's existing GitHub Pages configuration. The Vite source entry is `src/index.html`, so builds do not overwrite the source page.

## Edit the content

Update profile details, links, skills, experience, and projects in `src/data.js`. Add a project object to the `projects` array; it will be rendered automatically. Use an icon name available in `src/components/Icon.jsx` for skill and technology icons.

## Deploy to Vercel

Import the repository into Vercel. Use the project root as the root directory, `npm run build` as the build command, and `.` as the output directory. Set `VITE_BASE_PATH` to `/` in Vercel because it hosts the site at the domain root.

## Deploy to GitHub Pages

The repository is configured to publish from the `docs/` folder on the `main` branch. Run `npm run build`, then commit and push the generated `docs/` files. The build defaults to `/Abishek_Javadeveloper/` for this repository; local development uses `/`.

In GitHub, keep **Settings → Pages → Build and deployment** set to **Deploy from a branch**, branch `main`, folder `/docs`. The build creates that folder and includes `.nojekyll`, preventing Jekyll from modifying the static Vite output.

The workflow handles repository sites such as `https://<user>.github.io/<repository>/`. For a custom domain or a user site at `https://<user>.github.io/`, change the workflow's `VITE_BASE_PATH` value to `/`.