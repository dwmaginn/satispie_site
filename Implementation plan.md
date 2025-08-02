Thanks — I’ll create a full execution-ready Markdown playbook to rebuild satispie.com using the Astro starter template, migrating existing site content (excluding the new-site notice), and deploying via Git to IONOS. CMS placeholders will be added using best-practice recommendations.

I’ll return shortly with a structured, phased implementation guide your team can execute step-by-step.


## Phase 0 – Discovery & Asset Collection

### Batch 0.1 – Site Structure Mapping

* **Goal:** Identify all existing pages on satispie.com and define their new Astro routing paths.
* **Step-by-Step Tasks:**

  1. **Crawl Current Site:** Use a site crawler or manual review to list every unique page URL on **satispie.com** (e.g. Home, Branded Products, Tips & Techniques, Contact Us, Apply Today). Include any hidden pages (check sitemap and navigation) and note if a custom 404 page exists (the old site likely lacked a proper one).
  2. **Map to Astro Routes:** For each URL, determine the corresponding Astro page file and route. For example, map the homepage “/” to `src/pages/index.astro`, “/branded-products” to `src/pages/branded-products.astro`, etc. Ensure **clean, SEO-friendly** file names (all lowercase, use dashes for multi-word like “tips-and-techniques.astro”).
  3. **Document Page Purpose:** Record each page’s purpose and content summary. Note any special functionality (e.g. “Contact Us” has a contact form, “Apply Today” has a job form, “Tips & Techniques” links to PDFs). Also mark which pages will share common layout elements (header, footer) or templates.
  4. **Exclude Obsolete Notes:** Specifically mark content to **omit** or update – e.g. the homepage’s “under site renovations” notice will be dropped in the new site. Plan to replace or remove any outdated announcements.
  5. **Review External Links:** Check for any external links (e.g. social media, PDFs) on each page so we can carry them over.
  6. **Finalize Site Map Document:** Compile the above findings into a site map document (could be a Markdown or Excel table) listing Old URL → New Astro Path, page title, and notes. Store this in the project (e.g. `docs/site-map.md`).
  7. **Commit Mapping** (`docs: add site map and page routing plan`) to the repository as documentation for reference.
* **Deliverables:**

  * Complete **Site Map** document mapping all existing pages to new Astro page files.
  * List of all page URLs discovered (including any currently orphaned or “coming soon” pages like Tips & Techniques).
  * Identification of content to update or omit (e.g. remove the renovation notice).
* **Acceptance Criteria:**

  * Every public page from satispie.com is accounted for and assigned a new route.
  * Stakeholders confirm no page is missing or extra.
  * The team understands what content/features each page should have.
* **Estimated Effort (h):** 2 hours
* **Dependencies / Prereqs:** None (access to live site **satispie.com**).

### Batch 0.2 – Brand Palette Extraction

* **Goal:** Capture SatisPie’s brand colors and define them for use in the new site’s styles (Tailwind theme and/or CSS variables).
* **Step-by-Step Tasks:**

  1. **Identify Brand Colors:** Analyze the existing site and any brand assets (logo, product packaging, etc.) for key colors. Use dev tools or color picker on logos/images to extract HEX values. For example, determine if SatisPie has a signature color (perhaps a pie-crust brown, fruit-pie red, etc.) and any secondary/accent colors.
  2. **List Colors with Hex & RGB:** Create a list of these colors with their HEX codes and RGB values. E.g. Primary Orange – `#D35400` (211,84,0). Include neutrals if specific (maybe the site uses a particular gray for backgrounds, etc.).
  3. **Name the Tokens:** Assign custom names for each (e.g. `--sp-primary`, `--sp-secondary`, `--sp-accent`, etc.) following a consistent naming convention. Use a prefix like `sp` to avoid conflicts.
  4. **Define CSS Custom Properties:** In the Astro project, open the global stylesheet (e.g. `src/assets/styles/global.scss` or similar). Define the CSS variables for each color on the `:root`. For example:

     ```scss
     :root {
       --sp-primary: #D35400;
       --sp-secondary: #4CAF50;
       --sp-neutral: #333333;
     }
     ```

     This allows easy reuse in CSS.
  5. **Configure Tailwind (if in use):** Since the template uses Tailwind CSS, also inject these colors into **tailwind.config.cjs**. Under the `theme.extend.colors` section, add entries for the custom colors, using the HEX values. For example:

     ```js
     // tailwind.config.cjs
     module.exports = {
       theme: {
         extend: {
           colors: {
             'sp-primary': '#D35400',
             'sp-secondary': '#4CAF50',
             'sp-neutral': '#333333'
           }
         }
       }
     };
     ```

     This will generate utility classes like `bg-sp-primary` and `text-sp-primary`.
  6. **Test Colors:** Create a quick test page or use Storybook (if available) to apply the new classes/variables and visually verify they match the original brand look. E.g. compare a header or button color against the old site. Adjust values if needed for contrast or accuracy.
  7. **Commit Changes** (`feat: add brand color tokens to theme`) once colors are defined.
* **Deliverables:**

  * Documented **Color Palette** with HEX/RGB values and token names (in a `docs/design.md` or similar).
  * Updated `tailwind.config.cjs` and/or CSS files reflecting the new brand colors.
  * (If applicable) Screenshots or a snippet showing the new colors applied, for design approval.
* **Acceptance Criteria:**

  * All primary brand colors are captured and available in the codebase as variables/utilities.
  * New site’s colors visually match SatisPie’s branding (verified by comparing with the current site/logo).
  * Color contrast meets accessibility standards (to be double-checked in Phase 4).
* **Estimated Effort (h):** 2 hours
* **Dependencies / Prereqs:** Access to current site’s branding (logo files, style guide if any) or at least the live site for sampling.

### Batch 0.3 – Image & Asset Inventory

* **Goal:** Gather **all images and media assets** from the current site for use in the rebuild, with proper filenames, formats, and alt text.
* **Step-by-Step Tasks:**

  1. **Collect Site Images:** Scrape or manually download every image used on satispie.com. This includes logos, product photos (e.g. pie images on the “Branded Products” page), icons (like any social icons or the print icon on pages), and background images if any. Also include any PDF or document assets linked (e.g. the “SatisPie 101/102” PDFs on the Tips & Techniques page).
  2. **Organize & Rename:** For each asset, choose a clear, descriptive filename for the new site. For example: `logo.png` (company logo), `pies-hero.jpg` (homepage hero image if exists), `apple-pie.jpg` (specific product image), `baking-fundamentals.pdf` (the SatisPie 101 PDF), etc. Maintain file extensions appropriate to content (use **.webp** or **.avif** for large photos if optimization is desired, PNG for graphics with transparency, SVG if any icons/logos are vector). Ensure names are lowercase and use hyphens, no spaces.
  3. **Optimize Formats & Resolutions:** Determine the optimal format and size for each image in the Astro site. For large photos, consider providing multiple resolutions for responsive loading (e.g. a 2x retina size if needed). Convert images to modern formats if possible (e.g., JPEG -> WEBP for better compression), while keeping quality high. For now, prepare both original and optimized versions if uncertain, to test quality.
  4. **Alt Text Drafting:** Write descriptive **alt text** for each image, reflecting its content and context. E.g. alt for a product image: “Blueberry pie in packaging”, for the logo: “SatisPie LLC company logo”. Use concise but meaningful descriptions for accessibility. If an image is purely decorative, mark alt as empty (`""`) or use `aria-hidden` as appropriate, but generally provide alt for content images. List these alt texts alongside the filenames in an asset inventory document for review.
  5. **Store in Repository:** Add the images and PDFs to the Astro project’s static assets folder (likely `src/assets/images` for images to process or `public/` for static files like PDFs). Keep a logical folder structure if many assets (e.g. `public/images/products/…`, `public/docs/…`). Place the logo in a central location (e.g. `src/assets/images/logo.png`) for easy reference.
  6. **Verify Completeness:** Cross-check each page from Batch 0.1 against this asset list to ensure every visual element is covered. (For example, the “Branded Products” page had multiple product images – ensure none are missing.) If the old site references any external media (like a YouTube video or a Facebook feed), note those for potential embedding or linking instead.
  7. **Commit Assets** (`chore: add all site images & docs`) to the repo. (Large binary files can be handled via Git LFS if needed, but these images/docs should be fine to commit given their likely small size.)
* **Deliverables:**

  * **Asset Inventory** list (filenames → description/alt text, source location, file format).
  * All image files and PDFs from the old site, imported into the new project folder.
  * Optimized versions of images ready for web (compressed without visible quality loss).
* **Acceptance Criteria:**

  * No visual asset from the old site is missing. The team has all logos, photos, and downloads needed for the new site.
  * Each asset has an appropriate filename and alt text drafted.
  * Images load correctly when tested in the dev server, indicating they’re in the proper location.
* **Estimated Effort (h):** 3 hours
* **Dependencies / Prereqs:** Completion of site crawl (Batch 0.1) to know what pages/assets exist. Access to the live site for downloading images/PDFs.

## Phase 1 – Repository & Environment Setup

### Batch 1.1 – Initialize New Astro Repository

* **Goal:** Create the new GitHub repo **dwmaginn/satipie\_site** and populate it with the provided Astro starter code (from `website-main.zip`), establishing the project’s version control baseline.
* **Step-by-Step Tasks:**

  1. **Create GitHub Repo:** On GitHub, create a new repository named **dwmaginn/satipie\_site** (public or private as required). Initialize it with a README (you will replace this later) and appropriate .gitignore (Node). Alternatively, use the GitHub CLI: `gh repo create dwmaginn/satipie_site`.
  2. **Import Template Code:** Unzip the provided Astro starter (`website-main/`) locally. This should be an Astro project scaffold (likely with `package.json`, `src/` directory, etc.). Add all these files to the new repo. Make sure the root of the repo matches the Astro project root (e.g. `src/` folder is at repository root).
  3. **Initial Commit:** Commit the imported code as the initial commit (e.g., `chore: initial Astro template import`). Ensure you preserve commit history from the template if desired (not required here since a zip was provided, not a git clone).
  4. **Repository Settings:** On GitHub, verify default branch is “main” (rename from master if needed). Enable branch protection rules or required PR reviews if the workflow demands. Add a project description and topics (e.g. “Astro”, “website”, “SatisPie”).
  5. **Node & PNPM Setup:** In the project, set the Node.js engine to **20 LTS** (Latest LTS; Node 20 is current LTS). For example, in `package.json` add:

     ```json
     "engines": { "node": ">=20.0.0", "pnpm": ">=8.0.0" }
     ```

     Also create an `.nvmrc` file containing `20` to help developers using NVM. This ensures everyone runs the correct Node version.
  6. **Install Dependencies:** Run `pnpm install` locally to ensure the lockfile (pnpm-lock.yaml) is up to date and all packages (Astro, etc.) are ready. This verifies the template code is working on Node 20. If any dependency issues occur (e.g. deprecated packages), note them for upgrade in later steps.
  7. **Verify Dev Server:** Quickly test `pnpm run dev` to confirm the template site runs on localhost without errors. This ensures the base setup is sound before proceeding. Expect a generic Astro welcome page or template content at this stage.
  8. **Push to GitHub:** Push the main branch to GitHub (`git push -u origin main`). Confirm the repository is now populated with the template files on GitHub.
* **Deliverables:**

  * New **GitHub repository** dwmaginn/satipie\_site containing the Astro starter code.
  * Initial commit in git history (with Conventional Commit message) for the template import.
  * Updated `package.json` (with engine constraints) and `.nvmrc` for Node 20.
* **Acceptance Criteria:**

  * Repo is accessible and contains all expected files from the Astro template.
  * Project builds and runs the starter site locally (proving the environment is correctly set up).
  * Team members can clone the repo and start the dev server with no issues (Node 20 and PNPM 8 assumed).
* **Estimated Effort (h):** 2 hours
* **Dependencies / Prereqs:** Astro template zip file (website-main) provided; GitHub account permissions to create repo.

### Batch 1.2 – Template Branding Cleanup & Config

