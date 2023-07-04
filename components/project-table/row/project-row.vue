<template>
	<tr class="table-row">
		<th scope="row" class="table-data">{{ project.name }}</th>
		<td class="table-data">{{ project.created }}</td>
		<td class="table-data">{{ project.updated }}</td>
		<td class="table-data">{{ project.owner }}</td>
	</tr>
</template>

<script setup lang="ts">
import type { Project } from '@prisma/client'

defineProps<{ project: Project }>()
</script>
