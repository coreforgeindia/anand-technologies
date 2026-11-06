# SEO Page Inventory

Inventory of the public pages configured for indexing and included in the generated sitemap.

## Page count

| Page group | URL pattern | Pages |
| --- | --- | ---: |
| Core pages | `/`, `/about`, `/products`, `/industries`, `/solutions`, `/resources`, `/contact`, `/privacy`, `/terms` | 9 |
| Product details | `/products/{product-slug}` | 79 |
| Resource articles | `/resources/{article-slug}` | 12 |
| **Total sitemap URLs** |  | **100** |

The product detail count comes from the current product catalog. The resource article count includes six existing articles and six new engineering guides.

The current site contains 100 real, canonical pages; a Search Console export contained 406 discovered URLs (391 distinct paths), not 406 current content pages. Of those distinct paths, 263 now redirect to current equivalents: legacy product permalinks to matching catalog items, old WordPress upload URLs to matching datasheets, category archives to relevant product listings, and `/about-us` to `/about`. The `/index.html` alias redirects to the home page.

The other 128 distinct paths are removed account/admin endpoints, obsolete feeds, the old demo post, or product URLs with no matching current item. They have no equivalent current content and should not be redirected to unrelated pages or added to the sitemap. Search Console may continue showing old URLs until it recrawls them; sitemap submission does not guarantee indexing.

## Resource article URLs

- https://anandtechnologies.co.in/resources/rf-filter-selection-guide
- https://anandtechnologies.co.in/resources/antenna-gain-selection-defense
- https://anandtechnologies.co.in/resources/5g-nr-rf-challenges
- https://anandtechnologies.co.in/resources/rf-cable-assembly-selection-guide
- https://anandtechnologies.co.in/resources/rf-power-splitter-vs-coupler
- https://anandtechnologies.co.in/resources/rf-lightning-arrestor-installation-guide
- https://anandtechnologies.co.in/resources/choose-antenna-manufacturer-india
- https://anandtechnologies.co.in/resources/types-of-rf-antennas-vhf-uhf-gsm-yagi
- https://anandtechnologies.co.in/resources/cavity-duplexers-vs-diplexers
- https://anandtechnologies.co.in/resources/rf-band-pass-filter-specifications-telecom-defense
- https://anandtechnologies.co.in/resources/custom-microwave-components-defense-aerospace-india
- https://anandtechnologies.co.in/resources/rf-components-iot-automotive-industrial

## Indexing configuration

- Preferred site host: https://anandtechnologies.co.in
- Sitemap index: https://anandtechnologies.co.in/sitemap-index.xml
- Crawler rules: https://anandtechnologies.co.in/robots.txt
- Every listed page has a self-referencing canonical URL, hreflang alternates, a page-specific title and description, and Open Graph/Twitter metadata.
- Product detail pages include Product structured data; resource articles include Article and FAQPage structured data where applicable; the home page includes Organization, LocalBusiness, and WebSite structured data.
- Sitemap index: `https://anandtechnologies.co.in/sitemap-index.xml`; it references the page and image sitemaps.
- API endpoints and the not-found page are not sitemap entries. Product-filter query strings are not separate canonical pages.

In Google Search Console, add `https://anandtechnologies.co.in/sitemap-index.xml` under **Sitemaps** for the matching HTTPS site property. Submission requests discovery; Google determines whether and when individual URLs are indexed.
