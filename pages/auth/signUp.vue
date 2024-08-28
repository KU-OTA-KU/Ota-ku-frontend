<template>
	<section class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
		<back-button href="/welcome"></back-button>
		<auth-logo-and-title title="Еще не с нами? Сэмпай?! Присоединяйся"></auth-logo-and-title>

		<div class="mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col">
			<form class="space-y-5" @submit.prevent="submitForm">
				<div>
					<label for="email" class="block text-sm font-medium leading-5 text-white">Эл. почта</label>
					<div class="mt-1">
						<input id="email" v-model="email" @input="validateForm" type="text" autocomplete="current-login"
						       placeholder="Введите эл. почту" required class="input input-primary"/>
						<p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
					</div>
				</div>
				<div>
					<label for="login" class="block text-sm font-medium leading-5">Логин</label>
					<div class="mt-1">
						<input id="login" v-model="login" @input="validateForm" type="text" autocomplete="current-login"
						       placeholder="Введите логин" required class="input input-primary"/>
						<p v-if="errors.login" class="text-red-500 text-xs mt-1">{{ errors.login }}</p>
					</div>
				</div>
				<div>
					<div class="flex gap-3">
						<div class="w-full">
							<div class="flex items-center justify-between">
								<label for="password" class="block text-sm font-medium leading-5">Пароль</label>
							</div>
							<div class="mt-1">
								<input id="password" v-model="password" @input="validateForm" type="password"
								       autocomplete="current-password" required class="input input-primary"
								       placeholder="Введите пароль"/>
								<p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
							</div>
						</div>
						<div class="w-full">
							<div class="flex items-center justify-between">
								<label for="password-repeat" class="block text-sm font-medium leading-5">Повторите пароль</label>
							</div>
							<div class="mt-1">
								<input id="password-repeat" v-model="repeatPassword" @input="validateForm" type="password"
								       autocomplete="current-password" required class="input input-primary"
								       placeholder="Повторите пароль"/>
								<p v-if="errors.repeatPassword" class="text-red-500 text-xs mt-1">{{ errors.repeatPassword }}</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<button :disabled="isSubmitDisabled" type="submit" class="button button-primary"
					        :class="{ 'button-disabled': isSubmitDisabled }">Создать акканут
					</button>
				</div>
			</form>

			<auth-footer></auth-footer>
		</div>
	</section>
</template>


<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import {validateEmail, validateLogin, validatePassword, validateRepeatPassword} from '~/utils/validation';
import {useNuxtApp} from '#app';
import BackButton from "~/components/auth/backButton.vue";
import AuthLogoAndTitle from "~/components/auth/authLogoAndTitle.vue";

export default defineComponent({
	name: "signUpComponent",
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
			login: '',
			password: '',
			repeatPassword: '',
			errors: {},
			isSubmitDisabled: true,
		};
	},
	methods: {
		validateForm() {
			const errors: ValidationErrors = {};
			validateEmail(this.email, errors);
			validateLogin(this.login, errors);
			validatePassword(this.password, errors);
			validateRepeatPassword(this.password, this.repeatPassword, errors);
			this.errors = errors;
			this.isSubmitDisabled = !!Object.keys(this.errors).length;
		},
		submitForm() {
			console.log('Form submitted:', {
				email: this.email,
				login: this.login,
				password: this.password,
				repeatPassword: this.repeatPassword
			});
		}
	}
});
</script>

<style scoped></style>
