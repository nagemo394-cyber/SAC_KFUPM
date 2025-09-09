# Use Council Brand Fonts

1) Put your real brand font files here:
   - Arabic font → `public/fonts/council-ar.woff2`
   - English font → `public/fonts/council-en.woff2`

2) No code changes needed. The site already references these names via `@font-face`:
   - `CouncilArabic`
   - `CouncilEnglish`

3) When you switch language:
   - Arabic prefers `CouncilArabic` (then English as fallback).
   - English prefers `CouncilEnglish` (then Arabic as fallback).

Tip: If you only have TTF/OTF, convert to WOFF2 (smaller) using any local converter tool.
