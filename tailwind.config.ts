import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
		fontFamily : {
			poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
			dm: ['var(--font-dm)', 'system-ui', 'sans-serif'],
		},
  		colors: {
  			primary: 'hsl(var(--primary))',
  		},
		transitionDuration: {
			DEFAULT: '500ms',
		},
  	}
  },
  plugins: [tailwindAnimate],
} satisfies Config;
