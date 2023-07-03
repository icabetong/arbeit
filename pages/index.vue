<template>
	<page>
		<template v-if="project">
			<project-overview v-if="tab == 'overview'" />
			<task-overview v-else-if="tab == 'tasks'" />
			<doc-overview v-else-if="tab == 'documentation'" />
		</template>
		<div
			v-else
			class="mx-auto flex max-w-md flex-1 flex-col items-center justify-center text-center">
			<h1 class="heading">{{ t('empty.heading') }}</h1>
			<p class="mb-4 mt-2 text-sm">{{ t('empty.description') }}</p>
			<button type="button" class="button-primary px-8" @click="handleEditor">Create</button>
		</div>
	</page>
	<project-editor :open="editor.open" @hide="handleEditor" />
</template>

<script setup lang="ts">
const i18n = useI18n()
const route = useRoute()
const { t } = useI18n({ useScope: 'local' })
const editor = ref({ open: false })
const tab = ref(route.query['tab'] ?? 'overview')
const { project } = inject('projects') as ProjectsResource

const handleEditor = () => (editor.value.open = !editor.value.open)

watch(
	() => route.query,
	(newValue) => {
		const route = newValue['tab']
		if (route && typeof route === 'string') tab.value = route
		else tab.value = 'overview'
	}
)
useHead({
	title: i18n.t('app')
})
</script>

<i18n lang="json">
{
	"en": {
		"empty": {
			"heading": "Create a Project",
			"description": "You currently do not have any project associated with your account, create one using the button below."
		}
	}
}
</i18n>