* **Goal:** Remove or replace boilerplate branding from the template and configure environment variables and project settings specific to SatisPie. This aligns the starter kit with our project’s identity and ensures consistent configuration.
* **Step-by-Step Tasks:**

  1. **Update Project Metadata:** Open `package.json` and update fields like `"name"`, `"description"`, and author info to reflect SatisPie. For example, `"name": "satispie-site"` and a short description. This will also impact the default site title in some Astro setups.
  2. **Clean Starter Branding:** Identify any placeholder logos, icons, or text from the Astro starter (often starters have their own name or dummy content). Remove or replace them with neutral placeholders for now. For instance, if there’s an Astro logo in `public/` or a favicon, prepare to replace it with SatisPie’s logo (from Phase 0 assets) or a temporary blank. Remove any references to the starter project’s name in headers, etc. (e.g. if the template nav says “My Astro Site”, change to “SatisPie” or leave blank pending real content).
  3. **Environment Variables Setup:** If the site will use environment variables (e.g. for forms or API keys), set up the mechanism now. Create a `.env.example` file at the root, listing keys like `SITE_URL=` (for the production URL), and any other variables we anticipate (e.g. `FORM_ENDPOINT=` if using an email service, or `ANALYTICS_ID=` if Google Analytics in future). No sensitive values here, just placeholders and documentation. Add `.env` to `.gitignore` to prevent committing actual secrets.
  4. **Astro Config Verification:** Open `astro.config.mjs` (or `.cjs` depending on template). Ensure the base URL or site property is set (some Astro configs use `site: "https://satispie.com"` for RSS or sitemap generation). If not present, consider adding it now using an environment variable or a placeholder. Also set the `outDir` if needed (default is `dist`).
  5. **Set Astro Version & Integrations:** Check Astro version in `package.json` dependencies (e.g. `"astro": "^3.x"` or similar – if it’s not the latest Astro 5, plan to update in a later phase or keep it stable for now). Note any integrations (Tailwind, etc.) are correctly listed. If any peer dependency warnings came up in Batch 1.1’s install, resolve them now (e.g. ensure `@astrojs/tailwind` is configured if needed).
  6. **Configure Tailwind (if needed):** Confirm Tailwind CSS is working with Astro. The template likely has Tailwind set up. Ensure `astro.config.mjs` includes the Tailwind integration (e.g. `integrations: [tailwind()]`). If environment-specific settings are required (like different base paths), incorporate those now.
  7. **Run Linter/Formatter:** If the template includes ESLint or Prettier config, run a lint/format (`pnpm run lint` if available) to ensure code style passes. Fix any immediate issues flagged (like unused vars from removed branding). This keeps the repo clean from the start.
  8. **Commit Changes:** Commit as `chore: configure project settings and remove boilerplate`. This commit should capture changes to config files, .env.example, and removal of starter assets. Use a Conventional Commit prefix (`chore` since mainly config changes).
* **Deliverables:**

  * Cleaned-up project files free of irrelevant starter content (no placeholder logos or dummy text remaining).
  * `.env.example` in the repo with anticipated environment vars and instructions.
  * Updated configuration files (`package.json`, `astro.config.mjs`, Tailwind config) reflecting project specifics.
* **Acceptance Criteria:**

  * Starting the site now shows either a blank slate or minimal content without any old template branding (confirm that the default page no longer says “Astro Starter” or similar).
  * All configuration is ready for development: developers can create a `.env` (by copying `.env.example`) if needed and run the site with correct settings.
  * No runtime errors or obvious misconfigurations when running `pnpm dev` after these changes.
* **Estimated Effort (h):** 2 hours
* **Dependencies / Prereqs:** Batch 1.1 completed (repo initialized with template). Some outputs from Phase 0 (like the actual logo image) will be integrated here if available.

### Batch 1.3 – Dev Environment Documentation

* **Goal:** Document how to run, build, and develop the project, ensuring the team has a reference for common commands and tools (Node, PNPM, Astro versions, etc.).
* **Step-by-Step Tasks:**

  1. **Update README.md:** Replace the template’s README content with project-specific documentation. At minimum, include:

     * **Project Overview:** One-liner about SatisPie site and Astro.
     * **Tech Stack:** List Astro, Node 20, PNPM 8, Tailwind CSS, etc., with links to official docs (e.g. \[Astro Docs], \[Node.js] official site, \[PNPM] docs). Mention Astro version (e.g. Astro v5) and any notable integrations.
     * **Local Setup Instructions:** Step-by-step to get started – e.g. “Clone the repo, run `pnpm install` (PNPM v8) to install dependencies, then `pnpm run dev` to start the dev server at localhost:3000.” Include commands and expected outcomes.
     * **Scripts Reference:** Document the key package scripts: `pnpm run dev` (for live reload server), `pnpm run build` (to build production files), `pnpm run preview` (to preview the build locally), and any others (like `pnpm run astro ...` if Astro CLI used). If tests or lint scripts exist, list those too.
     * **Project Structure:** Briefly outline the repo structure (e.g. “Astro components in `src/components`, pages in `src/pages`, static assets in `public/` or `src/assets` etc.) so new developers know where to find things.
     * **Contributing/Workflow:** Note that we use Conventional Commits for commit messages (e.g. “feat: …”, “fix: …”) and perhaps that work is done via feature branches and PRs. Mention any code style (Prettier, ESLint) and how to run them if applicable.
     * **Tools & Versions:** List Node 20 LTS and PNPM 8 explicitly. Possibly mention how to install PNPM (`npm install -g pnpm` or via corepack). This addresses environment assumptions.
  2. **Include Links:** Where possible, link to official documentation for tools. For example, link “Astro” to the Astro docs site, “PNPM” to PNPM’s site, “Tailwind CSS” to its docs, etc., to help developers find more info. Ensure these appear as markdown links (the DeepResearch citations will render as footnotes if included).
  3. **Add Badge/Shields (Optional):** If desired, add status badges at the top of README (like Node version, license, build status once CI is set up in Phase 6). This is optional polish.
  4. **Project Board/Issues (Optional):** If the team uses a project board or issue tracker, mention it in README (e.g., “See GitHub Projects for roadmap”). This is more for knowledge transfer.
  5. **Verify Clarity:** Have a team member not yet involved try to follow the README setup instructions on a fresh machine. If they can get the site running using just the README, it’s clear enough. Adjust wording if any confusion.
  6. **Commit Documentation:** Commit as `docs: update README with setup and usage`. Ensure no sensitive info is included (the example env should not contain real secrets).
* **Deliverables:**

  * **README.md** updated with comprehensive setup and development instructions.
  * Links to documentation for key tools (Node, PNPM, Astro, etc.) included in the text for convenience.
  * Possibly additional docs if needed (but likely just the README for now).
* **Acceptance Criteria:**

  * A new developer can read the README and get the project running and understand the basic structure without additional help.
  * README reflects the current state of the project (no references to template’s old info, correct commands that actually exist in package.json).
  * The documentation uses **US English**, is concise and clear, and free of placeholder text.
* **Estimated Effort (h):** 2 hours
* **Dependencies / Prereqs:** Completion of Batches 1.1 and 1.2 (so that all commands and configs are finalized to document). No code dependencies, purely documentation.

## Phase 2 – Global Theming & Layout

### Batch 2.1 – Implement Global Styles (Colors & Fonts)

* **Goal:** Apply SatisPie’s branding to the global styles – including color tokens (from Phase 0) and typography – so the entire site framework matches the company’s identity.
* **Step-by-Step Tasks:**

  1. **Integrate Color Tokens:** Using the color palette from Batch 0.2, update the site’s CSS/SCSS and Tailwind config so that these colors are used globally. For Tailwind, ensure the custom colors (e.g. `sp-primary`, etc.) are now being utilized for backgrounds, text, buttons, etc., instead of any default template colors. For example, set the site’s primary accent (maybe for links or buttons) to use `text-sp-primary` or `bg-sp-primary` as appropriate. In any existing CSS files, replace hardcoded color values from the template with the new CSS variables or Tailwind classes.
  2. **Font Family Setup:** Determine the fonts used on the current site. Check the site’s CSS or design; if not specified, decide on fonts that closely match or improve the design. (Perhaps the site used a web-safe font or a Google Font). If a Google Font is needed (e.g. a friendly serif for headings, and a clean sans-serif for body), add it. Use Astro’s approach to include Google Fonts – either add a `<link>` in the `<head>` (in Astro’s root layout) or import via CSS. For example, to load “Open Sans” and “Merriweather”, link to Google Fonts CSS. If the current site just used generic fonts, consider selecting an appropriate modern font (best practice, but confirm with stakeholders).
  3. **Self-Host or CDN:** Decide whether to self-host fonts or use Google CDN. Best practice for performance is often to self-host if licensing allows. If using Google Fonts, you can start with CDN for simplicity and later consider downloading the `.woff2` files for offline hosting. Document whichever approach in the README.
  4. **Apply Fonts in CSS:** Update the base styles (possibly in `src/assets/styles/global.scss` or Tailwind config `theme.fontFamily`). For instance, set Tailwind `fontFamily` to include the chosen fonts:

     ```js
     // tailwind.config.cjs
     theme: {
       extend: {
         fontFamily: {
           sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'], 
           serif: ['Merriweather', 'serif']
         }
       }
     }
     ```

     or use CSS: `:root { --font-main: 'Open Sans', sans-serif; }` and reference it. Replace any default font from the template (if it had one).
  5. **Global Elements Styling:** Ensure basic HTML elements reflect the brand styles. For example, headings (<h1>, <h2> etc.) might use a specific color or font weight consistent with SatisPie’s style. Set these in a base stylesheet or Tailwind layer. Also, set the body background or container max-width if the design calls for it (perhaps the site is center-aligned at a certain width; define that via Tailwind’s container or custom CSS).
  6. **Test in Browser:** Run `pnpm dev` and inspect the site. The placeholder pages (even if mostly empty content) should now show global styling changes – e.g., the default text font should be the new one, links or buttons (if any placeholder) should reflect the new color. Check that the color contrast is okay (e.g., primary text on white background meets AA contrast). If not, adjust shades slightly (darken text or lighten background).
  7. **Commit Changes:** Commit as `feat: add brand fonts and colors to global styles`. This will include changes to config and CSS files.
* **Deliverables:**

  * Tailwind configuration updated with SatisPie’s fonts and color palette.
  * Global CSS/SCSS with new font families and any custom base styling (e.g., body margin resets, etc.).
  * The site’s typography and color scheme in the running dev build now resembles the desired brand look.
* **Acceptance Criteria:**

  * Typography: The font(s) on the new site match the company style (or an approved improvement) and render correctly (no FOUT issues).
  * Colors: All generic or template colors are replaced by SatisPie colors. For example, if the template had a blue accent and SatisPie’s theme is orange, the blue should be gone.
  * Basic elements (background, text, headings, links) meet design and contrast requirements (e.g. text is readable on background, links are distinct).
* **Estimated Effort (h):** 3 hours
* **Dependencies / Prereqs:** Brand palette from Phase 0, any design cues from existing site. Template cleanup from Phase 1 should be done so we’re not theming elements that will be removed.

### Batch 2.2 – Layout Components (Header, Footer & Meta)

* **Goal:** Create the global layout structure – including the site header with navigation menu, the footer with company info – and apply it across all pages, along with default metadata for consistency.
* **Step-by-Step Tasks:**

  1. **Design Header Navigation:** Based on the site map (Phase 0), design the site’s main navigation menu. Identify the primary pages to link (likely: Home, Branded Products, Tips & Techniques, Contact Us, Apply Today). Decide on the order and exact labeling (use the same names from the current site unless a change is desired). Also consider if a logo should appear in the header that links to Home.
  2. **Implement Header Component:** In `src/components/` or `src/layouts/`, create a new component for the header (e.g. `Header.astro` or as part of a main `Layout.astro`). Use semantic HTML5: a `<header>` element containing a `<nav>`. Inside, include the logo (probably an `<img>` for the SatisPie logo from assets with `alt="SatisPie"` or alt text as company name) and the navigation links. For accessibility, structure the nav as a list of links or proper markup. If the design is a horizontal menu, that’s fine; if responsive (for mobile), consider adding a burger menu (could be a simple Alpine.js or Astro island component added later in Phase 4 if needed).
  3. **Styling the Header:** Use Tailwind utilities or CSS to style the header. Likely a simple bar at top. Apply brand colors – e.g., if SatisPie’s primary color is used for header background or link hover states. Ensure the logo image is sized appropriately (maybe a max-height in CSS). Add padding/margins for a clean layout.
  4. **Implement Footer Component:** Create `Footer.astro` component. Include company information as on the current site: e.g., address, phone, email (from the “Contact Us Today!” snippet that appears on every page of the old site). Also include any copyright notice or small print if needed. The current site’s pages had a footer with “Print | Sitemap | Login” – we likely omit the extraneous “Login/Edit page” (those were for the old CMS). Instead, possibly include a link to a sitemap page or privacy policy if needed. (At minimum, we can include a “Sitemap” link pointing to `sitemap.xml` or create a simple sitemap page listing links for accessibility, up to stakeholders).
  5. **Footer Styling:** Style the footer in line with brand. Possibly use a darker background (like a dark version of primary color or neutral) with light text. Ensure address and contact text is easily readable (e.g., white on dark). Include appropriate `<footer>` HTML tag and consider schema.org markup for organization info (optional: wrapping address in `<address>` tag and using `itemprop` attributes for LocalBusiness – can add in Phase 3 or 4 if doing structured data).
  6. **Global Layout Integration:** Create a main layout component (e.g. `src/layouts/BaseLayout.astro`) that wraps page content with the header and footer. In Astro, this usually looks like:

     ```astro
     --- 
     import Header from '../components/Header.astro';
     import Footer from '../components/Footer.astro';
     const { title="SatisPie", description="...", ... } = Astro.props;
     ---
     <html lang="en">
       <head>
         <title>{title} – SatisPie</title>
         <meta charset="UTF-8" />
         <meta name="description" content={description} />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <!-- Add default social meta tags (og:image, etc.) if desired -->
         <!-- Link Google Fonts if not already globally included -->
       </head>
       <body class="min-h-screen flex flex-col">
         <Header />
         <main class="flex-grow"> <slot /> </main>
         <Footer />
       </body>
     </html>
     ```

     This establishes a default HTML structure. The `<slot />` will be where each page’s content goes. We add some classes (e.g. `flex-grow` so footer pushes to bottom).
  7. **Meta Tags & SEO Defaults:** In the layout’s `<head>`, include any global meta tags that should be on all pages. E.g., `<meta name="author" content="SatisPie, LLC" />`, default Open Graph image (like company logo for sharing if no page-specific image). If a favicon is available, link it here (use the favicon from assets or generate one). Also add `<link rel="icon" href="/favicon.ico" />` or appropriate modern formats (`/favicon.svg` if using an SVG logo). Use the company name in the `<title>` for consistency. We set it to `{title} – SatisPie` so individual pages can pass a title prop.
  8. **Apply Layout to Pages:** Modify the template’s existing pages (if any default index.astro) to use this layout. In Astro, that means adding frontmatter:

     ```astro
     ---
     import BaseLayout from '../layouts/BaseLayout.astro';
     export const prerender = true; // since this is a static site
     const pageTitle = "Home";
     ---
     <BaseLayout title={pageTitle} description="Welcome to SatisPie...">
       <!-- page content will go here -->
     </BaseLayout>
     ```

     Ensure each existing page (or stub page) now wraps content in `<BaseLayout>`. For now, pages might be mostly empty or have placeholder text – that’s fine, we’re focusing on layout.
  9. **Responsive Check:** Test the header and footer on different screen sizes (shrink the browser). If navigation doesn’t fit on mobile, consider adding a collapsible menu (maybe leave a TODO for Phase 4 interactive enhancements). Ensure the layout is fluid (Tailwind’s built-in responsiveness should handle text wrapping; if not, implement a simple mobile menu now or at least make the layout not break).
  10. **Commit Changes:** `feat: add header & footer layout components`.
