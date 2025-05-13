// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // 使用 class 方案切换暗黑模式（通常是添加 .dark）
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00be46', // 蓝色
          foreground: '#ffffff',
        },
        background: '#ffffff',
        foreground: '#000000',
        secondary: {
          DEFAULT: '#f3f4f6',
          foreground: '#1f2937',
        },
        muted: '#f9fafb',
        accent: '#fef3c7',
        destructive: '#ef4444',
        // 其他你需要用到的颜色
      },
    },
  },
  plugins: [],
}

export default config
