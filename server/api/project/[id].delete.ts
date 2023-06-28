import { removeProject } from '../../data/project'

export default defineEventHandler(async (event) => {
	const projectId = event.context.params?.id
	if (projectId) {
		let result = removeProject(projectId)
		return result
	}

	setResponseStatus(event, 400)
})
