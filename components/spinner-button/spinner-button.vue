<template>
	<button v-bind="$attrs" class="flex items-center justify-center">
		<span v-if="loading && loadingLabel">
			<spinner class="mr-2" dimensions="h-4 w-4" />
			{{ loadingLabel }}
		</span>
		<span v-else class="flex items-center justify-center">
			<slot></slot>
		</span>
	</button>
</template>

<script setup lang="ts">
defineProps<{
	loadingLabel?: string
	loading: boolean
}>()
</script>
