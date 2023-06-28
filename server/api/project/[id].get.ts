import { getProject } from '../../data/project'

export default defineEventHandler(async (event) => {
	const projectId = event.context.params?.id
	if (projectId) {
		return await getProject(projectId)
	}

	setResponseStatus(event, 400)
})
