<template>
	<div class="flex min-h-screen flex-col">
		<navigation />
		<div class="box flex w-full flex-1 flex-col px-8">
			<slot name="content"></slot>
		</div>
	</div>
</template>
