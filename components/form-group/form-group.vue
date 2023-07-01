<template>
	<label>
		<span class="form-label">{{ label }}</span>
		<input class="form-input" v-bind="$attrs" :value="modelValue" @input="handleInput" />
	</label>
</template>

<script setup lang="ts">
defineProps({
	label: String,
	modelValue: String
})
const emit = defineEmits(['update:modelValue'])

function handleInput(event: Event) {
	emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
