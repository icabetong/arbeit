<template>
	<div class="border-b">
		<nav class="box flex items-center justify-between px-8 py-4">
			<div class="flex items-center gap-8">
				<a href="/" class="text-lg font-semibold text-gray-700">Arbeit</a>
				<div v-if="context && context.projects.length > 0">
					<ul class="flex items-center justify-around gap-4 text-sm font-medium">
						<li>{{ t('overview') }}</li>
						<li>{{ t('tasks') }}</li>
						<li>{{ t('documentation') }}</li>
					</ul>
				</div>
			</div>
			<div>
				<button type="button">Light</button>
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts">
import type { Project } from '@prisma/client'

const { t } = useI18n({ useScope: 'local' })
const context = inject<{ projects: Project[] }>('projects')
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
