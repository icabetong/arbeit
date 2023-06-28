import { type Project } from '@prisma/client'

export default async function () {
	const project = ref<Project | null>(null)
	const replace = (current: Project) => (project.value = current)

	return { replace, project }
}
