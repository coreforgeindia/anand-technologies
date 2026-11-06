import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Anand Technologies',
    short_name: 'Anand Tech',
    description: 'RF and microwave components engineered in Bengaluru, India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00B8B8',
    icons: [
      {
        src: '/favicon.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
