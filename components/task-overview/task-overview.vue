<template>
	<div class="mx-auto flex w-full flex-1 flex-col items-start justify-start py-4 text-center">
		<div class="flex w-full items-center justify-between">
			<h1 class="heading">{{ $t('pages.tasks') }}</h1>
			<button type="button" class="button-primary flex items-center" @click="open = true">
				<plus-icon class="mr-2 h-5 w-5" />
				<span>{{ $t('actions.create') }}</span>
			</button>
		</div>
		<div class="mt-8 flex w-full flex-1 gap-4" v-if="data">
			<draggable v-model="group" tag="ul" group="test" item-key="taskId">
				<template #item="{ element }">
					<li>{{ element.title }}</li>
				</template>
			</draggable>
			<draggable v-bind:model-value="data" tag="ul" group="test" item-key="taskId">
				<template #item="{ element }">
					<li>{{ element.title }}</li>
				</template>
			</draggable>
		</div>
	</div>
	<task-editor :open="open" @hide="open = false" />
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { PlusIcon } from '@heroicons/vue/20/solid'
import type { Task } from '@prisma/client'

const open = ref(false)
const { project } = inject('projects') as ProjectsResource

const { data } = await useFetch<Task[]>('/api/task', {
	method: 'GET',
	query: { projectId: project.value.projectId }
})

const group = ref([])

watch(
	() => group.value,
	() => console.log(group.value)
)
// watch(
// 	() => meals.value,
// 	() => console.log(meals.value)
// )
</script>
