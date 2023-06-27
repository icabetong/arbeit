<template>
	<div class="border-b dark:border-b-gray-600">
		<nav class="box flex items-center justify-between px-8 py-4">
			<div class="flex items-center gap-8">
				<a v-if="projects.length === 0" href="/" class="text-lg font-semibold text-gray-700">
					{{ $t('app') }}
				</a>
				<div v-if="projects.length > 0" class="flex items-center justify-center gap-8">
					<project-switcher
						:projects="projects"
						:project="project"
						:replace="replace"
						:refresh="refresh" />
					<ul class="flex items-center justify-around gap-4 text-sm font-medium">
						<li>{{ t('overview') }}</li>
						<li>{{ t('tasks') }}</li>
						<li>{{ t('documentation') }}</li>
					</ul>
				</div>
			</div>
			<div class="flex items-center justify-center gap-4">
				<theme-switcher />
				<user-menu />
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const { projects, project, replace, refresh } = inject('projects') as ProjectsResource
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
