import { getProjects } from '../../data/project'

export default defineEventHandler(async () => {
	return await getProjects()
})
