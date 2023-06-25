import { getTasks } from '../../../data/task'

export default defineEventHandler(async (event) => {
	const id = event.context.params?.id
	if (id) {
		const taskId = parseInt(id, 10)
		let result = getTasks(taskId)
		return result
	}

	setResponseStatus(event, 400)
})
