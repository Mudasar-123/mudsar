export default function Footer() {
  return (
    <footer
      className="py-8 text-center"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className="section-container !py-0">
        <a
          href="#home"
          className="text-lg font-bold no-underline mb-4 inline-block"
          style={{ fontFamily: 'var(--font-code)', color: 'var(--accent)' }}
        >
          &lt;/MM&gt;
        </a>

        <div className="flex justify-center gap-6 mb-4">
          {[
            { icon: 'fab fa-github', href: 'https://github.com/Mudasar-123' },
            { icon: 'fas fa-envelope', href: 'mailto:muhammadmudasar0625@gmail.com' },
            { icon: 'fas fa-phone', href: 'tel:+923098624009' },
          ].map((social) => (
            <a
              key={social.icon}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-lg transition-all hover:scale-110"
              style={{ color: 'var(--text-muted)' }}
            >
              <i className={social.icon} />
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} Muhammad Mudasar. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
