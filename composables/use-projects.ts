import { type Project } from '@prisma/client'

export default async function () {
	const loading = ref(false)
	const projects = ref<Project[]>([])
	const project = ref<Project | null>(null)
	const replace = (current: Project) => (project.value = current)

	async function fetchProjects() {
		loading.value = true
		const data: Project[] = await $fetch('/api/project', {
			method: 'GET'
		})
		projects.value = data

		if (!project.value && projects.value.length > 0) project.value = projects.value[0]
		loading.value = false
	}

	fetchProjects()
	return { replace, project, projects, refresh: fetchProjects, loading }
}
