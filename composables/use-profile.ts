export default async function () {
	const user = useSupabaseUser()
	if (!user.value) return null

	const response = await $fetch(`/api/profile/${user.value?.id}`, {
		method: 'GET'
	})

	return response
}
