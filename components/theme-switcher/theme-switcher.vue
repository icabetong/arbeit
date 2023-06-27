<template>
	<listbox v-model="theme" as="div" class="relative" @update-model-value="change">
		<listbox-button>
			<moon-icon v-if="theme === 'dark'" class="h-6 w-6" />
			<sun-icon v-else-if="theme === 'light'" class="h-6 w-6" />
			<sparkles-icon v-else class="h-6 w-6" />
		</listbox-button>
		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0">
			<listbox-options
				as="ul"
				class="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white py-2 text-sm text-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:text-gray-50">
				<listbox-option
					v-slot="{ selected }"
					v-for="theme in themes"
					:key="theme"
					:value="theme"
					as="template">
					<li
						class="relative cursor-pointer py-2 pl-10 pr-4 font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
						{{ $t(`theme.${theme}`) }}
						<span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3">
							<check-icon class="h-4 w-4" aria-hidden="true" />
						</span>
					</li>
				</listbox-option>
			</listbox-options>
		</transition>
	</listbox>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import { CheckIcon } from '@heroicons/vue/20/solid'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

const { theme, change } = inject('theme') as ThemeResource

const themes: Theme[] = ['light', 'dark', 'auto']
</script>
