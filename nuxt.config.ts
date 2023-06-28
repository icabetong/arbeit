// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxtjs/i18n', '@nuxtjs/supabase'],
	i18n: {
		lazy: false,
		langDir: 'locales',
		defaultLocale: 'en',
		vueI18nLoader: true,
		locales: [{ code: 'en', file: 'en-US.json' }]
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	components: {
		global: true,
		dirs: ['~/components']
	},
	css: ['@/assets/css/main.css'],
	typescript: {
		strict: true
	}
})