* **Deliverables:**

  * `Header.astro` and `Footer.astro` components reflecting the site’s navigation and info.
  * `BaseLayout.astro` (or similar) that includes the header, footer, and sets up HTML head metadata.
  * Updated page files using the new layout.
* **Acceptance Criteria:**

  * All pages now consistently display the header at top and footer at bottom in the dev environment.
  * Navigation links correspond to the pages outlined in Phase 0, and clicking them in dev mode goes to the correct page (even if content is placeholder, the routing works).
  * The site has a cohesive frame: the header and footer match SatisPie branding and present key info (logo, menu, contact info) just like or better than the old site.
  * Basic SEO meta tags (title, description) are in place, albeit description might be generic placeholder for now (to be refined per page in Phase 3).
* **Estimated Effort (h):** 4 hours
* **Dependencies / Prereqs:** Phase 0’s site map (for menu items) and asset collection (logo image). Phase 2.1 (colors & fonts) should be done or in progress to properly style header/footer.

## Phase 3 – Page-by-Page Content Migration

### Batch 3.1 – Home Page Migration (`index.astro`)

* **Goal:** Recreate the content of the **Home** page on the new Astro site, using the brand-new layout and without outdated notices. This establishes the main landing page for satispie.com.
* **Step-by-Step Tasks:**

  1. **Gather Home Content:** Refer to the text from satispie.com’s home page (Phase 0 notes). Identify the sections and copy to be moved. The old home had a welcome message, some paragraphs about new plant, private label products, seasonal notes, etc. Copy all relevant text. **Omit** the “currently under site renovations” line, as discussed. Ensure the rest flows well without it (you may need to tweak the intro sentence to remove the context of “we are busy in Rochester” if needed).
  2. **Create Home Page File:** Open or create `src/pages/index.astro`. In the frontmatter, set the page title and meta description appropriate for the homepage. For example:

     ```astro
     ---
     import BaseLayout from '../layouts/BaseLayout.astro';
     export const prerender = true;
     const pageTitle = "Home";
     const pageDescription = "SatisPie – Pre-baked pies, waffles, and pancakes. Quality desserts for retail and foodservice.";
     ---
     ```

     Write a concise meta description that captures the business (if the old site had one, use it or improve it).
  3. **Structure Content with HTML:** In the template section of `index.astro`, lay out the content semantically. Possibly break content into sections with subheadings:

     * Start with a hero section or welcome: e.g., `<h1>Welcome to SatisPie, LLC!</h1>` (as in original, but we might remove the exclamation if not needed).
     * Then paragraphs of text. Each distinct topic from old site can be its own `<p>` or grouped in `<section><h2>...</h2><p>...</p></section>` if appropriate. For instance, the bit about private label products could be under a sub-heading like “Private Label Solutions”. The seasonal note about pies for fall could be another section. Use judgement to make the page more readable (the old page was basically a dump of text – we can improve by splitting into logical sections).
     * If any content looks like a list, use `<ul>` or `<ol>` accordingly. (The home text seems mostly paragraphs, though mentions of “Fruit, Custards and pie shells all available...” might be bullet list of product categories – decide if listing them would improve readability).
  4. **Insert Images if Any:** Check if the home page had any images (the old site might have had none visible besides the header logo). If there was a hero image or decorative images, place them appropriately. For example, if we have a nice shot of pies or the facility, we could include an `<img src={...} alt="Delicious pies" />` at the top or bottom for visual appeal. Use a responsive approach (Tailwind classes like `max-w-full h-auto`). Only add images if relevant – do not overcrowd if content is mostly text.
  5. **Apply Styling:** Use appropriate Tailwind classes to style the content consistently. For instance, ensure `<h1>` uses a heading style (maybe Tailwind `text-3xl font-bold text-center mt-4` or such), paragraphs have margin bottoms, etc. If the content is long, maybe center it in a container (Tailwind’s `mx-auto max-w-3xl` for example) to avoid very long line length on large screens. Maintain the brand tone – e.g. if primary color or accent can highlight something, do so sparingly.
  6. **Embed Links:** If the home page text references other pages or external info, convert those to hyperlinks. E.g., if it says “contact us now”, link that text to the Contact page. If “fall pie season” should link to Contact or a product page, consider it. Also, if any external references (maybe they mentioned Wal-Mart or similar in context?), link out if it adds value.
  7. **Accessibility:** Add any needed ARIA attributes if there’s dynamic content (likely none on home). Ensure images have alt. Use proper heading order (start with one <h1>, then <h2> for sub-sections).
  8. **Review & Refine Copy:** Read through the migrated text on the new site. Check for any typos (e.g. “Fundementals” was misspelled on the old site in a PDF link; if that text appears, correct spelling to “Fundamentals”). Keep tone professional. Ensure no placeholder text remains; if any content was missing, either get it from stakeholder or mark as “Coming soon” clearly (though ideally avoid “coming soon” on a live site – better to provide the content or omit that section).
  9. **Commit Page:** Commit as `feat: migrate Home page content`.
* **Deliverables:**

  * `index.astro` page populated with the SatisPie Home content (all primary text sections from old site except the renovation note).
  * Proper meta title (“Home – SatisPie”) and a meta description included in the page.
  * Any images included for the home page placed in the page or layout.
* **Acceptance Criteria:**

  * The home page on the dev server displays all key information from the original satispie.com home, minus outdated content, and divided into a logical, user-friendly layout.
  * Text and headings are free of errors and styled appropriately (e.g. the welcome headline stands out, content is legible on all devices).
  * Links and navigation from the home page work (can click to other pages in header or within content if links added).
* **Estimated Effort (h):** 3 hours
* **Dependencies / Prereqs:** Phase 2 (layout, header/footer) should be completed so that this page gets wrapped correctly. Content sources from Phase 0 mapping.

### Batch 3.2 – “Branded Products” Page Migration

* **Goal:** Rebuild the **Branded Products** page, showcasing SatisPie’s product range and any relevant imagery or descriptions, as per the original site’s content.
* **Step-by-Step Tasks:**

  1. **Review Original Content:** From the site map/doc, retrieve the text of the Branded Products page. The old page listed the flavors of pies (Apple, Pumpkin, Pecan, etc.) and mentioned private label customization. It also had a heading “SatisPie Freezer Case Take & Bake” and possibly some images (maybe product images). Identify all textual content and its hierarchy (e.g., was “SatisPie Freezer Case Take & Bake” an <h1>? It looked like a section title).
  2. **Create Page File:** Make a new file at `src/pages/branded-products.astro`. Use the same layout approach:

     ```astro
     ---
     import BaseLayout from '../layouts/BaseLayout.astro';
     export const prerender = true;
     const pageTitle = "Branded Products";
     const pageDescription = "SatisPie branded take-and-bake frozen pies are available in a variety of flavors (Apple, Pumpkin, etc.), with private label options to suit your needs.";
     ---
     <BaseLayout title={pageTitle} description={pageDescription}>
       <!-- content -->
     </BaseLayout>
     ```

     Meta description crafted to summarize the offerings (for SEO).
  3. **Add Headings & Text:** Inside the layout, reconstruct the content. For example:

     ```astro
     <h1>SatisPie Branded Products</h1>
     <p>SatisPie Branded Take &amp; Bake products are available in the following flavors: Apple, Pumpkin, Pecan (Pre-Baked), Blueberry, Cherry, Peach, Apple Crumb, Triple Berry, and Sweet Potato.</p>
     <p>In addition to our own line, we offer <strong>Private Label</strong> products custom formulated to your specifications. It’s your product, in your packaging, made under SQF, HACCP &amp; GMP controls.</p>
     ```

     (The second sentence combines info from the home page’s private label mention and product page – ensure consistency. Actually, the text “Private Label products are custom formulated...” was on the Branded Products page, we use that as well.) Mark up any notable terms (like SQF, HACCP) in acronym tags with title attributes for clarity if desired (accessibility improvement).
  4. **Insert Product Images:** If Phase 0 asset inventory found images of pies or packaging related to these products, include them. Possibly create an image gallery or a simple grid of product shots with captions. For instance, if we have images for Apple Pie, Pumpkin Pie, etc., we could do:

     ```astro
     <div class="grid md:grid-cols-3 gap-4 my-6">
       <figure><img src="/images/apple-pie.jpg" alt="Apple Pie packaging"><figcaption>Apple Pie</figcaption></figure>
       ... (repeat for a few representative pies) ...
     </div>
     ```

     If no individual images were provided, perhaps use one good image of a pie or a freezer case as a hero image at top. Use judgement so the page isn’t just text.
  5. **Enhance Layout:** Use Tailwind to make the product list readable. A bullet list might be nice for flavors: instead of a run-on sentence, consider:

     ```astro
     <ul class="list-disc pl-5">
       <li>Apple</li>
       <li>Pumpkin</li>
       <li>Pecan (Pre-Baked)</li>
       ... etc ...
     </ul>
     ```

     This way it’s easier to scan the flavors. Follow it with the private label paragraph. Use `<strong>` or emphasis to highlight key concepts (like we did for Private Label).
  6. **Cross-link if appropriate:** If any flavor has a related “Tips & Techniques” (not likely), or if “Private Label” could link to a contact page or a dedicated page in future (no dedicated page now, but at least ensure users know to contact if interested). Possibly add a call-to-action link like “<a href="/contact-us">Contact us</a> to discuss private label opportunities.”
  7. **Check Consistency:** Ensure the heading structure fits within the overall site (Header component will provide site navigation above). Use one <h1> on this page (maybe “Branded Products” or the given heading “SatisPie Freezer Case Take & Bake” — since that phrasing was on old site, but to a new user “Branded Products” is clearer. We can incorporate the phrase in text or as a subtitle). Perhaps do:

     ```astro
     <h1>SatisPie Branded Take &amp; Bake Products</h1>
     <h2>Available Flavors</h2>
     <!-- then list or paragraph of flavors -->
     ```

     So that the SEO keyword “Branded Products” still appears (in title and description) but the on-page h1 is a bit more descriptive. That’s acceptable.
  8. **Meta Data:** The `pageDescription` we set covers SEO. Also ensure images have alt text as per asset inventory (which we have). If multiple images, ensure each `alt` is specific (no repetitive alt).
  9. **Test Page:** View it in browser via dev server. See that the flavors are listed, any images show properly (no broken links). Check responsive view (if we made a grid, see it stacks on mobile nicely).
  10. **Commit Page:** `feat: migrate Branded Products page content`.
* **Deliverables:**

  * `branded-products.astro` page with full content of the product offerings, including text and possibly images.
  * All product flavor names and the private label info present on the page.
  * Visual elements (images or structured lists) to make the content engaging.
* **Acceptance Criteria:**

  * The Branded Products page clearly lists all the pie flavors and emphasizes the availability of private label products, matching the original site’s info.
  * The content is well-formatted (bullet list or similar for easy reading) and styled consistently with site themes.
  * Any included images load correctly and have appropriate alt text.
  * Navigation to this page via header “Branded Products” works, and the page’s `<title>` is correct (e.g., “Branded Products – SatisPie”).
* **Estimated Effort (h):** 2 hours
* **Dependencies / Prereqs:** Completion of Phase 2 (for layout). Assets from Phase 0 (product images, if any). Home page migration (Batch 3.1) not strictly required but helpful as reference for style.

### Batch 3.3 – “Tips & Techniques” Resources Page Migration

