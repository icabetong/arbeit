<template>
	<div id="app" class="bg-white dark:bg-gray-800">
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
const { data: projects, refresh } = useFetch('/api/project', {
	method: 'GET'
})

provide('projects', { projects, refresh })
</script>
