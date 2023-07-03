import { getTasks } from '../../data/task'

export default defineEventHandler(async (event) => {
	const query = getQuery(event)
	const projectId = typeof query.projectId === 'string' ? query.projectId : null
	if (!projectId) return []

	return await getTasks(projectId)
})
