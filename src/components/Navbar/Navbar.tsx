import { useState, useEffect } from 'react';
import ThemeSwitcher from '../Theme/ThemeSwitcher';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-[1000] transition-all duration-300"
      style={{
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold no-underline"
          style={{ fontFamily: 'var(--font-code)', color: 'var(--accent)' }}
        >
          &lt;/MM&gt;
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-medium no-underline transition-colors duration-300 hover:!text-[var(--accent)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex btn btn-primary !py-2 !px-5 !text-sm"
          >
            Hire Me
          </a>
          <ThemeSwitcher />
          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1 p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-all"
              style={{ background: 'var(--text-primary)' }}
            />
            <span
              className="block w-5 h-0.5 transition-all"
              style={{ background: 'var(--text-primary)' }}
            />
            <span
              className="block w-5 h-0.5 transition-all"
              style={{ background: 'var(--text-primary)' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden py-4 px-6"
          style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-color)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block py-3 text-sm font-medium no-underline"
              style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border-color)' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
