<template>
	<section class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
		<auth-back-button href="/auth/signIn"></auth-back-button>
		<auth-logo-and-title title="Ну что придумаем новый пароль Сэмпай?!"></auth-logo-and-title>

		<div class="mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col">
			<form class="space-y-5" @submit.prevent="submitForm">
				<div>
					<label for="password" class="block text-sm font-medium leading-5 text-white">Новый пароль</label>
					<div class="mt-1">
						<input id="password" v-model="password" @input="validateForm" type="password" placeholder="Введите пароль"
						       autocomplete="current-password" required class="input input-primary"/>
						<p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
					</div>
				</div>
				<div>
					<div class="flex items-center justify-between">
						<label for="password-repeat" class="block text-sm font-medium leading-5 text-white">Повторите пароль</label>
					</div>
					<div class="mt-1">
						<input id="password-repeat" v-model="repeatPassword" @input="validateForm" type="password"
						       placeholder="Повторите пароль" autocomplete="current-password" required class="input input-primary"/>
						<p v-if="errors.repeatPassword" class="text-red-500 text-xs mt-1">{{ errors.repeatPassword }}</p>
					</div>
				</div>

				<div>
					<button :disabled="isSubmitDisabled" type="submit" class="button button-primary"
					        :class="{ 'button-disabled': isSubmitDisabled }">Войти
					</button>
				</div>
			</form>

			<lazy-auth-footer></lazy-auth-footer>
		</div>
	</section>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import {validatePassword, validateRepeatPassword} from '~/utils/validation';
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
			password: '',
			repeatPassword: '',
			errors: {},
			isSubmitDisabled: true,
		};
	},
	methods: {
		validateForm() {
			const errors: ValidationErrors = {};
			validatePassword(this.password, errors);
			validateRepeatPassword(this.password, this.repeatPassword, errors);
			this.errors = errors;
			this.isSubmitDisabled = !!Object.keys(this.errors).length;
		},
		submitForm() {
			console.log('Form submitted:', {password: this.password, repeatPassword: this.repeatPassword});
			this.$router.push("/auth/signin")
		}
	}
});
</script>

<style scoped></style>
