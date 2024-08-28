<template>
	<section class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
		<back-button href="/auth/signIn"></back-button>
		<auth-logo-and-title title="Разве настоящие отаку забывают пароли?!"></auth-logo-and-title>

		<div class="mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col">
			<form class="space-y-5" @submit.prevent="submitForm">
				<div>
					<label for="email" class="block text-sm font-medium leading-5 text-white">Эл. почта</label>
					<div class="mt-1">
						<input id="email" v-model="email" @input="validateForm" type="text" autocomplete="current-login" required
						       placeholder="Введите эл. почту" class="input input-primary"/>
						<p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
					</div>
				</div>
				<div>
					<button :disabled="isSubmitDisabled" type="submit" class="button button-primary"
					        :class="{ 'button-disabled': isSubmitDisabled }">Продолжать
					</button>
				</div>
			</form>

			<auth-footer></auth-footer>
		</div>
	</section>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import {validateEmail} from '~/utils/validation';
import {useNuxtApp} from '#app';
import BackButton from "~/components/auth/backButton.vue";
import AuthLogoAndTitle from "~/components/auth/authLogoAndTitle.vue";

export default defineComponent({
	name: "forgotPasswordComponent",
	components: {AuthLogoAndTitle, BackButton},

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
			errors: {},
			isSubmitDisabled: true,
		};
	},
	methods: {
		validateForm() {
			const errors: ValidationErrors = {};
			validateEmail(this.email, errors);
			this.errors = errors;
			this.isSubmitDisabled = !!Object.keys(this.errors).length;
		},
		submitForm() {
			console.log('Form submitted:', {emailLogin: this.email});
			this.$router.push('/auth/otp')
		}
	}
});
</script>

<style scoped></style>
