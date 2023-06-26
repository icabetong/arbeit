<template>
	<div id="app" class="bg-white dark:bg-gray-800">
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
const { data, refresh } = await useFetch('/api/project', {
	key: 'projects',
	method: 'GET'
})
const { change, project } = await useProjects()

provide('projects', { projects: data, refresh, change, project })
</script>
