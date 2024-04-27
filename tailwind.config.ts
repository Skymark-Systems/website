import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#2e2e31',
				'primary-content': '#acacb2',
				'primary-dark': '#151517',
				'primary-light': '#47474b',

				secondary: '#312e2f',
				'secondary-content': '#b2acae',
				'secondary-dark': '#171516',
				'secondary-light': '#4b4748',

				background: '#efeff1',
				foreground: '#fbfbfb',
				border: '#dddde2',

				copy: '#232329',
				'copy-light': '#5e5e6e',
				'copy-lighter': '#848495',

				success: '#2e312e',
				warning: '#31312e',
				error: '#312e2e',

				'success-content': '#acb2ac',
				'warning-content': '#b2b2ac',
				'error-content': '#b2acac',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
export default config
