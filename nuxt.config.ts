// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxtjs/i18n'],
	i18n: {
		lazy: false,
		langDir: 'locales',
		defaultLocale: 'en',
		locales: [
			{ code: 'en', file: 'en-US.json' },
			{ code: 'fr', file: 'fr-FR.json' }
		]
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	css: ['@/assets/css/main.css']
})