* **Goal:** Recreate the **Tips & Techniques** page, including its introduction and the links to the “SatisPie University 101” and “102” PDF documents, ensuring these resources are accessible and downloadable on the new site.
* **Step-by-Step Tasks:**

  1. **Copy Content Structure:** From the old site, the Tips & Techniques page had a brief intro (“Coming soon will be tips and techniques…”), and then sections for “SatisPie 101 – Baking Fundamentals” and “SatisPie 102 – Baking Solutions” with descriptions and PDF download links. Plan to mirror this structure.
  2. **Create Page File:** `src/pages/tips-and-techniques.astro` with frontmatter:

     ```astro
     ---
     import BaseLayout from '../layouts/BaseLayout.astro';
     export const prerender = true;
     const pageTitle = "Tips & Techniques";
     const pageDescription = "Baking tips and techniques from SatisPie – downloadable guides for perfect pies, including fundamentals and solutions to common baking challenges.";
     ---
     <BaseLayout title={pageTitle} description={pageDescription}>
       <!-- content goes here -->
     </BaseLayout>
     ```

     The meta description summarizes what’s here (guides for baking).
  3. **Intro Text:** Start the page content with a heading and intro paragraph. For example:

     ```astro
     <h1>Tips &amp; Techniques</h1>
     <p>Here you’ll find tips and techniques for baking pies at home or improving the look of your pies if you’re an in-store baker. Explore our “SatisPie University” guides below for expert advice.</p>
     ```

     This incorporates the old “Coming soon…” text but rephrases it as current (since now the content is available). We remove “coming soon” phrasing because we are presumably delivering it now.
  4. **List PDF Resources:** Create a section for each guide. For example:

     ```astro
     <section class="mt-8">  
       <h2>SatisPie 101: Baking Fundamentals</h2>  
       <p>This document outlines essential fundamentals of baking with SatisPie, covering core techniques and methods to ensure consistently delicious results. Perfect for beginners and seasoned bakers looking to master the art of pie-making!</p>  
       <a href="/docs/baking-fundamentals.pdf" class="text-sp-primary font-semibold hover:underline" target="_blank" rel="noopener">📄 Download “Baking Fundamentals” (PDF, 389 KB)</a>  
     </section>
     ```

     Repeat similarly for “SatisPie 102: Baking Solutions”, adjusting the text (which we have from the old site snippet) and file name/size. Use an icon or emoji “📄” to indicate a document download (optional). The link should point to the PDF file we added to `public/docs` or similar (e.g., `/docs/satispie-101-fundamentals.pdf` if we renamed it). Make sure the `href` matches the actual file location in our project.
  5. **Ensure File Availability:** Verify that the PDFs from Phase 0 were placed in `public/docs` (or whichever folder) so that `/docs/baking-fundamentals.pdf` actually serves the file. If not already done, move the downloaded PDFs into the repo (e.g., `public/docs/baking-fundamentals.pdf` and `public/docs/baking-solutions.pdf`) and commit them. The filenames should ideally be simplified (the old had spaces and plus signs in URL). We’ve chosen descriptive names. Update the link href accordingly.
  6. **File Size Info:** Note the file sizes (we saw \~388.5 KB and \~137.3 KB from old site). You can round or mention them as \~389 KB and \~137 KB in the link text, as done above. This is a nice UX touch to inform users.
  7. **Styling:** Use Tailwind or basic classes to space things nicely (margin-top on sections, etc.). Possibly make the download links stand out (we used `font-semibold` and underline on hover). Ensure the layout is mobile-friendly (it will be, as it’s simple text and links).
  8. **Test Downloads:** Run `pnpm dev` and click the links to ensure the PDFs open/download properly. Also test in the build preview (`pnpm build && pnpm preview`) to double-check static file serving.
  9. **Accessibility & SEO:** Add `target="_blank" rel="noopener"` for PDF links so they open in a new tab (since it’s a non-web content, common practice). Ensure each section uses headings logically (h2 for SatisPie 101, etc., under the h1 of the page). Provide a brief but descriptive text in the link itself (we did “Download ‘Baking Fundamentals’”).
  10. **Commit Page:** `feat: add Tips & Techniques page with PDF resources`.
* **Deliverables:**

  * `tips-and-techniques.astro` with structured content (intro + two resource sections).
  * Two PDF files included in the public assets and linked (with proper naming).
  * Download links that allow users to get the Baking Fundamentals and Baking Solutions PDFs.
* **Acceptance Criteria:**

  * The Tips & Techniques page displays an introduction and two clearly labeled sections for the guides, matching the content and intent of the original page.
  * Users can click the links and the correct PDF opens or downloads, containing the original documents.
  * Content is free of “coming soon” phrasing – it should appear as a live resource hub, since we have the files ready.
  * All text matches the provided descriptions from the old site (with improved phrasing as needed) and any typos fixed. (Double-check “Fundamentals” spelling, which we corrected.)
* **Estimated Effort (h):** 3 hours
* **Dependencies / Prereqs:** Asset inventory (Batch 0.3) must have obtained the PDF files. Previous layout setup (Phase 2) needed for consistent styling.

### Batch 3.4 – Contact & Apply Pages (Forms) Migration

* **Goal:** Implement the **Contact Us** and **Apply Today** pages, including their form fields and content, setting up placeholders for form functionality to be completed in Phase 4.
* **Step-by-Step Tasks:**

  1. **Contact Us Page Structure:** Create `src/pages/contact-us.astro`. Set up frontmatter:

     ```astro
     ---
     import BaseLayout from '../layouts/BaseLayout.astro';
     export const prerender = true;
     const pageTitle = "Contact Us";
     const pageDescription = "Get in touch with SatisPie – our address, phone, email, and a contact form to reach our team for any inquiries about our products.";
     ---
     <BaseLayout title={pageTitle} description={pageDescription}>
       <!-- content -->
     </BaseLayout>
     ```

     Content should include the company’s contact info and a form. Use the old page as a guide: it had an intro “Interested in our products? Please fill out the form below\... we will get back 1-3 days.” Then the form fields (Name, Email, Message, Captcha note).
  2. **Add Contact Info:** At the top of the Contact page content, it’s wise to reiterate the direct contact info in text (for accessibility and users who may not use the form). For example:

     ```astro
     <h1>Contact Us</h1>
     <p>You can reach SatisPie at:</p>
     <address class="not-italic mb-4">
       SatisPie, LLC<br/>
       155 Balta Drive<br/>
       Rochester, NY 14623<br/>
       <strong>Phone:</strong> <a href="tel:+15854241240">(585) 424-1240</a><br/>
       <strong>Email:</strong> <a href="mailto:mm@satispie.com">mm@satispie.com</a>
     </address>
     <p>Interested in our products or have questions? Please fill out the form below. We will get back to you within 1–3 business days.</p>
     ```

     This covers the key info. We use `<address>` for semantic markup of contact info (and the anchor links for tel: and mailto: for convenience).
  3. **Build Contact Form (HTML):** Below the intro, create an HTML form element. At this stage, it will not have a working backend yet – we will integrate that in Phase 4 or deployment. For now, we can have it point to a placeholder or have no action. The form fields (from old site): Name (text), E-mail (email), Message (textarea), and Captcha. We will **not** implement the captcha (since we don’t have that service; we might drop it or replace with a simpler anti-spam later).

     ```astro
     <form id="contactForm" class="max-w-md" netlify>  <!-- note: netlify attr just placeholder if using Netlify form service, if not, remove later -->
       <div class="mb-4">
         <label for="name" class="block font-medium">Name:<span class="text-red-600">*</span></label>
         <input type="text" id="name" name="name" required class="w-full border px-2 py-1"/>
       </div>
       <div class="mb-4">
         <label for="email" class="block font-medium">E-mail address:<span class="text-red-600">*</span></label>
         <input type="email" id="email" name="email" required class="w-full border px-2 py-1"/>
       </div>
       <div class="mb-4">
         <label for="message" class="block font-medium">Message:<span class="text-red-600">*</span></label>
         <textarea id="message" name="message" rows="5" required class="w-full border px-2 py-1"></textarea>
       </div>
       <!-- No captcha for now: could include a hidden honeypot input for spam later -->
       <button type="submit" class="bg-sp-primary text-white font-semibold px-4 py-2 rounded">Send Message</button>
     </form>
     ```

     We use basic Tailwind classes for styling (border, padding). Mark required fields with an asterisk. The form has an `id` which we might use with client-side JS later. We could include a placeholder for success/error messages (e.g., a `<div id="formFeedback"></div>` to populate via JS after submission). Note: I included `netlify` attribute just in case we consider using Netlify form functionality — but since deploying on IONOS, likely not. We’ll decide on actual handling in Phase 4.
  4. **Apply Today Page Structure:** Now create `src/pages/apply-today.astro` with similar frontmatter:

     ```astro
     ---
     import BaseLayout from '../layouts/BaseLayout.astro';
     export const prerender = true;
     const pageTitle = "Apply Today";
     const pageDescription = "Interested in joining SatisPie? Fill out our employment application form and we will get back to you in 1–3 business days.";
     ---
     <BaseLayout title={pageTitle} description={pageDescription}>
       <!-- content -->
     </BaseLayout>
     ```

     The old “Apply Today” page was a job application form. It asked for Name, Address, Email, Telephone, and “What position are you interested in?”. We’ll replicate those fields. Also likely we should include a brief intro similar to contact.
  5. **Add Intro and Form for Apply:** Content example:

     ```astro
     <h1>Apply Today</h1>
     <p>Interested in applying for a position at SatisPie? Please fill out the form below and we will reach back to you in 1–3 business days.</p>
     <form id="applyForm" class="max-w-md">
       <div class="mb-3">
         <label for="appName" class="block font-medium">Name:<span class="text-red-600">*</span></label>
         <input type="text" id="appName" name="name" required class="w-full border px-2 py-1"/>
       </div>
       <div class="mb-3">
         <label for="address" class="block font-medium">Address:<span class="text-red-600">*</span></label>
         <input type="text" id="address" name="address" required class="w-full border px-2 py-1"/>
       </div>
       <div class="mb-3">
         <label for="appEmail" class="block font-medium">E-mail address:<span class="text-red-600">*</span></label>
         <input type="email" id="appEmail" name="email" required class="w-full border px-2 py-1"/>
       </div>
       <div class="mb-3">
         <label for="phone" class="block font-medium">Telephone/Fax:<span class="text-red-600">*</span></label>
         <input type="tel" id="phone" name="phone" required class="w-full border px-2 py-1"/>
       </div>
       <div class="mb-4">
         <label for="position" class="block font-medium">Position of Interest:<span class="text-red-600">*</span></label>
         <input type="text" id="position" name="position" required class="w-full border px-2 py-1"/>
       </div>
       <button type="submit" class="bg-sp-primary text-white font-semibold px-4 py-2 rounded">Submit Application</button>
     </form>
     ```

     We include all required fields. Note: The original might not have had a free-text “Message” field, just the fields above. We have not included a message/cover letter field, assuming the old form only asked those five items. If a cover letter is desired, we could add a textarea, but since not in original content, skip for now.
  6. **Consent Note:** The old forms had a GDPR consent sentence (“I hereby agree that my data entered... will be stored... can revoke consent any time.”). It’s wise to include this for compliance if needed. We can add a small note below the form or as part of form:

     ```astro
     <p class="text-sm text-gray-700 mt-2">By submitting this form, you agree that your data will be stored and processed for the purpose of contacting you regarding your inquiry. You can revoke this consent at any time.</p>
     ```

     (This covers the essence of that note in simpler wording). Include similarly on Contact form if desired. Mark not required to check for now, just an informational notice.
  7. **Styling & Consistency:** Ensure both forms have similar styling and layout. Use consistent classes (we did border and padding similarly). Both have max-width to not stretch on large screens.
  8. **No Captcha Implementation:** We drop the captcha field from both forms as we don’t have that integration. Instead, consider adding a hidden honeypot field for spam bots (e.g. an `<input type="text" name="company" class="hidden" tabindex="-1">` that real users won’t fill; we can check it in submission logic later to filter bots). Note this as a TODO for Phase 4 spam prevention.
  9. **Test Display:** Launch dev server and navigate to Contact Us and Apply Today pages. Ensure forms render properly, labels match inputs, required asterisks visible, etc. Try resizing screen – fields should stack (they are block-level, so fine).
  10. **Commit Pages:** `feat: migrate Contact and Apply pages with forms`.
* **Deliverables:**

  * `contact-us.astro` with contact info and a functional HTML form (pending backend).
  * `apply-today.astro` with a job application HTML form.
  * Both pages’ content matching the old site’s intent and fields, minus the captcha.
* **Acceptance Criteria:**

  * Contact Us page displays the company’s address, phone, email, and a contact form with Name/Email/Message fields.
  * Apply Today page displays an introduction and a job application form with Name/Address/Email/Phone/Position fields.
  * Both pages have proper titles and meta descriptions, and are accessible via the site’s navigation.
  * The forms do not yet send data anywhere, but the structure is in place for Phase 4 to implement functionality. There are no broken elements (like missing labels or misaligned inputs).
* **Estimated Effort (h):** 4 hours
* **Dependencies / Prereqs:** Phase 2 layout ready. Phase 0 content reference (to ensure all fields from original forms are captured). No backend required yet (that comes later).

### Batch 3.5 – 404 Page & Final SEO Touches

