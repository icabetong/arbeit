<template>
	<div class="flex min-h-screen flex-col dark:bg-gray-900">
		<navigation v-if="!hideNavigation" />
		<div class="box flex w-full flex-1 flex-col justify-center px-8">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	hideNavigation: {
		type: Boolean,
		default: false
	}
})
</script>
