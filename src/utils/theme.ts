// Generates MD3-compatible tonal palette from a hex seed color.
// Used client-side via inline script in BaseLayout.
// Algorithm: simplified HCT-based tonal generation.

export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [h * 360, s * 100, l * 100];
}

export function hslToHex(h: number, s: number, l: number): string {
  h /= 360; s /= 100; l /= 100;
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return '#' + [r, g, b].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
}

// Generates a CSS custom properties block for MD3 theming from a seed hex color
export function generateThemeCSS(seedHex: string, scheme: 'light' | 'dark'): string {
  const [r, g, b] = hexToRgb(seedHex);
  const [h, s] = rgbToHsl(r, g, b);

  const tone = (lightness: number) => hslToHex(h, Math.min(s, 80), lightness);

  if (scheme === 'light') {
    return `
      --md-sys-color-primary: ${tone(35)};
      --md-sys-color-on-primary: ${tone(98)};
      --md-sys-color-primary-container: ${tone(90)};
      --md-sys-color-on-primary-container: ${tone(10)};
      --md-sys-color-secondary: ${hslToHex((h + 30) % 360, Math.min(s * 0.5, 40), 40)};
      --md-sys-color-on-secondary: ${tone(98)};
      --md-sys-color-secondary-container: ${hslToHex((h + 30) % 360, Math.min(s * 0.3, 30), 90)};
      --md-sys-color-on-secondary-container: ${hslToHex((h + 30) % 360, Math.min(s * 0.5, 40), 10)};
      --md-sys-color-surface: ${hslToHex(h, Math.min(s * 0.1, 6), 98)};
      --md-sys-color-surface-container: ${hslToHex(h, Math.min(s * 0.1, 6), 94)};
      --md-sys-color-surface-container-high: ${hslToHex(h, Math.min(s * 0.1, 6), 92)};
      --md-sys-color-surface-container-highest: ${hslToHex(h, Math.min(s * 0.1, 6), 90)};
      --md-sys-color-surface-container-low: ${hslToHex(h, Math.min(s * 0.1, 6), 96)};
      --md-sys-color-on-surface: ${hslToHex(h, Math.min(s * 0.1, 10), 10)};
      --md-sys-color-on-surface-variant: ${hslToHex(h, Math.min(s * 0.15, 15), 30)};
      --md-sys-color-outline: ${hslToHex(h, Math.min(s * 0.15, 15), 50)};
      --md-sys-color-outline-variant: ${hslToHex(h, Math.min(s * 0.1, 10), 80)};
      --md-sys-color-background: ${hslToHex(h, Math.min(s * 0.1, 6), 98)};
      --md-sys-color-on-background: ${hslToHex(h, Math.min(s * 0.1, 10), 10)};
    `;
  } else {
    return `
      --md-sys-color-primary: ${tone(80)};
      --md-sys-color-on-primary: ${tone(20)};
      --md-sys-color-primary-container: ${tone(30)};
      --md-sys-color-on-primary-container: ${tone(90)};
      --md-sys-color-secondary: ${hslToHex((h + 30) % 360, Math.min(s * 0.4, 35), 80)};
      --md-sys-color-on-secondary: ${hslToHex((h + 30) % 360, Math.min(s * 0.4, 35), 20)};
      --md-sys-color-secondary-container: ${hslToHex((h + 30) % 360, Math.min(s * 0.3, 30), 30)};
      --md-sys-color-on-secondary-container: ${hslToHex((h + 30) % 360, Math.min(s * 0.4, 35), 90)};
      --md-sys-color-surface: ${hslToHex(h, Math.min(s * 0.1, 6), 6)};
      --md-sys-color-surface-container: ${hslToHex(h, Math.min(s * 0.1, 6), 12)};
      --md-sys-color-surface-container-high: ${hslToHex(h, Math.min(s * 0.1, 6), 17)};
      --md-sys-color-surface-container-highest: ${hslToHex(h, Math.min(s * 0.1, 6), 22)};
      --md-sys-color-surface-container-low: ${hslToHex(h, Math.min(s * 0.1, 6), 10)};
      --md-sys-color-on-surface: ${hslToHex(h, Math.min(s * 0.1, 10), 90)};
      --md-sys-color-on-surface-variant: ${hslToHex(h, Math.min(s * 0.15, 15), 80)};
      --md-sys-color-outline: ${hslToHex(h, Math.min(s * 0.15, 15), 60)};
      --md-sys-color-outline-variant: ${hslToHex(h, Math.min(s * 0.1, 10), 30)};
      --md-sys-color-background: ${hslToHex(h, Math.min(s * 0.1, 6), 6)};
      --md-sys-color-on-background: ${hslToHex(h, Math.min(s * 0.1, 10), 90)};
    `;
  }
}
