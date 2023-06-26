<template>
	<label>
		<span class="form-label">{{ label }}</span>
		<input
			class="form-input"
			v-bind="$attrs"
			:type="type"
			:name="id"
			:placeholder="placeholder"
			:value="modelValue"
			:required="required"
			@input="handleInput" />
	</label>
</template>

<script setup lang="ts">
defineProps({
	id: String,
	label: String,
	type: String,
	placeholder: String,
	modelValue: String,
	required: Boolean
})
const emit = defineEmits(['update:modelValue'])

function handleInput(event: Event) {
	emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
