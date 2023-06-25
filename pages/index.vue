<script setup lang="ts">
const { locale } = useI18n()
useHead({
	title: 'Arbeit'
})
</script>

<template>
	<div>
		<form>
			<select v-model="locale">
				<option value="en">en</option>
				<option value="fr">fr</option>
			</select>
			<p>{{ $t('welcome') }}</p>
		</form>
	</div>
</template>
