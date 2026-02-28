import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Habilitar optimización de imágenes para fotos de autos
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

export default nextConfig
