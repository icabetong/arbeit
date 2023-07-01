import type { Project, Profile } from '@prisma/client'

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
		loading: boolean
	}
	type ProfileResource = {
		profile: Profile
		refresh: () => Promise<void>
	}
}
