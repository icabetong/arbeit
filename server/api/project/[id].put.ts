import { updateProject } from '../../data/project'

export default defineEventHandler(async (event) => {
	const { project } = await readBody(event)
	const projectId = event.context.params?.id

	if (projectId) {
		let result = updateProject(projectId, project)
		return result
	}

	setResponseStatus(event, 400)
})
