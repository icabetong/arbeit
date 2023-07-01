<template>
	<menu-root as="div" class="relative">
		<menu-button
			class="rounded-md p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 dark:hover:bg-gray-700">
			<bars3-icon class="h-6 w-6" />
		</menu-button>
		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0">
			<menu-items
				class="absolute left-0 z-10 mt-2 w-60 origin-top-left rounded-md bg-white py-2 text-sm text-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 dark:text-gray-50">
				<ul class="py-1">
					<menu-item as="li">
						<nuxt-link
							to="/"
							class="block cursor-pointer px-3 py-2 font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
							{{ $t('pages.overview') }}
						</nuxt-link>
					</menu-item>
					<menu-item as="li">
						<nuxt-link
							to="/"
							class="block cursor-pointer px-3 py-2 font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
							{{ $t('pages.tasks') }}
						</nuxt-link>
					</menu-item>
					<menu-item as="li">
						<nuxt-link
							to="/"
							class="block cursor-pointer px-3 py-2 font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
							{{ $t('pages.documentation') }}
						</nuxt-link>
					</menu-item>
				</ul>
			</menu-items>
		</transition>
	</menu-root>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/20/solid'
import { Menu as MenuRoot, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>
