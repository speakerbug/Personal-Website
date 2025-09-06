# Migration Report

## Design Tokens

### Colors
| Token | Value |
|-------|-------|
| blue | #0061f2 |
| indigo | #5800e8 |
| purple | #6900c7 |
| pink | #e30059 |
| red | #e81500 |
| orange | #f76400 |
| yellow | #f4a100 |
| green | #00ac69 |
| teal | #00ba94 |
| cyan | #00cfd5 |
| white | #fff |
| black | #000 |
| gray | #687281 |
| gray-dark | #323f52 |
| primary | #0061f2 |
| secondary | #6900c7 |
| success | #00ac69 |
| info | #00cfd5 |
| warning | #f4a100 |
| danger | #e81500 |
| light | #eff3f9 |
| dark | #1f2d41 |
| red-soft | #eec7c7 |
| orange-soft | #f1d6c7 |
| yellow-soft | #f0e3c7 |
| green-soft | #bfe5dc |
| teal-soft | #bfe8e5 |
| cyan-soft | #bfecf2 |
| blue-soft | #bfd6f8 |
| indigo-soft | #d1c2f6 |
| purple-soft | #d4c2ef |
| pink-soft | #edc2d9 |

### Spacing
| Scale | Value |
|-------|-------|
|0|0|
|1|4px|
|2|8px|
|3|12px|
|4|16px|
|5|24px|
|6|32px|

### Typography
- Font families defined for sans and mono.
- Font sizes: xs (.75rem) to 3xl (1.875rem).
- Line heights: tight (1.2) to relaxed (1.7).

### Breakpoints
| Name | Width |
|------|-------|
|sm|36em|
|md|48em|
|lg|62em|
|xl|75em|

## Consolidation
- Extracted base reset and typography rules into dedicated partials.
- Centralised container and row layout helpers.
- Added mixins for media queries, focus rings, truncation and visually hidden utilities.

## Specificity
- Core selectors maintained to avoid regressions; no reductions applied except through mixin-based utilities.

## Legacy
- The original compiled stylesheet has been moved into `_legacy.scss` pending deeper refactor. This preserves the exact visual output while providing a path for gradual migration and removes the redundant `styles.css` file.
- TODO: progressively migrate rules from `_legacy.scss` into modular partials and replace hard coded values with tokens and mixins.
