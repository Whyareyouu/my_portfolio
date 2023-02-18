/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '20px',
		},
		screens: {
			el: { max: '1100px' },
			lg: { max: '992px' },
			md: { max: '768px' },
			sm: { max: '480px' },
		},
		colors: {
			purple: '#7685f5',
			purpledark: '#701786',
			white: '#ffffff',
			'bubble-gum': '#ff77e9',
			bluedark: '#1e3078',
			red: '#ff0303',
			green: '#26ed07',
		},
		extend: {},
	},
	plugins: [],
};
