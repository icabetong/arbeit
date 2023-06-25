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
			:required="required" />
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
defineEmits(['update:modelValue'])
</script>
