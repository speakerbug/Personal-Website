# Personal Website

This project converts a static HTML/CSS site into a Next.js 14 application using the App Router and TypeScript.

## Development

```bash
npm install
npm run dev
```

The site uses the `app/` directory with reusable components in `components/`, global styles in `scss/`, and static assets in `public/`.

### CSS Purging

Global styles are compiled and purged of unused selectors using [PurgeCSS](https://purgecss.com/).

- `npm run purge` – rebuilds `public/css/main.min.css`.
- `npm run build` – runs the purge step automatically before the Next.js build.

## Deployment

### Required GitHub Secrets

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`
- (optional) `INVALIDATION_PATHS`

### Manual run

```bash
S3_BUCKET=my-bucket AWS_REGION=us-east-1 CLOUDFRONT_DISTRIBUTION_ID=XYZ ./scripts/deploy.sh
```
