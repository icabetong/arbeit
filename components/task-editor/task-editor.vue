<template>
	<modal :open="open" :hideable="state.hideable" @hide="$emit('hide')">
		<template #title>{{ t('create.heading') }}</template>
		<template #description>{{ t('create.heading') }}</template>
	</modal>
</template>

<script setup lang="ts">
defineProps({ open: Boolean })
const emit = defineEmits(['hide'])
const { t } = useI18n({ useScope: 'local' })
const state = ref({ hideable: true, loading: false })
</script>

<i18n lang="json">
{
	"en": {
		"create": {
			"heading": "Create new Task",
			"description": "To create a new task, you'll need to type in a name."
		}
	}
}
</i18n>
