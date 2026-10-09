import createNextIntlPlugin from 'next-intl/plugin';
import fs from 'fs';
import path from 'path';

// Automatic Asset Synchronization for Uploaded DentAktif Logos & Doctors
try {
  const publicDir = path.join(process.cwd(), 'public', 'images', 'doctors');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const assetMap = [
    {
      src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499455400.png',
      dest: path.join(process.cwd(), 'public', 'images', 'logo.png'),
    },
    {
      src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499468898.png',
      dest: path.join(process.cwd(), 'public', 'images', 'logo-white.png'),
    },
    {
      src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499533565.jpg',
      dest: path.join(process.cwd(), 'public', 'images', 'doctors', 'dt-abdullah-omur.png'),
    },
    {
      src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499537098.jpg',
      dest: path.join(process.cwd(), 'public', 'images', 'doctors', 'dt-hilal-mutlu-er.png'),
    },
    {
      src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791499540315.jpg',
      dest: path.join(process.cwd(), 'public', 'images', 'doctors', 'dt-busra-tomo.png'),
    },
    {
      src: 'C:\\Users\\berkay\\.gemini\\antigravity-ide\\brain\\747071f5-b147-4cd3-b768-a3470867598a\\.user_uploaded\\media_1791503078882.png',
      dest: path.join(process.cwd(), 'public', 'images', 'health-tourism-certificate.png'),
    },
  ];

  for (const item of assetMap) {
    if (fs.existsSync(item.src)) {
      fs.copyFileSync(item.src, item.dest);
    }
  }
} catch (err) {
  console.error('Failed to auto-sync assets:', err);
}

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'dentaktifglobal.com',
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
