import type { Metadata } from 'next';
import './globals.css';
import { Navigation, ScrollUI } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: {
    default: 'Xorian | Drone Surveying & Geospatial Intelligence',
    template: '%s | Xorian',
  },
  description:
    'Premium drone photogrammetry, LiDAR mapping, orthomosaic capture, and engineering-grade geospatial deliverables.',
  metadataBase: new URL('https://xorian.io'),
  openGraph: {
    title: 'Xorian',
    description:
      'Drone photogrammetry, LiDAR, aerial surveying, and geospatial intelligence for engineering teams.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollUI />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
