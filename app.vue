<template>
	<div id="app" class="bg-white transition-all duration-500 ease-in-out dark:bg-gray-800">
		<NuxtPage />
	</div>
</template>

<script setup lang="ts">
const profile = await useProfile()
const { theme, change } = useTheme()
const { replace, project, projects, refresh } = await useProjects()

provide('theme', { theme, change })
provide('projects', { projects, refresh, replace, project })

provide('profile', profile)
</script>
