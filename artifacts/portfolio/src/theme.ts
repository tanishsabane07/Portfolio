/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║           PORTFOLIO THEME — EDIT COLORS HERE            ║
 * ╠══════════════════════════════════════════════════════════╣
 * ║  Change any hex value below to restyle the entire site. ║
 * ║  Save the file — the browser hot-reloads instantly.     ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const baseTheme = {
	// ── Backgrounds ─────────────────────────────────────────
	bg: '#0A0A0A', // Main page background
	bgCard: '#0D0D0D', // Cards, alternate sections
	bgNavbar: '#0A0A0A', // Navbar background

	// ── Primary accent (neon cyan by default) ───────────────
	primary: '#00E5FF', // Borders, CTAs, highlights, hard shadows

	// ── Secondary accent (electric purple by default) ───────
	secondary: '#B347FF', // Alternate borders, badges, press shadows

	// ── Text ────────────────────────────────────────────────
	text: '#FFFFFF', // Headings and primary text
	textMuted: '#AAAAAA', // Body / paragraph text
	textFaint: '#555555', // Subtle labels, disabled states

	// ── Borders ─────────────────────────────────────────────
	border: '#00E5FF', // Main border color (matches primary)
	borderSubtle: '#333333', // Secondary / inner borders

	// ── Hero grid ───────────────────────────────────────────
	gridColor: 'rgba(0, 229, 255, 0.05)', // Background dot-grid tint

	// ── Logo ────────────────────────────────────────────────
	logoBg: '#00E5FF', // Navbar logo background
	logoText: '#000000', // Navbar logo text color

	// ── Shadow helpers (neubrutalism: hard offset, no blur) ─
	//  Change the color inside to update ALL shadows at once.
	shadow: (color = '#00E5FF', size = 4) => `${size}px ${size}px 0px ${color}`,
} as const;

const softQuantumTeal = {
    bg: '#1E1E1E', // Main page background
    bgCard: '#252525', // Cards, alternate sections
    bgNavbar: '#1E1E1E', // Navbar background

    primary: '#14B8A6', // Soft teal: Borders, CTAs, highlights
    secondary: '#6366F1', // Muted indigo: Alternate elements

    text: '#E0E0E0', // Headings and primary text
    textMuted: '#9E9E9E', // Body text
    textFaint: '#616161', // Subtle labels

    border: '#14B8A6', // Main border color (matches primary)
    borderSubtle: '#333333', // Secondary borders

    gridColor: 'rgba(20, 184, 166, 0.04)', // Background dot-grid tint

    logoBg: '#14B8A6', // Navbar logo background
    logoText: '#FFFFFF', // Navbar logo text color

    shadow: (color = '#14B8A6', size = 4) => `${size}px ${size}px 0px ${color}`,
} as const;

const arcticMonolith = {
    bg: '#FFFFFF', // Main page background
    bgCard: '#F8FAFC', // Cards, alternate sections
    bgNavbar: '#FFFFFF', // Navbar background

    primary: '#38BDF8', // Frost blue: Borders, CTAs, highlights
    secondary: '#94A3B8', // Muted slate: Alternate elements

    text: '#0F172A', // Headings and primary text
    textMuted: '#64748B', // Body text
    textFaint: '#94A3B8', // Subtle labels

    border: '#38BDF8', // Main border color (matches primary)
    borderSubtle: '#E2E8F0', // Secondary borders

    gridColor: 'rgba(56, 189, 248, 0.05)', // Background dot-grid tint

    logoBg: '#38BDF8', // Navbar logo background
    logoText: '#FFFFFF', // Navbar logo text color

    shadow: (color = '#38BDF8', size = 4) => `${size}px ${size}px 0px ${color}`,
} as const;



export const themePresets = {
	baseTheme,
	neonGreen: {
		...baseTheme,
		primary: '#00FF88',
		secondary: '#FF6600',
		border: '#00FF88',
		gridColor: 'rgba(0,255,136,0.05)',
		logoBg: '#00FF88',
	} as const,
	hotPink: {
		...baseTheme,
		primary: '#FF3CAC',
		secondary: '#FFDD00',
		border: '#FF3CAC',
		gridColor: 'rgba(255,60,172,0.05)',
		logoBg: '#FF3CAC',
		logoText: '#000',
	} as const,
	iceBlue: {
		...baseTheme,
		primary: '#60CFFF',
		secondary: '#FF9F43',
		border: '#60CFFF',
		gridColor: 'rgba(96,207,255,0.05)',
		logoBg: '#60CFFF',
		logoText: '#000',
	} as const,
} as const;

export const theme = themePresets.iceBlue;

// ── Quick-swap presets ────────────────────────────────────
// To apply a preset, change the export above to one of:
// export const theme = themePresets.neonGreen;
// export const theme = themePresets.hotPink;
// export const theme = themePresets.iceBlue;