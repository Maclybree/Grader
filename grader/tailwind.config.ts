import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F8FAFC",
        surface: "#FFFFFF",
        primary: "#2563EB",
        "primary-hover": "#1D4ED8",
        text: "#0F172A",
        muted: "#64748B",
        border: "#E2E8F0",
        success: "#16A34A",
        warning: "#D97706",
        danger: "#DC2626",
      },
      borderRadius: { "lg": "12px", "md": "8px" }
    },
  },
  plugins: [],
}
export default config
