<template>
	<div class="border-b">
		<nav class="box flex items-center justify-between px-8 py-4">
			<div class="flex items-center gap-8">
				<a v-if="projects.length === 0" href="/" class="text-lg font-semibold text-gray-700">
					{{ $t('app') }}
				</a>
				<div v-if="projects.length > 0" class="flex items-center justify-center gap-8">
					<listbox v-model="current" as="div" class="relative" @update-model-value="change">
						<listbox-button class="form-input flex w-40 items-center">
							<span class="flex-1 truncate px-1 text-left font-medium">{{
								current ? current.name : 'Choose'
							}}</span>
							<chevron-down-icon class="ml-2 h-4 w-4" />
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
								class="absolute left-0 z-10 mt-2 w-60 origin-top-left rounded-md bg-white py-2 text-sm text-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<listbox-option
									v-slot="{ selected }"
									v-for="project in projects"
									:key="project.projectId"
									:value="project"
									as="template">
									<li class="relative cursor-pointer py-2 pl-10 pr-4 font-medium hover:bg-gray-200">
										{{ project.name }}
										<span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3">
											<check-icon class="h-4 w-4" aria-hidden="true" />
										</span>
									</li>
								</listbox-option>
							</listbox-options>
						</transition>
					</listbox>
					<ul class="flex items-center justify-around gap-4 text-sm font-medium">
						<li>{{ t('overview') }}</li>
						<li>{{ t('tasks') }}</li>
						<li>{{ t('documentation') }}</li>
					</ul>
				</div>
			</div>
			<div>
				<user-menu />
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts">
import userMenu from './user-menu/user-menu.vue'
import { ChevronDownIcon, CheckIcon } from '@heroicons/vue/20/solid'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import type { Project } from '@prisma/client'

const { t } = useI18n({ useScope: 'local' })
const { projects, current, change } = inject('projects') as {
	projects: Project[]
	current: Project
	change: (current: Project) => void
}
</script>

<i18n lang="json">
{
	"en": {
		"overview": "Overview",
		"tasks": "Tasks",
		"documentation": "Documentation"
	}
}
</i18n>
