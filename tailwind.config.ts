import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          "charcoal-black": "#0E0E0E",
          "charcoal-black-secondary": "#1C1C1C",
          "charcoal-black-tertiary": "#2A2A2A",
          "primary-green": "#00ff02", // Tropical bright green
          "primary-green-dark": "#00cc00", // Darker shade
          "vibrant-green": "#00ff02", // Same bright tropical green
          "vibrant-green-dark": "#00cc00", // Darker shade
          "neon-green": "#00ff41", // Additional neon variation
          "neon-green-dark": "#00e639", // Darker neon variation
          "lime-green": "#32ff32", // Lighter lime variation
          "lime-green-dark": "#28cc28", // Darker lime variation
          "smoke-gray": "#B0B0B0",
          "soft-white": "#F2F2F2",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px #00ff02, 0 0 10px #00ff02, 0 0 15px #00ff02",
            textShadow: "0 0 5px #00ff02",
          },
          "50%": {
            boxShadow: "0 0 10px #00ff02, 0 0 20px #00ff02, 0 0 30px #00ff02",
            textShadow: "0 0 10px #00ff02",
          },
        },
        "tropical-glow": {
          "0%, 100%": {
            backgroundColor: "#00ff02",
            boxShadow: "0 0 20px rgba(0, 255, 2, 0.5)",
          },
          "50%": {
            backgroundColor: "#00cc00",
            boxShadow: "0 0 30px rgba(0, 255, 2, 0.8)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "tropical-glow": "tropical-glow 3s ease-in-out infinite",
      },
      backgroundImage: {
        "tropical-gradient": "linear-gradient(135deg, #00ff02 0%, #00cc00 100%)",
        "neon-gradient": "linear-gradient(135deg, #00ff02 0%, #00ff41 50%, #00cc00 100%)",
        "lime-gradient": "linear-gradient(135deg, #32ff32 0%, #00ff02 50%, #28cc28 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
