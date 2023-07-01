<template>
	<page hide-navigation>
		<form class="mx-auto w-[32rem]" @submit.prevent="submit">
			<div>
				<h1 class="heading">{{ t('heading') }}</h1>
				<p class="description">{{ t('description') }}</p>
			</div>
			<p v-if="error" class="banner-danger my-4">{{ error }}</p>
			<div class="my-4 space-y-2">
				<div>
					<form-group
						type="email"
						id="email"
						v-model.trim="form.email"
						:label="$t('field.email')"
						:placeholder="$t('placeholder.email')"
						:disabled="loading" />
				</div>
			</div>
			<spinner-button type="submit" class="button-primary" :loading="loading">
				<template #content>
					{{ $t('actions.send') }}
				</template>
				<template #loading>
					{{ $t('loading.sending') }}
				</template>
			</spinner-button>
		</form>
	</page>
</template>

<script setup lang="ts">
const { $toast } = useNuxtApp()
const { t } = useI18n({ useScope: 'local' })
const supabase = useSupabaseClient()
const form = ref({ email: '' })
const loading = ref(false)
const error = ref(null)

async function submit() {
	loading.value = true
	try {
		const { error } = await supabase.auth.resetPasswordForEmail(form.value.email)

		if (error) throw error
		else $toast.success('Email sent')
	} catch (e: any) {
		error.value = e
	} finally {
		loading.value = false
	}
}

useHead({ title: t('title') })
</script>

<i18n lang="json">
{
	"en": {
		"title": "Recover your Account",
		"heading": "Forgot your password?",
		"description": "Enter your email address associated with your account and we'll send you instructions on how to reset your password?"
	}
}
</i18n>
