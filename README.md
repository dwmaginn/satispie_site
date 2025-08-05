# 🥧 SatisPie Website

**SatisPie** is a modern website for SatisPie, LLC - a company specializing in pre-baked pies, waffles, and pancakes for retail and foodservice. Built with **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)** for optimal performance and maintainability.

- ✅ **Production-ready** scores in **PageSpeed Insights** reports.
- ✅ Integration with **Tailwind CSS** supporting **Dark mode** and **_RTL_**.
- ✅ **Fast and SEO friendly** with automatic **sitemap generation** and **Open Graph tags**.
- ✅ **Image Optimization** (using new **Astro Assets** and **Unpic** for Universal image CDN).
- ✅ **Contact forms** with Formspree integration for customer inquiries and job applications.
- ✅ **Analytics** built-in Google Analytics, and Splitbee integration.

<br>

## 🚀 Live Site

Visit the live site at: **[https://satispie.com](https://satispie.com)**

## 🛠️ Tech Stack

- **[Astro 5.0](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Node.js 20](https://nodejs.org/)** - JavaScript runtime
- **[PNPM](https://pnpm.io/)** - Fast, disk space efficient package manager

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Upcoming: AstroWind 2.0 – We Need Your Vision!](#-upcoming-astrowind-20--we-need-your-vision)
- [TL;DR](#tldr)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

<br>

## 🚀 Getting Started

### Prerequisites

- **Node.js 20** or higher
- **PNPM 8** or higher (or npm)

### Local Development

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd satispie_site
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:4322`

### Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run type checking, linting, and formatting checks
- `npm run fix` - Fix linting and formatting issues

<br>

## 🔔 Upcoming: AstroWind 2.0 – We Need Your Vision!

We're embarking on an exciting journey with **AstroWind 2.0**, and we want you to be a part of it! We're currently taking the first steps in developing this new version and your insights are invaluable. Join the discussion and share your feedback, ideas, and suggestions to help shape the future of **AstroWind**. Let's make **AstroWind 2.0** even better, together!

[Share Your Feedback in Our Discussion!](https://github.com/onwidget/astrowind/discussions/392)

<br>

## TL;DR

```shell
npm create astro@latest -- --template onwidget/astrowind
```

## Project Structure

The project follows the standard Astro structure with the following key directories:

- `src/pages/` - All pages and routes
- `src/components/` - Reusable components
- `src/layouts/` - Page layouts
- `src/assets/` - Images, styles, and other assets
- `public/` - Static files served directly

## Deployment

The site is deployed to IONOS using Git-based deployment. Changes pushed to the main branch are automatically built and deployed.

## Contributing

This project uses Conventional Commits for commit messages. Please follow the format:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `chore:` for maintenance tasks

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4322` |
| `npm run build`   | Builds the site for production              |
| `npm run preview` | Preview the production build locally        |
| `npm run check`   | Run type checking, linting, and formatting  |
| `npm run fix`     | Fix linting and formatting issues           |

| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Example'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # If the blog will be enabled
    postsPerPage: 6 # Number of posts per page

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post
    relatedPostsCount: 4 # Number of related posts to display

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Deploy

#### Automated Deployment (IONOS Deploy Now)

This site is configured for automated deployment to IONOS hosting via GitHub Actions:

- **Build Command:** `pnpm install && pnpm run build`
- **Publish Directory:** `dist/`
- **Node Version:** 20 (auto-detected via .nvmrc)

**Deployment Process:**

1. Push changes to `main` branch
2. GitHub Actions runs tests and builds the site
3. IONOS Deploy Now automatically deploys to production
4. Site is updated at [https://satispie.com](https://satispie.com)

**Manual Deployment (Fallback)**

You can create an optimized production build with:

```shell
pnpm run build
```

The generated files are located in the `dist` folder, which can be uploaded to any hosting service.

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

<br>

## Frequently Asked Questions

- Why?
-
-

<br>

## Related projects

- [TailNext](https://tailnext.vercel.app/) - Free template using Next.js 14 and Tailwind CSS with the new App Router.
- [Qwind](https://qwind.pages.dev/) - Free template to make your website using Qwik + Tailwind CSS.

## Contributing

If you have any ideas, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
