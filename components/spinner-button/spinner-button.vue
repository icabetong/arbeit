<template>
	<button
		v-bind="$attrs"
		class="inline-flex items-center justify-center"
		:disabled="loading"
		:aria-diabled="loading">
		<template v-if="loading">
			<spinner class="mr-2" dimensions="h-4 w-4" />
			<slot name="loading"></slot>
		</template>
		<template v-else class="flex items-center justify-center">
			<slot name="content"></slot>
		</template>
	</button>
</template>

<script setup lang="ts">
defineOptions({
	inheritAttrs: false
})
defineProps<{
	loading: boolean
}>()
</script>
