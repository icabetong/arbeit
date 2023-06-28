import { getTask } from '../../data/task'

export default defineEventHandler(async (event) => {
	const taskId = event.context.params?.id
	if (taskId) {
		return await getTask(taskId)
	}

	setResponseStatus(event, 400)
})
