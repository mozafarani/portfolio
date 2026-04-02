export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#FACC15",
        background: "#0D1117",
        foreground: "#EDEDED",
        card: "#161B22",
        surface: "#131820",
        mutedText: "#A1A1AA",
        accent: "#22C55E",
        borderSubtle: "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      maxWidth: {
        // Fills wide monitors (e.g. 27") instead of a fixed ~1152px column; caps so lines don’t get absurd on ultrawide.
        content:
          "min(calc(100vw - 2.5rem), min(92vw, 118rem))",
      },
      spacing: {
        sectionY: "clamp(2rem, 4vw, 3.25rem)",
        sectionGap: "clamp(0.875rem, 2vw, 1.5rem)",
        sectionStack: "clamp(2.5rem, 6vw, 4rem)",
      },
      borderRadius: {
        ui: "0.75rem",
      },
      boxShadow: {
        card: "0 25px 50px -12px rgb(0 0 0 / 0.35)",
      },
    },
  },
  plugins: [],
};