* **Goal:** Add a custom **404 Not Found** page and ensure all pages have appropriate SEO meta tags (title, description) and any structured data if needed, finalizing the content migration phase.
* **Step-by-Step Tasks:**

  1. **Create 404 Page:** In Astro, a static 404 page can be made at `src/pages/404.astro`. Write a user-friendly message and provide navigation options. For example:

     ```astro
     ---
     import BaseLayout from '../layouts/BaseLayout.astro';
     export const prerender = true;
     const pageTitle = "Page Not Found";
     ---
     <BaseLayout title={pageTitle} description="404 - Page not found">
       <h1>404: Page Not Found</h1>
       <p>Oops! The page you’re looking for doesn’t exist.</p>
       <p><a href="/">Go back to the Home page</a> or use the menu to find what you need.</p>
     </BaseLayout>
     ```

     Keep it simple and on-brand (you can add a bit of humor or a relevant image of a pie if desired to keep the user engaged). Ensure the link back to home is obvious.
  2. **Add 404 to Build:** Astro will automatically include this for static builds if named 404.astro. Just ensure `export const prerender = true;` is set so it generates a 404.html in output. We’ll also later configure the server (via .htaccess in Phase 6) to use this file for 404 errors.
  3. **SEO Meta Audit:** Go through each page (Home, Products, Tips, Contact, Apply) and verify the `<title>` being set via BaseLayout and the `description` for meta. Ensure each pageTitle variable is descriptive and unique. For example: Home (“Home – SatisPie”), Branded Products (“Branded Products – SatisPie”), etc., which should already be the case given how we structured BaseLayout titles. For meta descriptions, we added custom ones in each page’s frontmatter. Double-check their content: are they within \~160 characters and summarizing the page? Adjust wording if needed to avoid duplication or cut-off. E.g., ensure Home’s description mentions SatisPie’s business clearly (for search snippet), Contact’s mentions reaching out, etc.
  4. **Structured Data (Optional):** If time/allotted, implement basic Schema.org structured data for the organization and possibly location. For instance, on the Contact page, you could add a `<script type="application/ld+json">` with Organization schema:

     ```json
     {
       "@context": "https://schema.org",
       "@type": "FoodEstablishment",
       "name": "SatisPie, LLC",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "155 Balta Drive",
         "addressLocality": "Rochester",
         "addressRegion": "NY",
         "postalCode": "14623",
         "addressCountry": "US"
       },
       "telephone": "+1-585-424-1240",
       "email": "mm@satispie.com",
       "url": "https://satispie.com"
     }
     ```

     This can help SEO a bit. Place it in the Contact page or base layout (if we want it globally). This is optional but demonstrates thoroughness. Ensure to test it with Google’s Rich Results Test if added.
  5. **Link Check:** Manually click through the site in dev mode: nav links, any internal links we added (like on 404 page, or contact link on home page, etc.) to ensure none are broken or pointing to old URLs. Update any references if found (for example, if you wrote an internal link and missed the “.astro” naming, in Astro you should use just the path `/contact-us` not `.astro`). Fix any 404s now.
  6. **Spell & Grammar Check:** Do a final read of all pages. Correct any typos (like “Intrested” -> “Interested” which we already did, “Fundementals” -> “Fundamentals”). Ensure consistent capitalization (page headings likely Title Case vs content sentence case, etc. Keep it professional). Use US spelling.
  7. **Commit Final Content Updates:** Possibly do one commit for 404 page (`feat: add custom 404 page`) and one for any meta/SEO tweaks (`chore: refine meta descriptions and structured data`). Or combine if minor.
* **Deliverables:**

  * A `404.astro` page that will generate a friendly 404.html for users who hit a bad URL.
  * Confirmed unique titles and meta descriptions for each page.
  * (Optional) JSON-LD structured data embedded on relevant pages (contact/home).
  * Corrected content issues discovered in final audits.
* **Acceptance Criteria:**

  * Navigating to a non-existent route in the dev build shows the custom 404 page content (e.g. try `/nonexistent`, then manually loading 404.html in preview mode if needed).
  * All pages pass an SEO review: title tags reflect page content, meta descriptions present and not duplicated, all images have alt, and links have descriptive anchor text.
  * No broken internal links remain, and no glaring typos or grammatical errors in content.
  * The site’s content migration is essentially complete and ready for testing (Phase 5).
* **Estimated Effort (h):** 2 hours
* **Dependencies / Prereqs:** Completion of Batches 3.1–3.4 (all pages). Possibly input from stakeholders on descriptions, though we can proceed with best guesses and adjust later if needed.

*(With Phase 3 complete, we have rebuilt all content pages from satispie.com in Astro. Next, we focus on enhancing interactivity and quality.)*

## Phase 4 – Interactive & Accessibility Enhancements

### Batch 4.1 – Implement Form Handling & Interactive Elements

* **Goal:** Add client-side functionality for interactive components, primarily enabling the Contact and Apply forms to actually submit data (via an email or API), and implementing any other dynamic UI elements needed for a rich user experience.
* **Step-by-Step Tasks:**

  1. **Decide Form Submission Method:** Determine how the forms will send their data, given the static hosting on IONOS. Preferred approaches:

     * **Use a Form Backend Service:** e.g. **Formspree** or **Getform** that provides an endpoint to email form submissions. This requires adding a form `action` URL and possibly a hidden field or using their script.
     * **Use IONOS Email (Server Script):** If IONOS offers a built-in form-mail script (some shared hosts do), we could post to that. Alternatively, use an IONOS “Deploy Now” function (though likely not for static).
     * **Temporary Solution:** At minimum, use a `mailto:` link (not ideal) or simply collect form input and log to console (for dev/test). The best practice is a real submission.

     Given user preference for best practice, we’ll implement Formspree for now (quick and no server config). Sign up for a Formspree free tier and get an endpoint email. For example, an endpoint might be `https://formspree.io/f/maylpjwn` (just an example).
  2. **Implement Formspree (Contact):** Update the `<form>` tag on Contact page:

     ```astro
     <form id="contactForm" action="https://formspree.io/f/<your-id>" method="POST" target="_blank" class="max-w-md">
     ```

     Add a hidden field for redirect or identifying form:
     `<input type="hidden" name="_subject" value="New Contact Form Submission from SatisPie">`.
     Optionally, add `name="form-name"` to identify form type. Remove `netlify` attribute if we had it.
     This will cause a basic formspree to email the configured address on submit.
  3. **Implement Formspree (Apply):** Similarly update Apply form:

     ```astro
     <form id="applyForm" action="https://formspree.io/f/<your-id>" method="POST" target="_blank" class="max-w-md">
     ```

     Use a separate Formspree endpoint or same (better separate to have distinct subject). Add hidden `_subject: "New Job Application Submission"`.
     Also include fields for all form inputs. Formspree by default will capture all named fields.
     *Security:* Formspree may require adding a `name="_captcha"` with value "false" to disable their own bot captcha. Check their docs; if needed, include that to avoid an extra step for user.
  4. **Client-side Feedback (Optional):** To improve UX, implement a small script to intercept the form submit and show a “Thank you” message without leaving the site. Astro can handle this by adding a little script island. For example, create a component `FormHandler.jsx` (React or Preact, since Astro allows islands) that attaches a submit event listener via `preventDefault`, calls `fetch` to Formspree endpoint, then updates the DOM to show success or error message. This requires some JS code. If time allows:

     * Create `src/components/FormHandler.jsx` for contact form. Use `client:load` directive to run on the client. On submit of form, do an `await fetch(form.action, { method: "POST", body: new FormData(form) })`, then on success, replace form innerHTML with a thank-you note. Similarly handle errors.
     * Alternatively, simpler: rely on Formspree’s redirect response (they might open a thank you page since we set target="\_blank", which is not seamless). We can drop target="\_blank" and let it redirect to a generic thank you. But that navigates away. Better to do the JS approach.
       Given complexity, if short on time, we might skip in-depth and accept a simpler user experience (opening a new tab or showing Formspree’s built-in thank you). Document if we skip that we plan to improve post-MVP.
  5. **Interactive Navigation (if any):** If the site’s header on mobile needs a hamburger menu, implement it now. For example, if we anticipate mobile collapse, add a button in Header.astro that toggles an `isNavOpen` state. Use an Astro component or a bit of Alpine.js (could integrate Alpine if we want minimal JS). If using Alpine: include the script via CDN in BaseLayout `<head>` (small overhead). Then in Header:

     ```html
     <button x-data="{open: false}" x-on:click="open = !open">☰ Menu</button>
     <ul x-show="open" class="md:flex"> ... nav links ... </ul>
     ```

     Astro also supports a small inline script with `client:load` for toggling classes. Choose a method and implement such that on small screens the menu can collapse.
     If the nav is simple and fits on mobile (just 5 links), we might not need a hamburger; they might wrap. Check it: if it looks okay, skip hamburger.
  6. **Other Interactive Elements:** Consider if any other part of site could benefit from interactivity:

     * Maybe a carousel of product images on home (the old site didn’t have one, but we could add an auto-rotating banner of pies for modern touch). This is optional scope. If wanted, integrate a lightweight slider library (e.g. Swiper.js) or a custom solution using Astro’s island (which could be overkill for now).
     * A scroll-to-top button if pages are long (not needed, pages are short).
     * Form input enhancements like character count on message (not essential).
       We’ll focus on forms and nav mainly.
  7. **Test Forms End-to-End:** Deploy the dev build or use an alternative method to test form submission (we might need to temporarily disable client side prevention or test after deployment). Perhaps push to a staging branch and test Formspree sending an email. Or temporarily set action to a test endpoint. Ensure required validation works in browser (try submitting empty, HTML5 should block and show errors). Fill fields properly and submit – verify in the configured email that the submission arrives with all fields. Adjust fields names or form setup if something is missing (e.g. Formspree might not email if email field name doesn’t match expected pattern, but usually it does as long as it’s name="email").
  8. **Commit Changes:** If code was added, commit as `feat: add form submission via Formspree and mobile menu`. Secure any keys (Formspree doesn’t need secret key in front-end, just endpoint ID, which is fine to expose).
* **Deliverables:**

  * Updated contact and apply forms with actionable submission (points to Formspree or chosen method).
  * (If implemented) JS component or script that handles form submission and displays success message without leaving page.
  * Any additional interactive UI improvements (mobile nav toggle, etc.).
* **Acceptance Criteria:**

  * A user can fill out the Contact form and submit it, and the site owners receive the inquiry (tested via configured email). Similarly for the Apply form.
  * After submission, the user gets a clear indication that the form was sent (either a thank-you message on the site or a thank-you page in new tab).
  * All required fields are indeed required in the browser.
  * Any new interactive elements (like a hamburger menu) work smoothly on relevant screen sizes.
  * The site remains mostly static except these enhancements, meaning no excessive JS affecting performance (only loading what’s needed for these interactions).
* **Estimated Effort (h):** 4 hours
* **Dependencies / Prereqs:** Phase 3 completed (forms in place). Possibly need Formspree account (free, quick) or similar service credentials. Phase 2 header for mobile menu context.

### Batch 4.2 – Accessibility (A11y) Compliance Audit & Fixes

* **Goal:** Ensure the entire site meets **WCAG 2.2 AA** accessibility standards, addressing color contrast, keyboard navigation, ARIA labels, and any other issues so that all users can effectively use the site.
* **Step-by-Step Tasks:**

  1. **Run Automated Audit:** Use Lighthouse (in Chrome devtools) or an accessibility testing tool (like axe DevTools or WAVE extension) on the site’s pages. Generate a Lighthouse report focusing on Accessibility. Note any issues flagged: e.g., low contrast text, missing form labels (shouldn’t be, we added them), missing alt attributes (should be covered), or ARIA issues. Save these results as a baseline.
  2. **Color Contrast Fixes:** If the audit flags any color contrast ratio problem (contrast should be ≥4.5:1 for normal text, 3:1 for large text), adjust the CSS. For example, if the footer text on a colored background is too low contrast, darken the text or lighten the background. Use accessible color palette choices (you can test specific combinations on WebAIM’s Contrast Checker). Ensure our brand colors usage doesn’t violate contrast; e.g., if we have orange on white, check it’s okay; if not, darken the orange for text usage or use it only for larger headings. Implement these tweaks in Tailwind config or CSS.
  3. **Keyboard Navigation:** Manually navigate the site using Tab and Shift+Tab. Ensure you can reach all links and form controls. Check that the focus outline is visible (Tailwind usually doesn’t remove it by default, but ensure we haven’t overridden it). If the header nav is dropdown/hamburger, ensure the menu items are focusable when menu is open, and the toggle button is focusable. Add `tabindex` or ARIA attributes if needed (like `aria-expanded` on the menu button toggling state). For skip links: since pages aren’t extremely long, a skip link (skip to content) is nice but optional. If desired, add a skip link at top of body in BaseLayout:

     ```html
     <a href="#main" class="sr-only focus:not-sr-only">Skip to main content</a>
     ```

     And give the main content `<main id="main">`. This allows screen reader and keyboard users to jump past nav.
  4. **ARIA Labels and Roles:** Ensure any non-text icon buttons have accessible labels. E.g., if we added a “☰ Menu” icon without text, ensure it has `aria-label="Toggle navigation"`. In our case, we might have left the word “Menu” visible which is fine. If any links are just icons (none currently except the “📄” but we gave text too), ensure alt or sr-only text present. The address on contact page is marked up as `<address>` which is good.
     Check form inputs: each has a `<label for>` which is correct for accessibility. The phone input might benefit from `type="tel"` (we did that, which can bring up numeric keypad on mobile). Good.
     If we had any dynamic content with ARIA (like a collapsible menu or if we did an image carousel, we’d ensure appropriate `aria-` attributes), but currently minimal.
  5. **Screen Reader Test (Optional):** If possible, use a screen reader (NVDA/JAWS or VoiceOver) on a couple pages to catch anything odd (like reading order). Ensure the header navigation is announced clearly (we could add `aria-label="Main Navigation"` on the `<nav>` element). Ensure form error feedback (if any) would be reachable – currently no custom error messages, just browser default, which is fine.
  6. **Alt Text Review:** Double-check the alt text of all images from Phase 0. Are they descriptive enough? For decorative usage (like if we had a purely decorative background image, we’d alt=""). In our pages, likely all images convey info (logo conveys brand name, we might have product images showing a pie – those should have alt like “Apple Pie in packaging” to be meaningful or we can treat them decorative if they’re purely eye-candy). Adjust alt texts as needed to be concise yet descriptive.
  7. **Link Text:** Ensure link text is descriptive (“Click here” is bad; we avoided that by making actual phrases links). E.g., “Go back to Home page” is clear. “Print | Sitemap” links in footer of old site we removed (we have none extraneous now).
  8. **No Keyboard Traps:** Ensure no part of site traps focus (unlikely since we have no complex modals). If we did add a hamburger menu overlay, ensure that closing it returns focus appropriately (maybe beyond scope for our simple site).
  9. **Update Code for Issues:** Implement all fixes from above: style changes for contrast, adding labels/ARIA, skip link if added, etc. Test again with Lighthouse – aim for a 100% Accessibility score.
  10. **Commit Changes:** `fix: improve accessibility (contrast, labels, navigation)` – using Conventional Commits with `fix:` since these address potential accessibility bugs.
