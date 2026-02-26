const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// The new root block with the 4 themes
const newRoot = `/* ===== Design System Theming ===== */

:root {
  /* Fonts & Animations */
  --font-orbitron: 'Orbitron', sans-serif;
  --font-montserrat: 'Montserrat', sans-serif;
  --font-poppins: 'Poppins', sans-serif;
  --transition-snappy: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Spider Dark (Default) */
html[data-theme="spider-dark"], :root {
  --primary: #ff2a2d;
  --primary-dark: #cc1012;
  --primary-glow: rgba(255, 42, 45, 0.4);
  --bg-main: #030303;
  --bg-secondary: #050b14;
  --bg-tertiary: #0a1628;
  --text-main: #F8F9FA;
  --text-dim: rgba(248, 249, 250, 0.65);
  --glass-bg: rgba(5, 11, 20, 0.65);
  --border-lit: rgba(255, 255, 255, 0.1);
}

/* Spider Light */
html[data-theme="spider-light"] {
  --primary: #e62429;
  --primary-dark: #cc1012;
  --primary-glow: rgba(230, 36, 41, 0.4);
  --bg-main: #F8F9FA;
  --bg-secondary: #e9ecef;
  --bg-tertiary: #dee2e6;
  --text-main: #030303;
  --text-dim: rgba(3, 3, 3, 0.75);
  --glass-bg: rgba(255, 255, 255, 0.7);
  --border-lit: rgba(0, 0, 0, 0.1);
}

/* Dragon Dark */
html[data-theme="dragon-dark"] {
  --primary: #32CD32;
  --primary-dark: #228B22;
  --primary-glow: rgba(50, 205, 50, 0.4);
  --bg-main: #021a05;
  --bg-secondary: #042a0b;
  --bg-tertiary: #063b11;
  --text-main: #efffed;
  --text-dim: rgba(239, 255, 237, 0.65);
  --glass-bg: rgba(5, 20, 10, 0.75);
  --border-lit: rgba(255, 255, 255, 0.1);
}

/* Dragon Light */
html[data-theme="dragon-light"] {
  --primary: #228B22;
  --primary-dark: #006400;
  --primary-glow: rgba(34, 139, 34, 0.4);
  --bg-main: #f0fdf0;
  --bg-secondary: #e0f5e0;
  --bg-tertiary: #ccebcc;
  --text-main: #021a05;
  --text-dim: rgba(2, 26, 5, 0.75);
  --glass-bg: rgba(255, 255, 255, 0.7);
  --border-lit: rgba(0, 0, 0, 0.1);
}`;

// Replace root block
css = css.replace(/:root\s*\{[\s\S]*?\}/, newRoot);

// Global variable replacements
css = css.replace(/var\(--red\)/g, 'var(--primary)');
css = css.replace(/var\(--red-dark\)/g, 'var(--primary-dark)');
css = css.replace(/var\(--red-glow\)/g, 'var(--primary-glow)');
css = css.replace(/var\(--black\)/g, 'var(--bg-main)');
css = css.replace(/var\(--blue-dark\)/g, 'var(--bg-secondary)');
css = css.replace(/var\(--blue-mid\)/g, 'var(--bg-tertiary)');
css = css.replace(/var\(--white\)/g, 'var(--text-main)');
css = css.replace(/var\(--white-dim\)/g, 'var(--text-dim)');
css = css.replace(/var\(--black-glass\)/g, 'var(--glass-bg)');

// Write back
fs.writeFileSync(cssPath, css, 'utf8');
console.log('CSS updated successfully');
