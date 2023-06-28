<template>
	<page>
		<template #content>
			<div class="mx-auto flex max-w-md flex-1 flex-col items-center justify-center text-center">
				<h1 class="heading">{{ t('empty.heading') }}</h1>
				<p class="mb-4 mt-2 text-sm">{{ t('empty.description') }}</p>
				<button type="button" class="button-primary px-8" @click="handleEditor">Create</button>
			</div>
		</template>
	</page>
	<project-editor :open="editor.open" @hide="handleEditor" />
</template>

<script setup lang="ts">
const editor = ref({ open: false })
const { t } = useI18n({ useScope: 'local' })

useHead({
	title: t('app')
})

const handleEditor = () => (editor.value.open = !editor.value.open)
</script>

<i18n lang="json">
{
	"en": {
		"empty": {
			"heading": "Create a Project",
			"description": "You currently do not have any project associated with your account, create one using the button below."
		}
	}
}
</i18n>
