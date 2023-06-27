<template>
	<menu-root as="div" class="relative">
		<menu-button>
			<user-circle-icon class="h-8 w-8" />
		</menu-button>
		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0">
			<menu-items
				class="absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white py-2 text-sm text-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700 dark:text-gray-50">
				<div>kebab</div>
			</menu-items>
		</transition>
	</menu-root>
</template>

<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/outline'
import { Menu as MenuRoot, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>
