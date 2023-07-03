<template>
	<listbox
		:model-value="modelValue"
		@update:model-value="emit('update:modelValue', $event)"
		as="div"
		class="relative">
		<listbox-button class="dropdown-button w-full">
			<span class="flex-1 text-left">{{ $t(`status.${modelValue}`) }}</span>
			<chevron-down-icon class="ml-2 h-4 w-4" />
		</listbox-button>
		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0">
			<listbox-options as="ul" class="dropdown-panel">
				<listbox-option v-for="option in options" :value="option" as="template">
					<li :key="option" class="dropdown-option">
						{{ $t(`status.${option}`) }}
					</li>
				</listbox-option>
			</listbox-options>
		</transition>
	</listbox>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'

defineProps({
	modelValue: String
})
const emit = defineEmits(['update:modelValue'])
const options = ['pending', 'in-progress', 'for-review', 'finished', 'revisions']
</script>
