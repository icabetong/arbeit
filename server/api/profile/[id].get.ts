import { getProfile } from '../../data/profile'

export default defineEventHandler(async (event) => {
	const profileId = event.context.params?.id
	if (profileId) {
		return await getProfile(profileId)
	}

	setResponseStatus(event, 400)
})
