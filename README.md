# ryanfitton.co.uk

- Live: [![Deploy `./out` static content to Github Pages](https://github.com/ryanfitton/ryanfitton-nextjs-2024/actions/workflows/nextjs-build-export-gh-pages-upload.yml/badge.svg?branch=main)](https://github.com/ryanfitton/ryanfitton-nextjs-2024/actions/workflows/nextjs-build-export-gh-pages-upload.yml)
- Dev: [![Builds Next.JS application and exports to static content to check for errors](https://github.com/ryanfitton/ryanfitton-nextjs-2024/actions/workflows/nextjs-build-export-test.yml/badge.svg)](https://github.com/ryanfitton/ryanfitton-nextjs-2024/actions/workflows/nextjs-build-export-test.yml)

<hr>

Powered by [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/), hosted on Github pages.

Using template from [gitHub.com/timlrx/tailwind-nextjs-starter-blog/](https://gitHub.com/timlrx/tailwind-nextjs-starter-blog/):

- Running version `2.4.0` of [gitHub.com/timlrx/tailwind-nextjs-starter-blog/](https://gitHub.com/timlrx/tailwind-nextjs-starter-blog/);
- Running version Next.JS version `15.1.6`;
- Running version TailwindCSS version `4.1.3`;
- with the following custom changes:
  - A separate 'Portfolio' post section.
  - Additional social icons.
  - Updating the Tailwind template, including color schemes, fonts, margin/padding/font sizes, along with edits to the HTML templates and components.
  - Including the use of a Cloudflare image loader so Image Transformations API can be used.
  - Set up a GitHub Actions workflow to host the website and automatically upload any changes pushed to the 'main' branch.
  - Setting up new 'social media' icons, as the starter template didn't include all the social icons I required, such as KeyBase, Bluesky, Buy Me A Coffee, and others.
  - Update the Sitemap and RSS feed generators to include posts from the new 'Portfolio' section.
  - Google AdSense ads and component (`Ad.tsx`).
  - Jest and Cypress testing scripts.

# Getting started

## Running local:

1. `nvm install lts/iron`. Requires at least Node.JS `v20.18.1` and NPM `v10.8.2`. See [nodejs.org/en/about/previous-releases](https://nodejs.org/en/about/previous-releases).

2. Install required dependencies for package management: `npm install --global yarn`

3. `yarn`. This will install the required packages.

4. `yarn dev`. This starts the local server, which is accessible on [http://localhost:3000](http://localhost:3000).

## Running a production build:

Ensuring the requirements are met from the 'Running local:' section above;

1. `EXPORT=1 UNOPTIMIZED=1 yarn build`. A static build will be produced in `/out`

2. If you have PHP installed on your system you can load the production build in a local web server: `php -S localhost:8080 -t out/`

## Tests:

Combined Testing:

- `yarn run test` - Run tests for Jest and Cypress. Designed for local testing. Ensure `yarn dev` has been run first
- `yarn run test:ci` - Runs a local dev server and tests for Jest and Cypress for CI environments. - Probably the best to use in any case.

If you want to run either Jest or Cypress separately, see below.

### Jest

This will perform unit tests. Tests are stored in `/__tests__`.

Commands:

- `yarn run test:jest-watch` - To run on only changed Test files
- `yarn run test:jest-ci` - If in a CI environment

### Cypress

This will perform unit tests. Tests are stored in `/cypress/e2e`.

Commands:

- `yarn run test:cypress-open` - Opens Cypress for interactive testing. Ensure `yarn dev` has been run first
- `yarn run test:cypress-run` - Will run any Cypress tests. Good for use in a CI environment
- `yarn run test:cypress-info` - Outputs info about Cypress
- `yarn run test:cypress-verify` - Verify that Cypress is installed correctly and is executable

## Other:

- `yarn run format`. This will Prettify the code.
- `yarn run analyze`. This will analyse the bundle and open the results in a new browser window.

# Github pages

1. Enable Github pages in your repository, follow these instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

2. Enable a custom domain for your Github Pages site. [More info](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

3. If required, adjust the Github Pages work flow in this repository at: `.github/workflows/static.yml`

# Post data

Use `1970-01-01-EXAMPLE.mdx` as an example for post content, supporting HTML or Markdown.

Exaples found in:

- `data/blog/1970-01-01-EXAMPLE.mdx`
- `data/portfolio/1970-01-01-EXAMPLE.mdx`

# Misc

## Cloudflare:

The Cloudflare Cache is purged upon deployment in Githb Action: `.github/workflows/nextjs-build-export-gh-pages-upload.yml`. Secrets are stored in [Github](https://github.com/ryanfitton/ryanfitton-nextjs-2024/settings/secrets/actions), and correspond with the Cloudflare API key and Site ID. [More info](https://github.com/marketplace/actions/cloudflare-cache-purge-action).

## Disqus:

This site uses Disqus for the commenting system on blog pages. Details to configure are in `data/siteMetadata.js`.

## Google Analytics:

This site uses Google Analytics for the analytics. Details to configure are in `data/siteMetadata.js`.

## Google AdSense:

This site uses Google AdSense to deliver ads on the Blog pages. Details to configure are in `data/siteMetadata.js`.

Ads are displayed in the site with the use of the Ad component: `components/Ad.tsx`.

# URLs

---

URLs to test:

- [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)
- [http://localhost:3000](http://localhost:3000)
- [http://localhost:3000/feed.xml](http://localhost:3000/feed.xml)
- [http://localhost:3000/blog/](http://localhost:3000/blog/)
- [http://localhost:3000/portfolio/](http://localhost:3000/portfolio/)
- [http://localhost:3000/tags/](http://localhost:3000/tags/)
- [http://localhost:3000/about/](http://localhost:3000/about/)
- [http://localhost:3000/tags/personal](http://localhost:3000/tags/personal/)
