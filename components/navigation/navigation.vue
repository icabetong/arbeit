<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
</script>

<template>
	<div class="border-b">
		<nav class="box flex items-center justify-between px-8 py-4">
			<div class="flex items-center gap-8">
				<a href="/" class="text-lg font-semibold text-gray-700">Arbeit</a>
				<div v-if="true">
					<ul class="flex items-center justify-around gap-4 text-sm font-medium">
						<li>{{ t('overview') }}</li>
						<li>{{ t('tasks') }}</li>
						<li>{{ t('documentation') }}</li>
					</ul>
				</div>
			</div>
			<div>
				<button type="button">Light</button>
			</div>
		</nav>
	</div>
</template>

<i18n lang="json">
{
	"en": {
		"overview": "Overview",
		"tasks": "Tasks",
		"documentation": "Documentation"
	}
}
</i18n>
