import { useTheme } from '../../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes: Array<{ id: 'dark' | 'light' | 'cyberpunk' | 'sunset'; icon: string }> = [
    { id: 'dark', icon: 'fas fa-moon' },
    { id: 'light', icon: 'fas fa-sun' },
    { id: 'cyberpunk', icon: 'fas fa-bolt' },
    { id: 'sunset', icon: 'fas fa-fire' },
  ];

  const currentIndex = themes.findIndex(t => t.id === theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  return (
    <button
      onClick={() => setTheme(nextTheme.id)}
      className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 border-none"
      style={{
        background: 'var(--bg-card)',
        color: 'var(--text-secondary)',
        border: '1px solid var(--border-color)',
      }}
      aria-label={`Switch to ${nextTheme.id} theme`}
      title={`Current: ${theme} — Click for ${nextTheme.id}`}
    >
      <i className={themes[currentIndex].icon} />
    </button>
  );
}
