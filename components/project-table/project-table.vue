<template>
	<div class="relative w-full">
		<table class="table-root">
			<thead class="table-head">
				<tr class="table-row">
					<th scope="col" class="table-legend w-3/6">
						{{ $t('field.project-name') }}
					</th>
					<th scope="col" class="table-legend w-1/6">
						{{ $t('field.created') }}
					</th>
					<th scope="col" class="table-legend w-1/6">
						{{ $t('field.updated') }}
					</th>
					<th scope="col" class="table-legend w-1/6">
						<span class="sr-only">{{ $t('actions') }}</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<template v-for="project in projects" :key="project.projectId">
					<row :project="project" />
				</template>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
import row from './row'
import type { Project } from '@prisma/client'

defineProps<{ projects: Project[] }>()
</script>
