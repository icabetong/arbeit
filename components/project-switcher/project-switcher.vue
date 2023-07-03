<template>
	<menu-root as="div" class="relative">
		<menu-button class="dropdown-button flex w-40 items-center">
			<span class="flex-1 truncate px-1 text-left font-medium">
				{{ project ? project.name : 'Choose' }}
			</span>
			<chevron-down-icon class="ml-2 h-4 w-4" />
		</menu-button>
		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0">
			<menu-items
				as="div"
				class="absolute left-0 z-10 mt-2 w-60 origin-top-left divide-y rounded-md bg-white text-sm text-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:text-gray-50">
				<ul class="py-2">
					<menu-item v-for="project in projects" :key="project.projectId" as="li">
						<button
							type="button"
							class="relative w-full cursor-pointer py-2 pl-10 pr-4 text-left font-medium hover:bg-gray-200 dark:hover:bg-gray-500"
							@click="replace(project)">
							{{ project.name }}
							<span v-if="active(project)" class="absolute inset-y-0 left-0 flex items-center pl-3">
								<check-icon class="h-5 w-5" aria-hidden="true" />
							</span>
						</button>
					</menu-item>
				</ul>
				<ul class="py-2">
					<menu-item as="li">
						<nuxt-link
							to="/projects"
							class="relative block cursor-pointer py-2 pl-10 pr-4 text-left font-medium hover:bg-gray-200 dark:hover:bg-gray-500">
							{{ $t('actions.manage-projects') }}
							<span class="absolute inset-y-0 left-0 flex items-center pl-3">
								<cog6-tooth-icon class="h-5 w-5" aria-hidden="true" />
							</span>
						</nuxt-link>
					</menu-item>
				</ul>
			</menu-items>
		</transition>
	</menu-root>
</template>

<script setup lang="ts">
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, CheckIcon, PlusIcon } from '@heroicons/vue/20/solid'
import { Menu as MenuRoot, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { type Project } from '@prisma/client'

const { projects, project, replace } = inject('projects') as ProjectsResource
const active = (current: Project) => current.projectId === project.value.projectId

defineProps({
	projects: Array as PropType<Project[]>,
	project: Object as PropType<Project>,
	replace: Function
})
</script>
