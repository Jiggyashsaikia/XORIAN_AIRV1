'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Outputs' },
  { href: '/lidar', label: 'LiDAR' },
  { href: '/photogrammetry', label: 'Photogrammetry' },
  { href: '/equipment', label: 'Equipment' },
  { href: '/industries', label: 'Industries' },
  { href: '/blog', label: 'Blog' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'nav scrolled' : 'nav'}>
      <div className="nav-inner">
        <Link className="logo" href="/">
          <span className="logo-mark" />
          XORIAN
        </Link>
        <div className="links">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <Link className="button button-primary" href="/contact">
            Request Survey
          </Link>
        </div>
        <Menu className="menu" aria-label="Menu" />
      </div>
    </nav>
  );
}

export function ScrollUI() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="progress" style={{ width: `${progress}%` }} />;
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner shell">
        <span>© 2026 Xorian Geospatial Systems</span>
        <span>Drone Photogrammetry • LiDAR Mapping • Survey Intelligence</span>
      </div>
    </footer>
  );
}
