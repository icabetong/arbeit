<template>
	<modal :open="open" :hideable="state.hideable" @hide="$emit('hide')">
		<template #title>{{ t('create.heading') }}</template>
		<template #description>{{ t('create.description') }}</template>
		<template #body>
			<form @submit.prevent="submit">
				<form-group
					type="text"
					id="name"
					v-model.trim="name"
					:label="$t('field.project-name')"
					:placeholder="$t('placeholder.project-name')" />
				<div class="dialog-actions">
					<button type="button" class="button-secondary" @click="$emit('hide')">
						{{ $t('actions.cancel') }}
					</button>
					<spinner-button type="submit" class="button-primary" :loading="state.loading">
						<check-icon class="mr-2 h-4 w-4" />
						{{ $t('actions.create') }}
					</spinner-button>
				</div>
			</form>
		</template>
	</modal>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/20/solid'

defineProps({
	open: Boolean
})
const emit = defineEmits(['hide'])

const { t } = useI18n({ useScope: 'local' })
const state = ref({ hideable: true, loading: false })
const name = ref('')
const { refresh } = inject('projects') as ProjectsResource

async function submit() {
	state.value.loading = true
	try {
		await $fetch('/api/project', {
			method: 'POST',
			body: JSON.stringify({
				project: {
					name: name.value
				}
			})
		})
		emit('hide')
		await refresh()
	} catch {
	} finally {
		state.value.loading = false
	}
}
</script>

<i18n lang="json">
{
	"en": {
		"create": {
			"heading": "Create new Project",
			"description": "To create a new project, you'll need to type in a name."
		}
	}
}
</i18n>
