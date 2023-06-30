import { type Project } from '@prisma/client'

export default async function () {
	const projects = ref<Project[]>([])
	const project = ref<Project | null>(null)
	const replace = (current: Project) => (project.value = current)

	async function fetchProjects() {
		const data: Project[] = await $fetch('/api/project', {
			method: 'GET'
		})
		projects.value = data

		if (!project.value && projects.value.length > 0) project.value = projects.value[0]
	}

	fetchProjects()
	return { replace, project, projects, refresh: fetchProjects }
}
