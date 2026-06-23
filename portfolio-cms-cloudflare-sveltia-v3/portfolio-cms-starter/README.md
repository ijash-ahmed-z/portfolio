# Portfolio CMS Starter - GitHub + Cloudflare Pages + Sveltia CMS

This version is prepared for a no-Netlify workflow:

- Host the public website on Cloudflare Pages.
- Store all content in GitHub.
- Manage content at `/admin` using Sveltia CMS.
- Upload images, certificates, documents, resume PDFs, project screenshots, and posts through the admin UI.

See `CLOUDFLARE_GITHUB_ADMIN_SETUP.md` for the exact deployment steps.

---

# GitHub-Based Portfolio Website + Private Admin CMS

This is a production-ready starter for a personal portfolio website with a public portfolio and a private content/admin input system.

The public site is built with Astro and a custom responsive CSS design system. The private admin area uses Decap CMS, so you can add, edit, delete, draft, publish and upload content without editing code manually.

## What You Can Manage From `/admin`

- Personal profile information
- About section
- What I Can Do / capabilities section
- Skills and tech stack
- Projects and project detail pages
- Project screenshots and cover images
- Documents and resources
- Resume PDF
- Certificates, certificate images and certificate PDFs
- Images and files
- Links
- Blog posts/articles
- Contact details
- Social links
- Categories and tags
- Published/draft status through editorial workflow

## Recommended Stack

- **Astro**: fast static public website
- **Custom CSS design system**: clean, lightweight and easy to edit
- **Decap CMS**: private admin/input dashboard backed by GitHub content
- **Netlify Identity + Git Gateway**: secure production login and Git-backed content editing
- **GitHub**: source control and content storage
- **Netlify**: simplest deployment for Decap CMS authentication and uploads

## Project Structure

```txt
portfolio-cms-starter/
├── public/
│   ├── admin/
│   │   ├── config.yml          # Admin CMS fields and collections
│   │   ├── index.html          # Private admin app
│   │   └── preview.css
│   └── uploads/                # Uploaded files/images from admin
├── src/
│   ├── components/             # Reusable UI components
│   ├── content/
│   │   ├── profile/            # Personal profile data
│   │   ├── services/           # What I Can Do capability records
│   │   ├── projects/           # Project case studies
│   │   ├── skills/             # Skill records
│   │   ├── certificates/       # Certificates
│   │   ├── documents/          # PDFs/resources
│   │   └── posts/              # Blog posts/articles
│   ├── layouts/                # Base layout
│   ├── pages/                  # Public routes
│   │   ├── index.astro
│   │   ├── projects/
│   │   ├── posts/
│   │   └── resources/
│   ├── styles/
│   └── content.config.ts       # Typed content schema
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## Public Website Pages

- `/` - Home, What I Can Do, About, Skills, Featured Projects, Resume/Documents, Certifications
- `/projects/` - All published projects
- `/projects/[slug]/` - Individual project detail pages
- `/resources/` - Resume/documents/resources and certificate library
- `/posts/` - Blog/articles index
- `/posts/[slug]/` - Article detail pages
- `/admin/` - Private admin/input dashboard
- `/admin-setup/` - Setup guide page

## Content Schema Summary

### Profile
Controls site identity, hero, about, contact, resume, avatar, stats and social links.

### Services / What I Can Do
Controls the accordion-style capability section on the homepage.

### Projects
Supports title, category, excerpt, cover image, cover alt text, unlimited gallery screenshots, tools, dataset, techniques, problem, approach, insights, growth note, GitHub link, demo link, tags, featured status, published status and SEO.

### Skills
Supports title, category, icon, level, tags, publish status and ordering.

### Certificates
Supports title, issuer, image, PDF/file, verification URL, issued date, skills and ordering.

### Documents
Supports resume, reports, case studies and other resources with uploaded files or external links.

### Posts
Supports blog posts and articles with Markdown body, tags, date, cover image and SEO.

## Local Development

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:4321
```

## Local Admin CMS

For local editing through `/admin`, run two terminals:

Terminal 1:

```bash
npm run dev
```

Terminal 2:

```bash
npm run cms
```

Then open:

```txt
http://localhost:4321/admin
```

Edits made through local CMS will update files in `src/content` and uploads in `public/uploads`.

## Production Deployment on Netlify

1. Create a GitHub repository.
2. Push this project to GitHub.
3. Go to Netlify and create a new site from the GitHub repo.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy the site.
7. In Netlify, enable **Identity**.
8. Enable **Git Gateway**.
9. Invite yourself as a user under Identity.
10. Open `https://your-site.netlify.app/admin/` and log in.
11. Add, edit, draft, publish and upload content through the dashboard.

## Production Deployment on Vercel or GitHub Pages

The public site can be deployed as a static Astro site on Vercel or GitHub Pages. The built-in `/admin` setup in this starter uses Netlify Identity + Git Gateway for secure CMS login. If you deploy the public site outside Netlify, configure a Decap CMS GitHub OAuth backend or another authentication provider.

## Updating Content

### Add a Project

1. Go to `/admin`.
2. Open **Projects**.
3. Click **New Project**.
4. Add title, summary, cover image, gallery screenshots, tools, dataset, problem, approach, insights and links.
5. Toggle **Published** on.
6. Save and publish.

### Add Resume PDF

1. Go to `/admin`.
2. Open **Personal Profile**.
3. Upload the Resume PDF field.
4. Save and publish.

You can also add the resume in **Documents / Resources** with Type = `Resume`.

### Add Certificates

1. Go to `/admin`.
2. Open **Certificates**.
3. Add certificate title, issuer, image/PDF, verification URL and skills.
4. Save and publish.

### Add Documents

1. Go to `/admin`.
2. Open **Documents / Resources**.
3. Upload file or add an external URL.
4. Add description and tags.
5. Save and publish.

### Add Capability / Service Items

1. Go to `/admin`.
2. Open **What I Can Do**.
3. Add title, summary, bullet points and display order.
4. Save and publish.

## Design Direction

- Pale lavender background
- Premium purple accent
- Floating pill navigation
- Huge condensed display headings
- Modern rounded project cards
- Native accessible accordion for the capability section
- Strong visual hierarchy
- Responsive grid system
- Lightweight static pages
- Accessible semantic HTML
- Reduced-motion support

## Notes

- Do not store private documents in this repository if the repository is public.
- Anything published into `public/uploads` becomes publicly accessible.
- Use drafts for content you are still editing.
- Replace all starter content from the admin dashboard before publishing.
