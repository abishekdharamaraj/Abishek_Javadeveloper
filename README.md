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

The production files are written directly to the project root: `index.html` and `assets/`. The Vite source entry is `src/index.html`, so running a new build will not overwrite the source page.

## Edit the content

Update profile details, links, skills, experience, and projects in `src/data.js`. Add a project object to the `projects` array; it will be rendered automatically. Use an icon name available in `src/components/Icon.jsx` for skill and technology icons.

## Deploy to Vercel

Import the repository into Vercel. Use the project root as the root directory, `npm run build` as the build command, and `.` as the output directory. Set `VITE_BASE_PATH` to `/` in Vercel because it hosts the site at the domain root.

## Deploy to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`. It builds the React/Vite app to a temporary `dist/` artifact, sets the repository URL base automatically, and deploys it. A regular `npm run build` still places the production `index.html` and `assets/` in the project root and defaults to `/Abishek_Javadeveloper/`; local development uses `/`.

In the GitHub repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. This is important: the current “Deploy from a branch” configuration is asking Jekyll to read a `docs/` directory, which this project does not have. After changing the source, push to the repository's default branch or run the **Deploy portfolio to GitHub Pages** workflow from the Actions tab.

The workflow handles repository sites such as `https://<user>.github.io/<repository>/`. For a custom domain or a user site at `https://<user>.github.io/`, change the workflow's `VITE_BASE_PATH` value to `/`.