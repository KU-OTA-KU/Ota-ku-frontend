<template>
	<section class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
		<auth-back-button href="/welcome"></auth-back-button>
		<auth-logo-and-title :title="$t('auth_title')"></auth-logo-and-title>

		<div class="mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col">
			<form class="space-y-5" @submit.prevent="submitForm">
				<div>
					<label for="email" class="block text-sm font-medium leading-5 text-white">{{ $t('email_label') }}</label>
					<div class="mt-1">
						<input id="email" v-model="email" @input="validateForm" type="text" autocomplete="current-login" required
						       :placeholder="$t('email_placeholder')" class="input input-primary"/>
						<p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
					</div>
				</div>
				<div>
					<div class="flex items-center justify-between">
						<label for="password" class="block text-sm font-medium leading-5 text-white">{{
								$t('password_label')
							}}</label>
						<div class="mt-1">
							<NuxtLink class="text-sm text-blue-400" :to="$localeRoute('/auth/forgotPassword')">{{ $t('forgot_password') }}</NuxtLink>
						</div>
					</div>
					<div class="mt-1">
						<input id="password" v-model="password" @input="validateForm" type="password"
						       autocomplete="current-password" required :placeholder="$t('password_placeholder')"
						       class="input input-primary"/>
						<p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
					</div>
				</div>
				<div>
					<button :disabled="isSubmitDisabled" type="submit" class="button button-primary"
					        :class="{ 'button-disabled': isSubmitDisabled }">{{ $t('submit_button') }}
					</button>
				</div>
			</form>
			<lazy-auth-footer></lazy-auth-footer>
		</div>
	</section>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import {validateEmail, validatePassword} from '~/utils/validation';
import {useNuxtApp} from '#app';
import {AuthBackButton, AuthLogoAndTitle} from "#components";

export default defineComponent({
	name: "signInComponent",
	components: {AuthLogoAndTitle, AuthBackButton},

	setup() {
		const {$statusBar, $navigationBar} = useNuxtApp();

		onMounted(async () => {
			$navigationBar.overlayShow();
			$statusBar.overlayShow();
			$navigationBar.setColor('#18181B');
			$statusBar.setColor('#18181B');
		});
	},

	data() {
		return {
			email: '',
			password: '',
			errors: {},
			isSubmitDisabled: true,
		};
	},
	methods: {
		validateForm() {
			const errors: ValidationErrors = {};
			validateEmail(this.email, errors);
			validatePassword(this.password, errors);
			this.errors = errors;
			this.isSubmitDisabled = !!Object.keys(this.errors).length;
		},
		submitForm() {
			console.log('Form submitted:', {emailLogin: this.email, password: this.password});
		}
	}
});
</script>

<style scoped></style>
