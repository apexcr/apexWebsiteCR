Deployment to production (apex-costarica.com)
============================================

This repository includes a GitHub Actions workflow to build and publish the site to GitHub Pages (branch `gh-pages`) with a CNAME of `apex-costarica.com`.

What I added:
- `.github/workflows/deploy-gh-pages.yml` — builds `main` and publishes `dist` to `gh-pages` with CNAME set.

Important notes before you push and enable the site:

1. Push the workflow to `main` from your machine (GitHub blocks creating/updating workflow files via a token without `workflow` scope). If you already pushed it and the workflow runs, it will publish to `gh-pages` automatically.

2. DNS configuration for `apex-costarica.com` (GitHub Pages)
   - In your DNS provider, create the following A records for the apex domain:
     - `@` → `185.199.108.153`
     - `@` → `185.199.109.153`
     - `@` → `185.199.110.153`
     - `@` → `185.199.111.153`
   - Or, if you prefer a subdomain (`www`), create a CNAME:
     - `www` → `<your-github-username>.github.io`

3. Alternatively, use Cloudflare Pages
   - Cloudflare Pages will deploy `dist` automatically if you connect the repo and set build command `npm run build` and output `dist`.
   - Cloudflare also supports the `functions/` folder in this project (for the serverless endpoints).

4. If the GitHub Actions workflow fails to push to `gh-pages` due to authentication, you can run the deploy locally:

   Option A: deploy using gh-pages over HTTPS with a token

```bash
cd /Users/marianovegaabarca/Documents/apexwebsite/apexWebsiteCR
npm ci
npm run build
npx gh-pages -d dist -r "https://<USERNAME>:<TOKEN>@github.com/apexcr/apexWebsiteCR.git"
```

   Option B: deploy using SSH (make sure your public key is added to GitHub)

```bash
cd /Users/marianovegaabarca/Documents/apexwebsite/apexWebsiteCR
npm ci
npm run build
npx gh-pages -d dist
```

5. After successful publish to `gh-pages`, go to GitHub repo → Settings → Pages and confirm the custom domain `apex-costarica.com` is set and enforce HTTPS.

If you want, I can also prepare a Cloudflare Pages guide and a workflow for deploying there instead. Tell me which path you prefer and I will continue.
