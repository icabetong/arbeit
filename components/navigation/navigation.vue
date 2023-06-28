<template>
	<div class="border-b dark:border-b-gray-700">
		<nav class="box flex items-center justify-between px-8 py-3">
			<div class="flex items-center gap-8">
				<a
					v-if="projects.length === 0"
					href="/"
					class="text-lg font-semibold text-gray-700 dark:text-gray-50">
					{{ $t('app') }}
				</a>
				<div v-if="projects.length > 0" class="flex items-center justify-center gap-8">
					<project-switcher
						:projects="projects"
						:project="project"
						:replace="replace"
						:refresh="refresh" />
					<ul class="flex items-center justify-around gap-4 text-sm font-medium">
						<li>
							<nuxt-link to="/">{{ t('overview') }}</nuxt-link>
						</li>
						<li>
							{{ t('tasks') }}
						</li>
						<li>{{ t('documentation') }}</li>
					</ul>
				</div>
			</div>
			<div class="flex items-center justify-center gap-4">
				<theme-switcher />
				<user-menu v-if="user" />
				<nuxt-link
					v-else
					to="/sign-in"
					class="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 dark:hover:bg-gray-700">
					{{ $t('actions.sign-in') }}
				</nuxt-link>
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const { projects, project, replace, refresh } = inject('projects') as ProjectsResource
const user = useSupabaseUser()
</script>

<i18n lang="json">
{
	"en": {
		"overview": "Overview",
		"tasks": "Tasks",
		"documentation": "Documentation"
	}
}
</i18n>
