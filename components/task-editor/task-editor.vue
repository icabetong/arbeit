<template>
	<modal :open="open" :hideable="state.hideable" @hide="$emit('hide')" size="max-w-xl">
		<template #title>{{ t('create.heading') }}</template>
		<template #description>{{ t('create.description') }}</template>
		<template #body>
			<form @submit.prevent="submit">
				<div class="space-y-2">
					<div>
						<form-group
							type="text"
							id="name"
							v-model.trim="title"
							:label="$t('field.project-name')"
							:placeholder="$t('placeholder.task-name')" />
					</div>
					<div>
						<label for="description">
							<span class="form-label">{{ $t('field.description') }}</span>
							<textarea
								v-model="description"
								id="description"
								cols="30"
								rows="10"
								class="form-input">
							</textarea>
						</label>
					</div>
					<div class="flex items-start justify-center gap-4">
						<div class="w-full">
							<span class="form-label">{{ $t('field.priority') }}</span>
							<task-priority-dropdown
								:model-value="priority"
								@update:model-value="priority = $event" />
						</div>
						<div class="w-full">
							<span class="form-label">{{ $t('field.status') }}</span>
							<task-status-dropdown :model-value="status" @update:model-value="status = $event" />
						</div>
					</div>
				</div>
				<div class="dialog-actions">
					<button type="button" class="button-secondary" @click="$emit('hide')">
						{{ $t('actions.cancel') }}
					</button>
					<spinner-button type="submit" class="button-primary" :loading="state.loading">
						<template #content>
							<check-icon class="mr-2 h-4 w-4" />
							{{ $t('actions.create') }}
						</template>
						<template #loading>
							<span>{{ $t('loading.saving') }}</span>
						</template>
					</spinner-button>
				</div>
			</form>
		</template>
	</modal>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/20/solid'
import type { Task } from '@prisma/client'

const props = defineProps<{ open: boolean; task?: Task | null }>()
const emit = defineEmits(['hide'])

const user = useSupabaseUser()
const { t } = useI18n({ useScope: 'local' })

const state = ref({ hideable: true, loading: false })
const title = ref(props?.task?.title ?? '')
const description = ref(props?.task?.description ?? '')
const priority = ref(props.task?.project ?? 'low')
const status = ref(props.task?.status ?? 'pending')
const { project } = inject('projects') as ProjectsResource

async function create() {
	await $fetch('/api/task', {
		method: 'POST',
		body: JSON.stringify({
			task: {
				author: user.value?.id,
				title: title.value,
				description: description.value,
				priority: priority.value,
				status: status.value,
				project: project.value.projectId
			}
		})
	})
}
async function update() {
	if (!props.task) return

	const { task } = props
	await $fetch(`/api/task/${task.taskId}`, {
		method: 'PUT',
		body: JSON.stringify({
			task: {
				taskId: task.taskId,
				author: user.value?.id,
				title: title.value,
				description: description.value,
				priority: priority.value,
				status: status.value,
				project: project.value.projectId
			}
		})
	})
}

async function submit() {
	state.value.loading = true
	try {
		if (props.task) await update()
		else await create()
		emit('hide')
	} catch {
		/* empty */
	} finally {
		state.value.loading = false
	}
}
</script>

<i18n lang="json">
{
	"en": {
		"create": {
			"heading": "Create Task",
			"description": "To create a new task, you'll need to type in a name."
		}
	}
}
</i18n>