* **Deliverables:**

  * Adjusted CSS or Tailwind config for any color contrast issues (ensuring AAA for key text where feasible, AA minimum everywhere).
  * Added ARIA attributes or assistive markup (skip link, nav labeling, etc.) to improve screen reader experience.
  * Documentation (could be comments or a short doc) of accessibility considerations for future maintainers.
  * An **Accessibility Audit Report** (Lighthouse or WAVE) saved or summarized, indicating compliance (optional deliverable, but useful to show stakeholders).
* **Acceptance Criteria:**

  * The site achieves at least **WCAG 2.2 AA** compliance: e.g., Lighthouse Accessibility score \~100 with no serious issues flagged.
  * All text has sufficient contrast against backgrounds (tested via tools).
  * The site is fully navigable via keyboard alone (you can tab through links and forms in a logical order, and activate all controls).
  * Screen reader announces content in a sensible way (header, main, footer regions, link names, form labels, etc., are all meaningful).
  * The team has confidence that users with disabilities (visual, motor, etc.) can use the site effectively.
* **Estimated Effort (h):** 3 hours
* **Dependencies / Prereqs:** The site’s content and basic styling must be in place (Phase 3). Phase 4.1 (interactive) should be done or nearly done, because interactive elements also need accessibility checks (like the form submission feedback or menu toggles). Auditing should occur on a nearly finished site.

*(After Phase 4, the site should not only look like the original (or better), but also function interactively and be accessible. We then proceed to thorough testing.)*

## Phase 5 – Testing & QA

### Batch 5.1 – Implement Unit & Integration Tests

* **Goal:** Add automated tests to ensure critical functionality of the site works (especially navigation and forms), and that components render correctly. Use **Vitest** for unit tests and **Playwright** (or similar) for end-to-end tests.
* **Step-by-Step Tasks:**

  1. **Set Up Vitest:** Astro projects can use Vitest for component testing. If not already in template, install it: `pnpm add -D vitest @astrojs/test`. Configure if needed: add a `vite.config.js` or update `package.json` with a test script `"test": "vitest"`. If Astro provides a test setup (some starters do), leverage that. Otherwise, create a basic config so that `.astro` components can be tested (the `@astrojs/test` integration helps with that).
  2. **Write Component Tests:** Identify any non-trivial components or functions to test. For example: we might test that the Header component lists all nav links properly. Or test a utility function if we had any (e.g., if we wrote a JS to handle form submission logic, test that separately for proper data formatting). Write tests under `src/tests/` or `__tests__/`. For instance, `Header.test.js` that uses Astro’s test utils to render `<Header/>` and check that it contains “Home”, “Branded Products”, etc. Or snapshot test the HTML output of Header. Use Vitest’s assertions (`expect(...)` etc.).

     * Also test BaseLayout if possible to ensure it injects title and meta given props. This might be overkill for static content, but for demonstration, one test could instantiate `<BaseLayout title="Test" description="Desc"><p>Hi</p></BaseLayout>` and verify that the `<title>` tag contains “Test – SatisPie”.
  3. **Form Validation Unit Test (Optional):** If we wrote a separate module for form handling (like a function to validate or format input), we’d test that. Given our forms are mostly HTML default, we might skip. But if we have a FormHandler component, we could simulate a fake submission and assert it calls fetch with correct data (using Vitest’s mocking for fetch). This can ensure our client script won’t break.
  4. **Configure Playwright:** For end-to-end, use Playwright to simulate user interactions in a headless browser. Add it: `pnpm add -D @playwright/test`. Generate a config: `npx playwright init` (choose no CI config if asked, since we’ll integrate with GH Actions manually). This will create `playwright.config.js` and example tests. Adjust config to use `localhost:3000` or a test build server. For simplicity, we can run against the built site served by `pnpm preview`. Alternatively, use Playwright’s static server feature. In config, set baseURL to `http://localhost:3000` (assuming we run a dev server).
  5. **Write E2E Tests:** Create tests in `tests/` (or use the default `e2e/` from template if any). Key scenarios:

     * **Navigation Test:** Launch the site, click each nav link, verify the page loads and an expected heading is present. For example, test that clicking “Branded Products” goes to `/branded-products` and the page has an `<h1>` with text “SatisPie Branded Take & Bake Products” (our content). Use Playwright’s `page.click('text=Branded Products')` and then `expect(page).toHaveURL('/branded-products')` and `expect(page.locator('h1')).toContainText('Branded')`.
     * **Form Submission Test:** This is trickier without a backend. But we can at least test the front-end validation: e.g., try to submit without filling required fields and confirm the browser prevents it (maybe Playwright can detect the `:invalid` state or the existence of a validation message). Alternatively, if Formspree is configured, we don’t actually want to trigger real emails in tests. So we might mock or intercept the network request. Playwright can intercept the form’s network call and respond with a dummy success, then we can verify the success message appears (if we implemented client-side feedback). If we didn’t implement such feedback, we might skip direct form e2e to not spam Formspree. But at least verify that the form page loads and all fields are present.
     * **Accessibility Test (Optional):** Playwright can integrate with Axe for automated a11y testing. This might replicate what we did manually. Could skip since we trust manual.
     * **Content Checks:** Write a test that iterates through all pages and checks for console errors. For example, open each route and ensure no client-side JS errors in console (Playwright can catch console messages). Also ensure each page has a unique <title> (we can extract `document.title` and compare to expected).
  6. **Run Tests Locally:** Do `pnpm run test` (for Vitest) and `pnpm run test:e2e` (if configured for Playwright). Ensure all pass. Fix any bugs tests reveal (e.g., maybe a nav link was wrong, or missing alt etc. – though we likely caught those earlier). Iteratively improve until green.
  7. **Add Test Scripts:** In `package.json`, ensure we have scripts like `"test:unit": "vitest run", "test:e2e": "playwright test"`. Also possibly a script `"test": "vitest && playwright test"` to run both.
  8. **Commit Test Code:** Commit as `test: add unit and e2e tests for site` (Conventional Commits suggests `test:` prefix for adding tests).
* **Deliverables:**

  * Testing framework configurations (Vitest config, Playwright config) checked into the repo.
  * Unit test files for key components or utilities.
  * End-to-end test files covering major user paths (navigating the site, using forms).
  * All tests passing locally (or documented exceptions if something is not easily testable).
* **Acceptance Criteria:**

  * The repository has an automated test suite that team can run (e.g., `pnpm test`) to verify core functionality.
  * Tests cover navigation (all pages can load without error) and forms (at least that the form is present and required fields enforce input).
  * No regressions: if a future change breaks a page or an important element disappears, the tests would catch it. For example, if someone accidentally removes the “Contact Us” heading, a test failing on missing <h1> would alert us.
  * The code is structured to allow CI to run these tests in Phase 6 (on GitHub Actions) for continuous integration.
* **Estimated Effort (h):** 4 hours
* **Dependencies / Prereqs:** All development from Phases 2–4 should be done so that what we test is feature-complete. Node environment (we have Node 20, which is fine for Playwright). Possibly need to install browsers for Playwright (the `init` usually sets that up).

### Batch 5.2 – Quality Assurance: Performance, SEO & Link Checks

* **Goal:** Evaluate the site’s performance and quality using tools (Lighthouse for performance/SEO, link checkers, etc.), and address any issues like large bundle sizes, slow images, missing SEO tags, or broken links.
* **Step-by-Step Tasks:**

  1. **Build for Production:** Run `pnpm run build` to generate the optimized production site in `dist/`. Note the output: Astro will produce HTML for each page, CSS (maybe one combined stylesheet if using Tailwind JIT), and some JS (likely minimal, just for any interactive islands). Check the console output for any warnings during build (Astro might warn if images are not optimized, etc.). Resolve warnings if possible (e.g. if an image is too large, consider resizing).
  2. **Bundle Size Analysis:** Inspect the `dist/` folder. How large are the CSS and JS files? They should be fairly small for a mostly static site. If any one is unexpectedly large, investigate. For example, if we included a big library (maybe Playwright for test doesn’t go to prod, but if something else did), we would reconsider. Use `npm run astro -- --site` (if Astro has bundle analyzer) or manually inspect. If Tailwind CSS is heavy, ensure purge worked (Astro integration should purge unused classes). If any images are large, ensure they are compressed (maybe use a tool to compress further if needed).
  3. **Performance Audit (Lighthouse):** Serve the production build: `pnpm run preview` (serves at localhost:4321 by default). Open Chrome and run Lighthouse (Desktop and Mobile modes ideally). Record the Performance score and note suggestions. Likely items: image optimization, ensuring text remains visible during webfont load (if we use Google Fonts, might warn about FOIT – could consider `rel="preconnect"` or using font-display: swap in CSS). Implement easy wins:

     * If images are flagged for next-gen formats, and we didn’t use WebP, consider converting key images to WebP and using `<picture>` with fallback. This might be an enhancement: e.g., provide both JPEG and WebP sources for the hero or product images. Astro also has an Image component that can do this, but maybe not in current scope. If time, do one for demonstration.
     * Check “Properly size images”: ensure we didn’t include a huge image scaled down. If so, scale it in file.
     * Check “Ensure text remains visible during webfont load”: add `font-display: swap` to @font-face if self-hosting fonts, or ensure link tag uses `&display=swap` if Google Fonts. Quick fix: if using Google Fonts, modify the URL to include `display=swap`. If self-hosted, in CSS `@font-face` add `font-display: swap;`.
     * Remove any unused scripts. We likely have none besides our small stuff.
       Performance should ideally be high 90s given static content and small site.
  4. **SEO Audit (Lighthouse):** Check SEO score. Likely suggestions: add meta descriptions (we did), add robots.txt or sitemap.xml perhaps. Possibly “Links have descriptive names” – we did that. If not, fix any found issues. **Sitemap.xml**: Astro can generate one if configured. For thoroughness, we can quickly add `@astrojs/sitemap` integration – `pnpm add @astrojs/sitemap` and in `astro.config.mjs` add it with site URL configured. This will output a sitemap.xml in dist. If easier, create a manual static `public/sitemap.xml` based on our site map. But using the integration ensures it stays updated. Decide on one and implement (likely integration). After adding, rebuild to see sitemap in `dist`.
     **robots.txt**: Consider adding a simple `public/robots.txt` that allows all and references sitemap:

     ```
     User-agent: *  
     Allow: /  
     Sitemap: https://satispie.com/sitemap.xml  
     ```

     This helps SEO indexing.
  5. **Broken Link Check:** Use a tool or script to crawl our built site for broken links. One way: use an npm like `linkinator` or simply open each page and click all links (we can do manual quick check since site is small). Check that external links (tel:, mailto:, pdf links) all work or at least do something appropriate. The PDFs should download (which we tested). The tel: and mailto: should open relevant apps (we assume fine). Check the alt text by hovering or inspecting – ensure no `alt=""` where it shouldn’t be.
  6. **Cross-Browser Test:** Open the site in a few browsers (Chrome, Firefox, Safari, Edge if possible) and on mobile device if available. Ensure layout is consistent and nothing breaks (especially fonts and spacing). Pay attention to any flex issues or form input styles (different browsers render form controls slightly differently – they should be acceptable with our basic styling; if needed, add some CSS to standardize appearance like `appearance-none` class on form inputs for a cleaner look).
  7. **Final Touches:** Address any issues found:

     * If Lighthouse flagged “best practices” e.g., missing `<html lang="en">` – we have that in BaseLayout (should add if not).
     * Security: ensure no mixed content (all assets are local or via https if any external).
     * If performance was slightly low due to e.g. un-minified some asset, see if we can fix (Astro should minify HTML/CSS by default).
  8. **Document Metrics:** Record the Lighthouse scores (Performance, Accessibility, Best Practices, SEO). Aim for Perf 90+, SEO 100, Accessibility 100, Best Practices \~100. If any lower, mention reasons (maybe external Google Fonts lowers Perf due to load, but it’s fine).
  9. **Commit QA Fixes:** `chore: QA fixes (performance and SEO improvements)` describing changes like adding sitemap, adjusting font loading, etc.
