import type { Project } from '@prisma/client'

export {}

declare global {
	type ProjectsResource = {
		project: Project
		projects: Project[]
		change: (current: Project) => void
		refresh: () => Promise<void>
	}
}
