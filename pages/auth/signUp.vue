<template>
	<section class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
		<auth-back-button href="/welcome"></auth-back-button>
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
import {defineComponent, onMounted, ref} from 'vue';
import {useNuxtApp} from '#app';
import {AuthBackButton, AuthLogoAndTitle} from "#components";
import authService from "~/services/api/authService";
import {useToast} from "vue-toastification";
import {validateEmail, validateLogin, validatePassword, validateRepeatPassword} from '~/utils/validation';

export default defineComponent({
	name: "signUpComponent",
	components: {AuthLogoAndTitle, AuthBackButton},

	setup() {
		const toast = useToast();
		const {$statusBar, $navigationBar} = useNuxtApp();

		const email = ref('');
		const login = ref('');
		const password = ref('');
		const repeatPassword = ref('');
		const errors = ref<Record<string, string>>({});
		const isSubmitDisabled = ref(true);

		onMounted(async () => {
			$navigationBar.overlayShow();
			$statusBar.overlayShow();
			$navigationBar.setColor('#18181B');
			$statusBar.setColor('#18181B');
		});

		const validateForm = () => {
			const validationErrors: Record<string, string> = {};
			validateEmail(email.value, validationErrors);
			validateLogin(login.value, validationErrors);
			validatePassword(password.value, validationErrors);
			validateRepeatPassword(password.value, repeatPassword.value, validationErrors);
			errors.value = validationErrors;
			isSubmitDisabled.value = !!Object.keys(errors.value).length;
		};

		const submitForm = async () => {
			try {
				const response = await authService.register({
					login: login.value,
					email: email.value,
					password: password.value,
					password_confirmation: repeatPassword.value,
				});

				this.$router.push({name: 'auth/otp'});
			} catch (error: any) {
				if (error.response && error.response.data) {

					if (error.response.data.errors) {
						Object.keys(error.response.data.errors).forEach((field) => {
							error.response.data.errors[field].forEach((message: string) => {
								toast.error(`${message}`);
							});
						});
					}
				} else {
					toast.error(error.message);
				}
			}
		};

		return {
			email,
			login,
			password,
			repeatPassword,
			errors,
			isSubmitDisabled,
			validateForm,
			submitForm,
		};
	},
});
</script>

<style scoped></style>
