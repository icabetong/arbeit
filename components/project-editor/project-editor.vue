<template>
	<modal :open="open" :hideable="state.hideable" @hide="$emit('hide')">
		<template #title>{{ t('create') }}</template>
		<template #body>
			<input type="text" id="name" class="form-input" />
			<div class="dialog-actions">
				<button type="button" class="button-primary">{{ t('actions.create') }}</button>
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
		"create": "Create new Project",
		"update": "Update exiting Project"
	}
}
</i18n>
