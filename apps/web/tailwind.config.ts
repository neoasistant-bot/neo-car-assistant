import type { Config } from 'tailwindcss'

const config: Config = {
  // Solo aplica clases de Tailwind donde se usen — no conflicto con MUI
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Importante: desactivar preflight para no pisar los estilos de MUI
  corePlugins: {
    preflight: false,
  },
  // Prefijo para evitar colisiones con clases de MUI
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        'automotive-blue': '#1565C0',
        'alert-red': '#D32F2F',
        'alert-yellow': '#F9A825',
        'alert-green': '#388E3C',
      },
    },
  },
  plugins: [],
}

export default config
