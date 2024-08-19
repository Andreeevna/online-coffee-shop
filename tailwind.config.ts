import type { Config } from 'tailwindcss'

const constants = {
	green: '#008D64',
	'dark-green': '#006044',
	'light-green': '#E6F2EF',
	black: '#222222',
	white: '#ffffff',
	red: '#F23C3D',
	gray: '#E8E7E3',
	brown: '#B6B4B3',
	brige: '#A49B8F',
	'transparent-color': '#1C00ff00',
}

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: constants['transparent-color'],
			...constants,
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: '0.2' },
					to: {
						opacity: '1',
					},
				},
			},
			animation: {
				opacity: 'animationOpacity 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
}
export default config
