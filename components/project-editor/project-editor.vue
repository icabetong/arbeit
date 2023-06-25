<template>
	<modal :open="open" :hideable="state.hideable" @hide="$emit('hide')">
		<template #title>{{ t('create.heading') }}</template>
		<template #description>{{ t('create.description') }}</template>
		<template #body>
			<form-group
				type="text"
				id="name"
				:label="$t('field.project-name')"
				:placeholder="$t('placeholder.project-name')" />
			<div class="dialog-actions">
				<button type="button" class="button-secondary" @click="$emit('hide')">
					{{ $t('actions.cancel') }}
				</button>
				<button type="button" class="button-primary">{{ $t('actions.create') }}</button>
			</div>
		</template>
	</modal>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const state = ref({ hideable: true })

defineProps({
	open: Boolean
})
defineEmits(['hide'])
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
