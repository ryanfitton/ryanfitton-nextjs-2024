# ryanfitton.co.uk

Powered by [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/), hosted on Github pages. 

Using template from [gitHub.com/timlrx/tailwind-nextjs-starter-blog/](https://gitHub.com/timlrx/tailwind-nextjs-starter-blog/) with the following custom changes:

* A separate 'Portfolio' post section.
* Updating the Tailwind template, including color schemes, fonts, margin/padding/font sizes, along with edits to the HTML templates and components.
* Including the use of a Cloudflare image loader so Image Transformations API can be used.
* Set up a GitHub Actions workflow to host the website and automatically upload any changes pushed to the 'main' branch.
* Setting up new 'social media' icons, as the starter template didn't include all the social icons I required, such as KeyBase, Bluesky, and others.
* Update the Sitemap and RSS feed generators to include posts from the new 'Portfolio' section.

# Getting started

## Running local:

1. `nvm install lts/iron`. Requires at least Node.JS `v20.18.1` and NPM `v10.8.2`. See [nodejs.org/en/about/previous-releases](https://nodejs.org/en/about/previous-releases).

2. `npm install`. This will install the required packages.

3. `npm run start`. This starts the local server, which is accessible on [http://localhost:3000](http://localhost:3000).


## Running a production build:

Ensuring the requirements are met from the 'Running local:' section above;

1. `npm run build`. A static build will be produced in `/build`

2. If you have PHP installed on your system you can load the production buld in a local web server: `php -S localhost:8080 -t build/`

## Other:

* `npm run format`. This will Prettify the code.

* `npm run analyze`. This will analyse the bundle and open the results in a new browser window.

# Github pages

1. Enable Github pages in your repository, follow these instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

2. Enable a custom domain for your Github Pages site. [More info](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

3. If required, adjust the Github Pages work flow in this repository at: `.github/workflows/static.yml`

# Post data

Use `1970-01-01-EXAMPLE.mdx` as an example for post content, supporting HTML or Markdown.

Exaples found in:

* `data/blog/1970-01-01-EXAMPLE.mdx`
* `data/portfolio/1970-01-01-EXAMPLE.mdx`

# URLs
---

URLs to test:

* [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)
* [http://localhost:3000](http://localhost:3000)
* [http://localhost:3000/feed.xml](http://localhost:3000/feed.xml)
* [http://localhost:3000/blog/](http://localhost:3000/blog/)
* [http://localhost:3000/portfolio/](http://localhost:3000/portfolio/)
* [http://localhost:3000/tags/](http://localhost:3000/tags/)
* [http://localhost:3000/about/](http://localhost:3000/about/)
* [http://localhost:3000/tags/personal](http://localhost:3000/tags/personal/)