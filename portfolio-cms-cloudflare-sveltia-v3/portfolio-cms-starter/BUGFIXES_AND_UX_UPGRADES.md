# Bug Fixes and UI/UX Upgrades

## Checked and improved

- Removed unused Tailwind integration from the runtime setup because the project uses a custom CSS design system.
- Added a typed `services` collection for the homepage "What I Can Do" accordion.
- Added public rendering for all project gallery screenshots. No gallery images are hidden after the first few uploads.
- Added cover alt text and screenshot alt text support for better accessibility.
- Improved project detail pages with a back link, complete screenshot stack, conditional sections, clearer meta row and stronger CTA layout.
- Improved certificate handling: image, PDF/file and verification link can all be displayed.
- Added certificate library to the Resources page.
- Added document external URL support in addition to file uploads.
- Improved homepage UX with hero CTAs, resource/resume section, native accessible accordion, empty states and better mobile behavior.
- Improved admin CMS config with clearer labels, sortable fields and upload fields for profile, projects, screenshots, certificates, documents, skills, services and posts.
- Added safer SEO/canonical metadata and skip-link accessibility.
- Added mobile navigation overflow handling.

## Manual checks completed

- Confirmed all required source files exist.
- Confirmed Decap CMS YAML config parses successfully.
- Confirmed project page no longer uses a limited gallery slice.
- Confirmed content schema includes profile, services, projects, skills, certificates, documents and posts.

## Not completed in this environment

- `npm install` timed out in the sandbox, so a full `npm run build` could not be executed here. Run `npm install` and `npm run build` locally or on Netlify after downloading.
