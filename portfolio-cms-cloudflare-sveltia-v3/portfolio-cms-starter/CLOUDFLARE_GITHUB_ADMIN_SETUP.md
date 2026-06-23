# Free GitHub + Cloudflare Pages + Sveltia CMS Setup

This version avoids Netlify completely.

## What this setup gives you

- Public portfolio hosted on Cloudflare Pages.
- Content stored in your GitHub repository.
- `/admin` input dashboard powered by Sveltia CMS.
- Image/PDF uploads committed to `public/uploads` in GitHub.
- Automatic rebuild after every CMS save because Cloudflare Pages watches the GitHub repo.

## Important limits

No free platform is truly unlimited. For a portfolio, Cloudflare Pages is usually more comfortable than GitHub Pages because it has generous build and file limits. Keep individual uploads below 25 MiB for Cloudflare Pages assets.

## Step 1: Upload project to GitHub

Upload the extracted project files to a GitHub repository. The repository root must show:

```txt
package.json
astro.config.mjs
src
public
README.md
```

## Step 2: Update admin config

Open:

```txt
public/admin/config.yml
```

Change this:

```yml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME
  branch: main
```

Example:

```yml
backend:
  name: github
  repo: ijashahmedz/portfolio-cms
  branch: main
```

After deploying to Cloudflare, also update:

```yml
site_url: https://YOUR_PROJECT.pages.dev
display_url: https://YOUR_PROJECT.pages.dev
```

## Step 3: Deploy on Cloudflare Pages

1. Open Cloudflare dashboard.
2. Go to Workers & Pages.
3. Create application / Pages project.
4. Connect your GitHub repository.
5. Use these build settings:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node version | `20` |

Deploy the site.

## Step 4: Login to `/admin`

Open:

```txt
https://YOUR_PROJECT.pages.dev/admin
```

Use the Sveltia CMS **Sign in with Token** option.

Create a GitHub fine-grained personal access token with access to only this repository.

Minimum permissions to try first:

- Repository: your portfolio repo only
- Contents: Read and write
- Metadata: Read

If you enable advanced draft/PR workflows later, you may also need Pull Requests permission.

## Step 5: Add content

Use `/admin` to add:

- Profile
- About text
- Skills
- Projects
- Project screenshots
- Certificates
- Documents
- Resume PDF
- Blog posts
- Contact links

When you save, Sveltia CMS commits the update to GitHub. Cloudflare Pages then rebuilds and republishes the site.

## Recommended upload rules

- Compress dashboard screenshots before upload.
- Keep image names lowercase, with hyphens.
- Keep single files below 25 MiB.
- Use `.webp`, `.jpg`, `.png`, or `.pdf`.

Examples:

```txt
/uploads/projects/swiggy-dashboard-overview.webp
/uploads/certificates/power-bi-certificate.pdf
/uploads/resume/ijash-ahmed-resume.pdf
```
