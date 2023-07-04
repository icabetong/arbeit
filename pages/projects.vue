<template>
	<page>
		<div class="mx-auto flex w-full flex-1 flex-col items-start justify-start py-4 text-center">
			<div class="flex items-start py-4">
				<h1 class="heading">{{ $t('pages.projects') }}</h1>
			</div>
			<project-table :projects="projects" />
		</div>
	</page>
</template>

<script setup lang="ts">
const i18n = useI18n()
const { projects } = inject('projects') as ProjectsResource

useHead({
	title: i18n.t('pages.projects')
})
</script>
