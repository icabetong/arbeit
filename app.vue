<template>
	<div id="app" class="bg-white transition-all duration-500 ease-in-out dark:bg-gray-800">
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
const { data, refresh } = await useFetch('/api/project', {
	key: 'projects',
	method: 'GET'
})
const { theme, change } = useTheme()
const { replace, project } = await useProjects()

provide('theme', { theme, change })
provide('projects', { projects: data, refresh, replace, project })
</script>