* **Deliverables:**

  * Generated `sitemap.xml` and `robots.txt` in the build (and included in source via integration or static file).
  * Tweaks to codebase improving performance (e.g., `font-display: swap`, optimized images).
  * A QA report or summary of Lighthouse results and how we addressed major points.
* **Acceptance Criteria:**

  * The production build passes quality checks: no broken links, all pages have SEO-friendly metadata, and the site is indexable (presence of sitemap/robots and correct metadata).
  * Performance optimizations are in place: images and assets are optimized so the site loads quickly even on mobile networks. (For example, homepage LCP is good, no oversized payloads).
  * The site works consistently across modern browsers and devices, confirmed via testing.
  * Stakeholders are satisfied that the site is ready for launch from a quality standpoint (no obvious issues remain).
* **Estimated Effort (h):** 3 hours
* **Dependencies / Prereqs:** The site must be fully implemented (Phases 2–4) to audit. Testing (5.1) ideally done so we know functionality is stable. Some steps may require internet (for Lighthouse or external tool), ensure environment.

*(Phase 5 ensures confidence in the site’s stability and readiness. Now onto deployment.)*

## Phase 6 – Deployment to IONOS

### Batch 6.1 – Deployment Strategy & Static Hosting Prep

* **Goal:** Decide on and document the deployment approach (static upload vs. Git integration) and prepare the build output (including necessary server config files like **.htaccess**) for hosting on IONOS.
* **Step-by-Step Tasks:**

  1. **Evaluate Options:** Summarize the two deployment options:

     * **Option 1: Static Upload via FTP/SFTP** – manually (or via script) upload the contents of the `dist/` directory to the IONOS web space. This is straightforward but requires repeating on each update (unless automated by an Action).
     * **Option 2: Git Deployment (Preferred)** – use IONOS’s Git integration (“Deploy Now”) to auto-deploy on git push. This automates builds and is better for CI/CD.
       Document pros/cons in a short internal memo or section of README (e.g., in a `DEPLOYMENT.md`). For example, note that Option 2 ensures the build process runs on IONOS with Node/Pnpm, and allows easy updates; whereas Option 1 might be simpler but prone to human error.
  2. **Choose Preferred**: Since the user prefers **Git deploy**, proceed with Option 2 as our implementation path, but still include instructions for Option 1 as a fallback (should Git deploy not be viable due to environment constraints).
  3. **Prepare .htaccess for Static**: In Astro’s output, we need to control server behavior. Create a file `public/.htaccess` in the project so that it gets copied to `dist/` on build. Add rules:
     **SPA Fallback:** Not strictly needed if all routes are static HTML files (Astro outputs each page as its own .html). However, for safety, if a user requests a path without `.html` (like `/contact-us` which is actually a real file `contact-us/index.html` due to Astro prerender, mod\_dir usually handles it), an index fallback might not be needed. But we should specify a 404:

     ```apacheconf
     ErrorDocument 404 /404.html
     ```

     This ensures our custom 404 is used by Apache.
     **Gzip/Brotli Compression:** Enable compression for text assets:

     ```apacheconf
     <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE text/html text/css application/javascript application/xml application/json image/svg+xml
     </IfModule>
     <IfModule mod_brotli.c>
       AddOutputFilterByType BROTLI_COMPRESS text/html text/css application/javascript application/xml application/json image/svg+xml
     </IfModule>
     ```

     This will compress HTML, CSS, JS, JSON, SVG etc. (IONOS likely has these modules enabled by default, but explicit is good).
     **Caching:** Set long cache for static assets (images, CSS, JS) to improve repeat visit performance:

     ```apacheconf
     <IfModule mod_expires.c>
       ExpiresActive On
       # Cache images and fonts for 1 year
       ExpiresByType image/png "access plus 1 year"
       ExpiresByType image/jpeg "access plus 1 year"
       ExpiresByType image/webp "access plus 1 year"
       ExpiresByType image/svg+xml "access plus 1 year"
       ExpiresByType font/woff2 "access plus 1 year"
       ExpiresByType text/css "access plus 1 month"
       ExpiresByType application/javascript "access plus 1 month"
       # HTML and JSON no cache (since content might update without name changes)
       ExpiresByType text/html "access plus 0 seconds"
       ExpiresByType application/json "access plus 0 seconds"
     </IfModule>
     ```

     We set HTML to no cache so updates propagate, but static assets can be cached longer (we might add version query if needed for busting, but skip for now).
     **Security headers (optional):** For good measure we could add some security headers like X-Content-Type-Options, etc., but not requested explicitly. We’ll focus on required items.
  4. **Include .htaccess in Build:** Ensure the `public/.htaccess` is indeed picked up by Astro. Astro copies public directly to dist, so it will. After adding, run `pnpm build` again to confirm `.htaccess` appears in `dist`.
  5. **Document .htaccess:** In README or deploy doc, mention that .htaccess handles friendly URLs, caching, and compression on IONOS (Apache). IONOS shared hosting uses Apache, so this file will be read.
  6. **Deployment Readiness Checklist:** Ensure environment variables or config for production are set: e.g., if any base URL in astro.config (we set site in astro.config to “[https://satispie.com”](https://satispie.com”)). If not, set it now so things like sitemap generate correct domain. Use an environment var for site URL if we want, or hardcode since it’s known. Perhaps update astro.config:

     ```js
     site: process.env.SITE_URL || 'https://satispie.com'
     ```

     and set SITE\_URL in environment on IONOS (via their interface) if needed. Not critical unless some features require it.
  7. **Dry-Run Option 1 (if needed):** If possible, do a quick test of static upload to a staging area: e.g., use an FTP client to upload `dist/` to a subdirectory and see if site works. This might be skipped in favor of directly doing Git deploy. But keep it as fallback plan.
  8. **Commit Deployment Config:** Add the `.htaccess` file to git (under public). Also commit any doc updates about deployment. Use `chore: add .htaccess and deployment docs`.
* **Deliverables:**

  * **DEPLOYMENT.md** or README section detailing how to deploy via FTP and via Git Deploy, including any one-time setup.
  * `.htaccess` file with rules for errors, compression, and caching, included in the project.
  * Confirmation that the static build is ready for upload (works locally with `pnpm preview` including .htaccess rules – though .htaccess won’t apply locally, only on server).
* **Acceptance Criteria:**

  * The team understands the deployment options and has clear instructions for each.
  * The build artifacts include necessary server config (htaccess) so that once deployed to IONOS, the site behaves correctly (serves 404 page for bad URLs, compresses files, etc.).
  * No additional changes are needed to the codebase for deployment – all environment specifics are accounted for (.htaccess for Apache, environment variables placeholders set).
* **Estimated Effort (h):** 2 hours
* **Dependencies / Prereqs:** Completed build from Phase 5. Knowledge of IONOS hosting environment (Apache) and possibly access to the hosting control panel to confirm supported features.

### Batch 6.2 – Set Up IONOS Git Deployment (Deploy Now)

* **Goal:** Configure IONOS’s Git-based deployment for the new repository so that pushing to GitHub automatically triggers a build and deploy on the IONOS hosting environment.
* **Step-by-Step Tasks:**

  1. **Connect IONOS Deploy Now:** Log in to the IONOS account and navigate to **Deploy Now** (their CI/CD service). If not already done, sign up for Deploy Now and link the GitHub account. Authorize the **IONOS Deploy Now GitHub App** to access the **dwmaginn/satipie\_site** repo.
  2. **Create a Deploy Now Project:** In the Deploy Now interface, choose to create a new project from an existing GitHub repository. Select **dwmaginn/satipie\_site** and proceed. The assistant will scan the repo for the tech stack. It should detect an Astro (or at least Node+vite) project (Astro might be recognized as a static site framework).
  3. **Accept Suggested Build Config:** Deploy Now likely suggests a build command and output path. Ensure it’s `pnpm install && pnpm run build` and output is `dist` (which is default for Astro). If not, manually specify: build command: `pnpm install && pnpm run build` (this will run our Astro build on their servers), publish directory: `dist/`. Set Node version to 20 if there’s an option (Deploy Now might auto-detect via .nvmrc or package.json engines we set). Confirm these settings.
  4. **First Deployment:** Trigger the deployment. Deploy Now will create a GitHub Actions workflow file in our repo (something like `.github/workflows/ionos-deploy-now.yml`) if it hasn’t already. Check our GitHub repo after connecting – likely a commit from IONOS app appears, adding the workflow. If it doesn’t, we might have to manually add one, but per docs it’s automated. This workflow will do essentially what we set: checkout code, setup Node, etc., build, then deploy to IONOS.
  5. **Monitor Build Logs:** In IONOS Deploy Now dashboard or GitHub Actions tab, watch the first build. It will install PNPM and Node (since we required PNPM, ensure the action either uses our `engines` or we might need to tweak the GH workflow to include `pnpm/action-setup`). If something fails (e.g., PNPM not found), modify the workflow: add a step to install PNPM (like `npm install -g pnpm` or use the official PNPM action). The workflow might have done that if it recognized Node project. Make adjustments and re-run if needed.
  6. **Deployment Success:** Once build passes, Deploy Now will deploy the static files onto an IONOS URL (likely something like `<random>.deploy-now.site` for preview). Copy this preview URL and test it in a browser. Verify the site is up, content looks correct, 404 works, etc., in this staging URL. This is effectively our site running on IONOS infra.
  7. **Post-Receive Hook (Manual Alternative):** (Optional) If we weren’t using Deploy Now, we’d instead do manual steps: create a bare git repo on server and a hook script. Since we are using Deploy Now, skip actual implementation of manual hook. But for thoroughness, outline it in docs (in case someone chooses Option 1.5). E.g., instruct: *“For manual git hook deployment (if not using Deploy Now): SSH to IONOS, create `~/satipie.git` bare repo, add a `hooks/post-receive` file that checks out to `~/htdocs/` and runs `pnpm install && pnpm run build`. Ensure Node 20 and PNPM are available on server (which on shared hosting might require some workaround or not possible). This method is advanced and not needed if using Deploy Now.”*
  8. **Lock Down Deploy Branch (Optional):** The workflow likely triggers on pushes to main. We might want to ensure only tested code hits main (we probably do PRs anyway). But consider enabling branch protection on main so all deployments are from reviewed code. This is more project management – mention if relevant.
  9. **Communicate Process:** Update the deployment docs/README: note that **Deployment is automated**. e.g., “**Deployment:** Merging changes into the `main` branch triggers GitHub Actions (via IONOS Deploy Now) to build and publish the site to IONOS automatically. No manual FTP needed. The workflow is defined in `.github/workflows/…yml`.” Explain any necessary secrets (if Deploy Now needed any, but likely they handle via GH App integration, so no manual secret config required).
  10. **Commit Workflow (if manually created/edited):** If we edited the GH action for PNPM or such, commit those changes (`ci: update IONOS deploy workflow`). If the IONOS app did a commit, that’s already in history.
* **Deliverables:**

  * A working CI/CD pipeline on GitHub for deployments – evidenced by a workflow file in the repo and passing runs on push.
  * A staging “Deploy Now” URL where the latest site version is accessible (for preview or testing).
  * Documentation on how the deployment is triggered and any maintenance (like if we need to update Node version, how to do so in workflow).
* **Acceptance Criteria:**

  * Pushing a commit to `main` (or merging a PR) results in the site being automatically built and published to IONOS without dev intervention.
  * The team can view logs of the deployment (via GitHub Actions or IONOS dashboard) to troubleshoot if anything fails.
  * The deployed site on IONOS is identical to the local build (all files present, .htaccess rules in effect – test e.g. check caching headers via browser devtools network headers to confirm .htaccess was applied).
  * No leftover manual steps after code push – it’s fully automated, fulfilling best practice CI/CD.
* **Estimated Effort (h):** 3 hours
* **Dependencies / Prereqs:** Batch 6.1 (selected strategy, prepared .htaccess). Access to IONOS account and permission to use Deploy Now. Completed tests (Phase 5) ideally, as we are now deploying production.

### Batch 6.3 – Domain, SSL & DNS Configuration

* **Goal:** Point the real domain (satispie.com) to the new deployed site, ensure SSL (HTTPS) is enabled (preferably via Let’s Encrypt), and verify that all URLs (including www vs non-www) redirect appropriately, as well as setting up a custom 404 error page on the hosting.
* **Step-by-Step Tasks:**

  1. **Add Custom Domain in Deploy Now:** In the IONOS Deploy Now project settings, find the domain configuration section. Add **satispie.com** as the custom domain for this project. If the domain is already in the same IONOS account, it should be straightforward to attach. If it’s external (unlikely, since it was an IONOS site), ensure DNS can be pointed.
  2. **DNS Update:** In the IONOS Domain control panel, set the A record of satispie.com to the IONOS Deploy Now’s provided IP (if needed). Some platforms provide a CNAME target (like some subdomain of deploynow\.site) to point to. Follow their instructions – often, they’ll tell you what records to create. If the domain was previously using IONOS MyWebsite, you might need to detach it from that and link to Deploy Now. Coordinate downtime carefully (the site is new but presumably ready to replace old one).
  3. **Enable SSL (Let’s Encrypt):** IONOS likely can provision a Let’s Encrypt certificate for the domain via Deploy Now or the main panel. There might be a toggle like “Enable SSL”. Turn that on for satispie.com. The service will handle generating and auto-renewing the certificate. Confirm that after a short while, [https://satispie.com](https://satispie.com) works and is secured.
  4. **WWW vs Non-WWW:** Decide canonical domain. If users hit `www.satispie.com`, do we want to serve the site? Probably yes, and redirect to primary (like no-www). If so, add `www.satispie.com` as well in domain config and set one as primary. Alternatively, create a redirect in .htaccess: e.g., if prefer no-www, add:

     ```apacheconf
     RewriteEngine On
     RewriteCond %{HTTP_HOST} ^www\.satispie\.com [NC]  
     RewriteRule ^(.*)$ https://satispie.com/$1 [L,R=301]  
     ```

     (Place this at top of .htaccess). This ensures any old links with www are 301 redirected to non-[www](http://www). Add this rule now (since we have .htaccess ready). If prefer www, reverse the logic. The old site likely allowed both; choose one for consistency (non-www is common for small sites).
  5. **404 Configuration:** Our .htaccess `ErrorDocument 404 /404.html` should suffice. Verify on the deployed site by visiting a random non-page that it shows our custom 404 page and not a default IONOS page. If not, adjust hosting settings: sometimes host panels have their own 404 configuration – ensure it doesn’t override ours or set it to use our 404.html explicitly if needed. Usually .htaccess is enough.
  6. **Testing Live Site:** Once DNS is updated (propagate possibly within minutes on IONOS, but allow some time), test the live domain:

     * Check that [http://satispie.com](http://satispie.com) auto-redirects to https\:// (Deploy Now might enforce HTTPS by default; if not, we add in .htaccess:

       ```apacheconf
       <If "%{HTTPS} != 'on'">
       RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
       </If>
       ```

       to force redirect to SSL). Deploy Now might handle TLS redirection though. Confirm by trying http\:// – it should become https\://. If not, implement the above rule.
     * Test pages via the domain: load each main page, ensure content is there and styled (just to ensure no base URL issues). Check console for any errors (especially mixed content – e.g., if any link or resource inadvertently using http – fix by making sure all links are relative or https).
     * Check certificate validity using browser or SSL Labs test. Should be Let’s Encrypt and no errors.
  7. **Caching Behavior:** Using devtools Network tab, confirm that our caching headers from .htaccess are present. E.g., check an image or CSS response headers for `Cache-Control` max-age reflecting the Expires rules. Check text files like HTML do not have caching (should either be no-store or low age). Also check compression: in Network, “Content-Encoding: br or gzip” should appear for HTML/CSS. If not, perhaps IONOS automatically compresses or our directives might need adjusting. If not working, try alternative directives (like `AddOutputFilterByType DEFLATE` as done, maybe IONOS has Deflate on by default anyway). At least one should be present.
  8. **Final Domain DNS Switch:** If the domain was previously live on old site, coordinate the cut-over time to minimize downtime. Possibly the old site was up until now; maybe put up a maintenance notice during DNS propagation (the old site already had one effectively). Now once new site is up, the notice can be removed (which it is, since we didn’t include it).
  9. **Communicate Launch:** Once live, inform stakeholders that the new site is deployed at satispie.com with SSL. Instruct to flush cache or DNS if they don’t see changes, due to propagation.
  10. **Post-Deployment Monitoring:** For the next 24-48 hours, monitor the site (via UptimeRobot or manual checks) to ensure all is stable. Check the IONOS Deploy Now dashboard for any error logs (especially if forms submissions might error out – though Formspree is external and should be fine).
* **Deliverables:**

  * Live website on **satispie.com** served by the new Astro build.
  * SSL certificate in place (no browser warnings).
  * Domain-level redirects (http -> https, www -> non-www or vice versa) correctly configured.
  * .htaccess functioning on server for error and caching as verified through response headers and behavior.
* **Acceptance Criteria:**

  * Visiting `https://satispie.com` in a browser loads the new site over HTTPS, showing the new content and not the old site.
  * The browser address bar shows a secure lock (valid SSL), and the domain is correct (and does not drop to some deploynow subdomain).
  * Both `satispie.com` and `www.satispie.com` resolve, with one redirecting to the other consistently.
  * The site’s performance on first load from the live server is good (verify that caching/compression are working by checking resource sizes and load times).
  * No DNS or certificate misconfiguration (e.g., no certification name mismatch errors).
* **Estimated Effort (h):** 3 hours (includes waiting for DNS/SSL propagation in timeline, though actual work is less).
* **Dependencies / Prereqs:** Batch 6.2 (deployment pipeline) should be done so that code is already deployed to a working URL. Domain credentials on IONOS to adjust DNS and attach domain.

### Batch 6.4 – CI/CD Workflow Enhancement (GitHub Actions)

**(Optional concurrent batch, as core deployment is done)**

* **Goal:** Refine the GitHub Actions workflow for deployment to include running tests and perhaps notifications, ensuring quality gates before deploying to production automatically.
* **Step-by-Step Tasks:**

  1. **Incorporate Tests into CI:** Edit the Deploy workflow YAML (or a separate workflow) to run our test suite before building/deploying. For example, add steps for `pnpm run test:unit` and `pnpm run test:e2e` after checkout and install, but before the build/deploy steps. If any test fails, the workflow should abort (failing the deploy). This prevents bad code from going live.
  2. **Cache Dependencies:** Optimize CI by caching `~/.pnpm-store` or `node_modules`. Use actions/cache with key on `pnpm-lock.yaml`. This speeds up builds. Deploy Now’s generated workflow might already have something like that; if not, add it.
  3. **Notifications (Optional):** If the team uses Slack or email for CI notifications, consider integrating. For instance, add a step at end using a Slack webhook to post “Deployment successful ✅” or “❌ Deployment failed tests”. This is nice-to-have if time permits.
  4. **Manual Triggers & Branch Previews:** Possibly adjust workflow triggers: maybe deployments only on push to main (already set), but also allow a manual dispatch or branch preview. Deploy Now actually automatically deploys each branch to a staging URL by default. If that’s enabled, test it: push a test branch, see if it made a staging deployment (their docs said new branch = new staging deploy with TLS). If so, document that feature: it’s great for previewing feature branches. If not auto, we could incorporate a workflow to do it (but likely it is auto due to Deploy Now).
  5. **Environment Protection (Optional):** In GitHub, mark the deploy step as deploying to production environment, and possibly require approval. But since small team, this might be overkill. Still, set environment in workflow for clarity.
  6. **Commit CI changes:** `ci: run tests in deployment workflow` (and any other improvements). Push and ensure the workflow still passes (maybe run it on a dummy commit or re-run the last deployment with “workflow dispatch”).
  7. **Verify gates:** Intentionally break something in a branch to see tests fail and ensure it doesn’t deploy. E.g., push a commit that fails a test to a new branch, verify CI catches it (and see Deploy Now likely either doesn’t deploy that branch or marks it failed). Then fix commit before merging to main.
  8. **Update Documentation:** Note in README/DEPLOYMENT docs that CI runs tests on each deploy. Encourage developers to run tests locally or ensure they pass PR checks to not delay deployments.
* **Deliverables:**

  * Updated GitHub Actions YAML including test execution and possibly caching.
  * A demonstration that failing tests will prevent deployment (ensuring reliability of the live site).
  * CI documentation for team.
* **Acceptance Criteria:**

  * The CI pipeline now serves as a quality gate: code that doesn’t pass tests will not be deployed by the workflow.
  * Deployments remain fast enough (caching in place, unnecessary steps avoided).
  * Team is notified of deployment outcomes (through GH checks or Slack if integrated) and can act if something fails.
  * (Optional) Branch previews on Deploy Now are working, so QA can see feature branches at unique URLs with SSL.
* **Estimated Effort (h):** 2 hours
* **Dependencies / Prereqs:** Phase 5 tests in place; Batch 6.2 baseline workflow done. This can be done in parallel with domain setup since different focus (CI config vs DNS).

*(Phase 6 results in the site being live on IONOS with automated deployment. Finally, ensure knowledge transfer.)*

## Phase 7 – Knowledge Transfer & Handover

### Batch 7.1 – Documentation, Training & Project Handover

* **Goal:** Provide the team and stakeholders with all the information needed to maintain and extend the new site, through thorough documentation and optional training sessions or videos. Finalize project sign-off by confirming all deliverables are met.
* **Step-by-Step Tasks:**

  1. **Finalize README & Docs:** Update the repository’s **README.md** one more time to reflect the final state. Include sections on:

     * **Deployment**: Summarize how deployments happen now (e.g., “All changes merged to main are auto-deployed to IONOS via GitHub Actions – see DEPLOYMENT.md for details”).
     * **Environment Variables**: List any required environment variables for production (if any, like Formspree endpoints or SITE\_URL) and where they are configured (IONOS’s Deploy Now UI or .env).
     * **Maintenance**: Outline how to update content (e.g., “To change text or images, edit the respective .astro or asset file and commit. For major content changes, consider using a CMS integration (not in place yet) or do it manually.”).
     * **Upgrades**: Note that Astro, Tailwind, etc. have version numbers (Astro v5.x, etc.). Mention checking Astro release notes occasionally for updates and how to upgrade (e.g., “run pnpm upgrade astro”).
     * **Testing**: how to run tests and interpret results.
       Possibly break out advanced topics into separate docs: e.g., a **CONTRIBUTING.md** for commit style guidelines (Conventional Commits rules), branching strategy, etc.; a **SECURITY.md** if needed for vulnerability reporting, etc. For now, ensure at least commit message convention is mentioned somewhere for future contributors.
  2. **Create a Maintenance Guide:** A short guide (which could just be in README or separate) about typical tasks: adding a new page (steps: create .astro, link in nav, etc.), updating a product image, running local build if new to team, etc. Also mention periodic tasks like renewing any third-party service keys (Formspree free tier might have limits, keep an eye on it).
  3. **Record Walkthrough Video (Optional):** If resources allow, record a Loom or screen recording (5-10 min) demonstrating how the project is structured and how to perform key tasks (like “here’s how to update text on the Home page, commit, and see it deploy”). This helps non-engineers or new devs get on board. Mark this as optional but recommended. If created, share the link in documentation.
  4. **Handover Meeting:** Schedule a handover session with the team (could be done in parallel to documentation). In that meeting, walk through the repository, how to run locally, how to trigger deployments, and answer questions. Ensure the client (if separate from dev team) knows how to reach support if something goes wrong (e.g., contacting IONOS or a developer if site down).
  5. **Final Checklist:** Before sign-off, verify every item from initial requirements is done: All pages migrated? Brand palette integrated? Responsive? Accessibility? Deployment done? Use the initial prompt’s phases as a checklist. If anything was postponed (like an interactive slider we thought of but didn't do), list it as future enhancement in docs rather than leaving it assumed done.
  6. **Collect Approvals:** Have stakeholders review the live site and all deliverables. Get formal approval that it meets their expectations. Address any minor last-minute tweaks (typo fixes, etc.).
  7. **Project Sign-off:** Once approved, tag a release in GitHub (e.g., v1.0.0) to mark this version. This helps in future to know baseline. Maybe also create a backup of the site (the code is in git, so code is safe; content is static so no DB to backup, but could archive the `dist/` or rely on git + assets).
  8. **Next Steps (if any):** Provide suggestions for future: e.g., “Consider integrating a headless CMS (like DecapCMS) to allow non-developers to edit content via Git – we have structured the content in .astro/MDX which could be wired up relatively easily in future.” or “Monitor Google Analytics (if added) for traffic, and use feedback to iterate.” Encouraging a continuous improvement mindset.
  9. **Gratitude and Closure:** Thank the team in documentation or meeting for their collaboration and officially transition the site to maintenance mode.
* **Deliverables:**

  * **Updated README and project documentation** covering setup, deployment, maintenance, and contribution guidelines.
  * Optionally, a **video walkthrough** link.
  * A final email or document summarizing the project completion, key outcomes (like “Site redesigned with Astro, deployed on IONOS with CI/CD, achieving Lighthouse scores \~99/100/100/100”), and any recommendations.
  * Version tag/release in repository marking the handover state.
* **Acceptance Criteria:**

  * The development team (and client, if applicable) feels confident they can run and modify the site after handover, without needing the original implementers for every change.
  * All project knowledge (decisions made, how things work) is captured in writing or video, minimizing single points of failure.
  * Any team member can follow the documentation to: set up locally, create a new page or edit content, run tests, and deploy changes successfully.
  * The project meets all the objectives outlined in Phase 0’s plan, and the stakeholder has formally accepted the work (sign-off).
* **Estimated Effort (h):** 2 hours (documentation writing), plus any meeting time (1h).
* **Dependencies / Prereqs:** All prior phases complete. Input from stakeholders for any clarifications in docs (if something wasn’t obvious, ensure to document it).
