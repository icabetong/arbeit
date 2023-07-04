import type { RouteLocationNormalized } from 'vue-i18n-routing'

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized) => {
	const supabase = useSupabaseClient()
	let { data } = await supabase.auth.refreshSession()
	if (!data.session) {
		const { data } = await supabase.auth.refreshSession()
		let { user } = data
		if (!user && protectedRoutes.includes(to.path)) return navigateTo('/sign-in')
		else if (user && authRoutes.includes(to.path)) return navigateTo('/')
	} else {
		if (!data.session.user && protectedRoutes.includes(to.path)) return navigateTo('/sign-in')
		else if (!data.session.user && authRoutes.includes(to.path)) return navigateTo('/')
	}
})
