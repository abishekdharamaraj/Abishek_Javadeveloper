import Icon from './Icon.jsx';

export default function ThemeToggle({ theme, onToggle }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      className="theme-toggle"
      onClick={onToggle}
      title={`Switch to ${nextTheme} theme`}
      type="button"
    >
      <Icon name={nextTheme === 'light' ? 'sun' : 'moon'} />
    </button>
  );
}