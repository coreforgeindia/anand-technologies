import type { NextConfig } from 'next'
import {
  legacyCategoryRedirects,
  legacyDatasheetRedirects,
  legacyProductRedirects,
} from './src/lib/legacy-redirects'

const canonicalSiteUrl = 'https://anandtechnologies.co.in'

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      ...legacyProductRedirects.map(({ source, destination }) => ({
        source,
        destination: `${canonicalSiteUrl}${destination}`,
        permanent: true,
      })),
      ...legacyCategoryRedirects.map(({ source, destination }) => ({
        source,
        destination: `${canonicalSiteUrl}${destination}`,
        permanent: true,
      })),
      ...legacyDatasheetRedirects.map(({ source, destination }) => ({
        source,
        destination: `${canonicalSiteUrl}${destination}`,
        permanent: true,
      })),
      {
        source: '/index.html',
        destination: `${canonicalSiteUrl}/`,
        permanent: true,
      },
      {
        source: '/product/at-ant-qgsm-ufl13-0-18-3-0-external',
        destination: `${canonicalSiteUrl}/products/at-ant-qgsm-ufl-018-30`,
        permanent: true,
      },
      {
        source: '/about-us',
        destination: `${canonicalSiteUrl}/about`,
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.anandtechnologies.co.in' }],
        destination: `${canonicalSiteUrl}/:path*`,
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://anandtechnologies.co.in' },
          { key: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ]
  },
}

export default nextConfig

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
