import { createProject } from '../../data/project'

export default defineEventHandler(async (event) => {
	const { project } = await readBody(event)
	const result = createProject(project)
	return result
})
