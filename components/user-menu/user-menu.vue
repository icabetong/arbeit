<template>
	<menu-root as="div" class="relative">
		<menu-button
			class="rounded-md p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 dark:hover:bg-gray-700">
			<user-circle-icon class="h-6 w-6" />
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
				<div class="border-b p-3 dark:border-b-gray-600">
					<h6 class="mb-1 font-medium">
						{{ profile ? `${profile.firstName} ${profile.lastName}` : user?.email }}
					</h6>
					<p v-if="profile.firstName && profile.lastName" class="description">{{ user?.email }}</p>
				</div>
				<ul class="py-1">
					<menu-item as="li">
						<nuxt-link
							to="/account"
							class="block cursor-pointer px-3 py-2 font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
							{{ $t('pages.account') }}
						</nuxt-link>
					</menu-item>
					<menu-item as="li">
						<button
							type="button"
							class="w-full cursor-pointer px-3 py-2 text-left font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
							@click="signOut">
							{{ $t('actions.sign-out') }}
						</button>
					</menu-item>
				</ul>
			</menu-items>
		</transition>
	</menu-root>
</template>

<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/outline'
import { Menu as MenuRoot, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import type { Profile } from '@prisma/client'

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const profile = inject('profile') as Profile

async function signOut() {
	try {
		const { error } = await supabase.auth.signOut()
		if (error) throw error
		else navigateTo('/sign-in')
	} catch (error) {
		console.error(error)
	}
}
</script>
