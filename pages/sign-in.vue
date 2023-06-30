<template>
	<page hide-navigation>
		<form class="mx-auto w-[32rem]" @submit.prevent="signIn">
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
						v-model.trim="credentials.email"
						:label="$t('field.email')"
						:placeholder="$t('placeholder.email')" />
				</div>
				<div>
					<form-group
						type="password"
						id="password"
						v-model.trim="credentials.password"
						:label="$t('field.password')"
						:placeholder="$t('placeholder.password')" />
				</div>
				<nuxt-link to="/forgot-password" class="text-link block text-right">
					{{ $t('actions.forgot-password') }}
				</nuxt-link>
			</div>
			<button type="submit" class="button-primary">{{ $t('actions.sign-in') }}</button>
		</form>
	</page>
</template>

<script setup lang="ts">
const router = useRouter()
const supabase = useSupabaseClient()
const { t } = useI18n({ useScope: 'local' })
const loading = ref(false)
const error = ref(null)
const credentials = ref({ email: '', password: '' })

async function signIn() {
	loading.value = true
	try {
		const { error } = await supabase.auth.signInWithPassword({
			email: credentials.value.email,
			password: credentials.value.password
		})
		if (error) throw error
		else router.push('/')
	} catch (e: any) {
		error.value = e
	} finally {
		loading.value = false
	}
}

useHead({
	title: t('heading')
})
</script>

<i18n lang="json">
{
	"en": {
		"heading": "Sign-in to Arbeit",
		"description": "Enter your proper credentials to continue"
	}
}
</i18n>
