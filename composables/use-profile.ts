import type { Profile } from '@prisma/client'

export default async function () {
	const user = useSupabaseUser()
	const profile = ref<Profile | null>(null)
	if (!user.value) return null

	async function fetchProfile() {
		const response: Profile = await $fetch(`/api/profile/${user.value?.id}`, {
			method: 'GET'
		})

		profile.value = response
	}

	fetchProfile()
	watch(user.value, fetchProfile)

	return profile
}
