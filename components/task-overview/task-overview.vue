<template>
	<div class="mx-auto flex w-full flex-1 flex-col items-start justify-start py-4 text-center">
		<div class="flex w-full items-center justify-between">
			<h1 class="heading">{{ $t('pages.tasks') }}</h1>
			<button type="button" class="button-primary flex items-center" @click="triggerEditor">
				<plus-icon class="mr-2 h-5 w-5" />
				<span>{{ $t('actions.create') }}</span>
			</button>
		</div>
	</div>
	<task-editor :open="open" @hide="open = false" />
</template>

<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/20/solid'
const open = ref(false)

const triggerEditor = () => (open.value = true)
</script>
