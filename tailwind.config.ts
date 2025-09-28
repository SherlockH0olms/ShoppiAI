import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        // Original shadcn/ui colors
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Shoppi-specific colors
        shoppi: {
          "primary-bg": "rgb(255, 255, 255)",
          "secondary-bg": "rgb(240, 244, 249)",
          "primary-text": "rgb(27, 28, 29)",
          "secondary-text": "rgb(87, 91, 95)",
          "disabled-text": "rgba(31, 31, 31, 0.38)",
          border: "rgb(196, 199, 197)",
          "accent-blue": "rgb(26, 115, 232)",
          "gradient-start": "rgb(66, 133, 244)",
          "gradient-mid": "rgb(155, 114, 203)",
          "gradient-end": "rgb(217, 101, 112)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "32px",
      },
      fontFamily: {
        "google-sans": [
          "Google Sans Flex",
          "Google Sans",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        "google-sans-regular": [
          "Google Sans",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "shoppi-xl": ["45px", { lineHeight: "1.2", letterSpacing: "-0.5px" }],
        "shoppi-lg": ["28px", { lineHeight: "1.2", letterSpacing: "-0.84px" }],
        "shoppi-base": ["14px", "1.4"],
        "shoppi-sm": ["12px", "1.4"],
      },
      spacing: {
        "18": "72px",
      },
      backgroundImage: {
        "shoppi-gradient":
          "linear-gradient(90deg, rgb(66, 133, 244) 0%, rgb(155, 114, 203) 50%, rgb(217, 101, 112) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
