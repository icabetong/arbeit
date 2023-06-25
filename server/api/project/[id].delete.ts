import { removeProject } from '../../data/project'

export default defineEventHandler(async (event) => {
	const id = event.context.params?.id
	if (id) {
		const projectId = parseInt(id, 10)
		let result = removeProject(projectId)
		return result
	}

	setResponseStatus(event, 400)
})
