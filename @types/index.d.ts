import type { Project } from '@prisma/client'

export {}

declare global {
	type Theme = 'light' | 'dark' | 'auto'
	type ThemeResource = {
		theme: Theme
		change: (current: Theme) => void
	}
	type ProjectsResource = {
		project: Project
		projects: Project[]
		replace: (current: Project) => void
		refresh: () => Promise<void>
	}
}
