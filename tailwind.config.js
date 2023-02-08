/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '20px',
		},
		colors: {
			purple: '#cd5ff8',
			purpledark: '#701786',
			white: '#ffffff',
			'bubble-gum': '#ff77e9',
		},
		extend: {},
	},
	plugins: [],
};
