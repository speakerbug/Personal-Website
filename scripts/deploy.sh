#!/usr/bin/env bash
set -euo pipefail

# Required environment variables
: "${S3_BUCKET:?S3_BUCKET is required}"
: "${AWS_REGION:?AWS_REGION is required}"
: "${CLOUDFRONT_DISTRIBUTION_ID:?CLOUDFRONT_DISTRIBUTION_ID is required}"

BUILD_DIR="${BUILD_DIR:-out}"
INVALIDATION_PATHS="${INVALIDATION_PATHS:-"/*"}"

echo "Deploying '$BUILD_DIR' to s3://$S3_BUCKET in region $AWS_REGION"

# Sync versioned assets first with long cache lifetime
aws s3 sync "$BUILD_DIR/_next" "s3://$S3_BUCKET/_next" \
  --cache-control "public, max-age=31536000, immutable" \
  --delete

# Sync remaining assets with no-cache headers
aws s3 sync "$BUILD_DIR" "s3://$S3_BUCKET" \
  --exclude "_next/*" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
  --paths "$INVALIDATION_PATHS"

echo "Deployment complete"
