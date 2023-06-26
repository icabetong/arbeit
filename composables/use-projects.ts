import { type Project } from '@prisma/client'

export default async function () {
	const project = ref<Project | null>(null)
	const change = (current: Project) => (project.value = current)

	return { change, project }
}
