import type { RouteLocationNormalized } from 'vue-i18n-routing'

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
	const user = useSupabaseUser()

	if (!user.value && protectedRoutes.includes(to.path)) return navigateTo('/sign-in')
	else if (user.value && authRoutes.includes(to.path)) return navigateTo('/')
})
