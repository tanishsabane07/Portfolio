import { theme } from './theme';

type ThemeVariables = Record<string, string>;

function hexToHslChannels(hex: string): string {
  const normalized = hex.replace('#', '');
  const isShort = normalized.length === 3;
  const full = isShort
    ? normalized
        .split('')
        .map((c) => c + c)
        .join('')
    : normalized;

  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h *= 60;
    if (h < 0) h += 360;
  }

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return `${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

export function createThemeVariables(): ThemeVariables {
  return {
    '--button-outline': 'rgba(255, 255, 255, 0.1)',
    '--badge-outline': 'rgba(255, 255, 255, 0.05)',
    '--opaque-button-border-intensity': '9',
    '--elevate-1': 'rgba(255, 255, 255, 0.04)',
    '--elevate-2': 'rgba(255, 255, 255, 0.09)',

    '--theme-bg': theme.bg,
    '--theme-bg-card': theme.bgCard,
    '--theme-bg-navbar': theme.bgNavbar,
    '--theme-primary': theme.primary,
    '--theme-secondary': theme.secondary,
    '--theme-text': theme.text,
    '--theme-text-muted': theme.textMuted,
    '--theme-text-faint': theme.textFaint,
    '--theme-border': theme.border,
    '--theme-border-subtle': theme.borderSubtle,
    '--theme-grid-color': theme.gridColor,
    '--theme-logo-bg': theme.logoBg,
    '--theme-logo-text': theme.logoText,
    '--theme-shadow-primary': theme.shadow(theme.primary, 4),
    '--theme-shadow-secondary': theme.shadow(theme.secondary, 4),

    '--background': hexToHslChannels(theme.bg),
    '--foreground': hexToHslChannels(theme.text),
    '--border': hexToHslChannels(theme.border),

    '--card': hexToHslChannels(theme.bgCard),
    '--card-foreground': hexToHslChannels(theme.text),
    '--card-border': hexToHslChannels(theme.borderSubtle),

    '--popover': hexToHslChannels(theme.bgCard),
    '--popover-foreground': hexToHslChannels(theme.text),
    '--popover-border': hexToHslChannels(theme.borderSubtle),

    '--primary': hexToHslChannels(theme.primary),
    '--primary-foreground': hexToHslChannels(theme.logoText),
    '--secondary': hexToHslChannels(theme.secondary),
    '--secondary-foreground': hexToHslChannels(theme.text),

    '--muted': hexToHslChannels(theme.borderSubtle),
    '--muted-foreground': hexToHslChannels(theme.textMuted),
    '--accent': hexToHslChannels(theme.borderSubtle),
    '--accent-foreground': hexToHslChannels(theme.text),

    '--destructive': hexToHslChannels('#EF4444'),
    '--destructive-foreground': hexToHslChannels(theme.text),

    '--input': hexToHslChannels(theme.borderSubtle),
    '--ring': hexToHslChannels(theme.primary),

    '--chart-1': hexToHslChannels(theme.primary),
    '--chart-2': hexToHslChannels(theme.secondary),
    '--chart-3': hexToHslChannels('#10B981'),
    '--chart-4': hexToHslChannels('#FFC107'),
    '--chart-5': hexToHslChannels('#FF1F6D'),

    '--sidebar': hexToHslChannels(theme.bgNavbar),
    '--sidebar-foreground': hexToHslChannels(theme.text),
    '--sidebar-border': hexToHslChannels(theme.borderSubtle),
    '--sidebar-primary': hexToHslChannels(theme.primary),
    '--sidebar-primary-foreground': hexToHslChannels(theme.logoText),
    '--sidebar-accent': hexToHslChannels(theme.borderSubtle),
    '--sidebar-accent-foreground': hexToHslChannels(theme.text),
    '--sidebar-ring': hexToHslChannels(theme.primary),

    '--app-font-sans': "'Space Grotesk', sans-serif",
    '--app-font-serif': 'Georgia, serif',
    '--app-font-mono': "'JetBrains Mono', monospace",
    '--radius': '0rem',

    '--shadow-2xs': theme.shadow(theme.primary, 2),
    '--shadow-xs': theme.shadow(theme.primary, 3),
    '--shadow-sm': theme.shadow(theme.primary, 4),
    '--shadow': theme.shadow(theme.primary, 4),
    '--shadow-md': theme.shadow(theme.primary, 5),
    '--shadow-lg': theme.shadow(theme.primary, 6),
    '--shadow-xl': theme.shadow(theme.primary, 8),
    '--shadow-2xl': theme.shadow(theme.primary, 8),
    '--tracking-normal': '0em',
    '--spacing': '0.25rem',

    '--sidebar-primary-border': 'hsl(var(--sidebar-primary))',
    '--sidebar-accent-border': 'hsl(var(--sidebar-accent))',
    '--primary-border': 'hsl(var(--primary))',
    '--secondary-border': 'hsl(var(--secondary))',
    '--muted-border': 'hsl(var(--muted))',
    '--accent-border': 'hsl(var(--accent))',
    '--destructive-border': 'hsl(var(--destructive))',
  };
}

export function applyThemeVariables(element: HTMLElement = document.documentElement): void {
  const variables = createThemeVariables();
  for (const [name, value] of Object.entries(variables)) {
    element.style.setProperty(name, value);
  }
}
