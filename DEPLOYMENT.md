# Deployment

## Required GitHub Secrets

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`
- (optional) `INVALIDATION_PATHS`

## Manual run

```bash
S3_BUCKET=my-bucket AWS_REGION=us-east-1 CLOUDFRONT_DISTRIBUTION_ID=XYZ ./scripts/deploy.sh
```
