<template>
	<div class="border-b dark:border-b-gray-700">
		<nav class="box flex items-center justify-between px-4 py-3 md:px-8">
			<div class="block sm:hidden">
				<navigation-links />
			</div>
			<div class="flex items-center gap-8">
				<a
					v-if="projects.length === 0"
					href="/"
					class="text-lg font-semibold text-gray-700 dark:text-gray-50">
					{{ $t('app') }}
				</a>
				<div v-if="projects.length > 0" class="flex items-center justify-center gap-8">
					<project-switcher
						:projects="projects"
						:project="project"
						:replace="replace"
						:refresh="refresh" />
					<ul class="hidden items-center justify-around gap-4 text-sm font-medium sm:flex">
						<li>
							<nuxt-link to="/" :class="tabClass('')">
								{{ $t('pages.overview') }}
							</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/?tab=tasks" :class="tabClass('tasks')">
								{{ $t('pages.tasks') }}
							</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/?tab=documentation" :class="tabClass('documentation')">
								{{ $t('pages.documentation') }}
							</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="flex items-center justify-center gap-4">
				<theme-switcher />
				<user-menu v-if="user" />
				<nuxt-link
					v-else
					to="/sign-in"
					class="rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 dark:hover:bg-gray-700">
					{{ $t('actions.sign-in') }}
				</nuxt-link>
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { projects, project, replace, refresh } = inject('projects') as ProjectsResource
const user = useSupabaseUser()

function tabClass(path: string) {
	return path === route.query['tab'] || (path === '' && route.query['tab'] === undefined)
		? 'font-semibold text-gray-700'
		: ''
}
</script>
