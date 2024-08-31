<template>
	<section class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
		<auth-back-button href="/auth/forgotPassword"></auth-back-button>
		<auth-logo-and-title title="Лаг Сиинг уже в пути!"></auth-logo-and-title>

		<div class="mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col">
			<form @submit.prevent="submitForm" ref="otpForm" class="space-y-5">
				<div class="flex items-center justify-center gap-3">
					<input v-for="(digit, index) in otp" :key="index" v-model="otp[index]" type="text"
					       class="input input-primary input-otp-cube" maxlength="1" pattern="\d*"
					       @input="handleInput(index, $event)" @keydown="handleKeyDown(index, $event)" @paste="handlePaste($event)"
					       placeholder="0"/>
				</div>
				<div>
					<button :disabled="isSubmitDisabled" type="submit" class="button button-primary"
					        :class="{ 'button-disabled': isSubmitDisabled }">Отправить
					</button>
				</div>
			</form>

			<auth-footer></auth-footer>
		</div>
	</section>
</template>

<script lang="ts">
import {ref, computed, nextTick, onMounted} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import {useNuxtApp} from '#app';
import {AuthBackButton, AuthLogoAndTitle} from "#components";
import {useToast} from 'vue-toastification';
import authService from "~/services/api/authService";

export default {
	name: "otpComponent",
	components: {AuthLogoAndTitle, AuthBackButton},
	setup() {
		const router = useRouter();
		const route = useRoute();
		const toast = useToast();
		const { $statusBar, $navigationBar } = useNuxtApp();
		const allowedRoutes = ['/auth/signIn', '/auth/signUp'];
		const routeToGo = route.query.goto as string || '/';
		const otp = ref(['', '', '', '', '']);

		const isSubmitDisabled = computed(() => otp.value.some(num => num === ''));

		const submitForm = () => {
			if (isSubmitDisabled.value) {
				toast.error('Заполните все поля!');
				return;
			}
			if (allowedRoutes.includes(routeToGo)) {
				if(routeToGo === allowedRoutes[0]) {
					toast.success('Почта Подверждена успешно!');
					toast.info('Можите уже зайти в акканут');
				} else if(routeToGo === allowedRoutes[1]) {
					toast.success('Почта Подверждена успешно!');
					toast.info('Можите уже зайти в акканут');
				}
				router.push(routeToGo);
			} else {
				router.push('/');
			}
		};

		const handleInput = (index: number, event: Event) => {
			const target = event.target as HTMLInputElement;
			const value = target.value;

			if (value) {
				if (index < otp.value.length - 1) {
					nextTick(() => {
						const inputs = document.querySelectorAll('input[type=text]');
						(inputs[index + 1] as HTMLInputElement).focus();
					});
				}
			}
		};

		const handleKeyDown = (index: number, event: KeyboardEvent) => {
			if (!/^[0-9]{1}$/.test(event.key) && !['Backspace', 'Delete', 'Tab'].includes(event.key) && !event.metaKey) {
				event.preventDefault();
			}

			if (event.key === 'Backspace' || event.key === 'Delete') {
				if (otp.value[index] === '') {
					if (index > 0) {
						nextTick(() => {
							const inputs = document.querySelectorAll('input[type=text]');
							(inputs[index - 1] as HTMLInputElement).focus();
						});
					}
				} else {
					otp.value[index] = '';
				}
			}
		};

		const handlePaste = (event: ClipboardEvent) => {
			event.preventDefault();
			const text = event.clipboardData?.getData('text');
			if (/^\d{5}$/.test(text)) {
				otp.value = text.split('');
				nextTick(() => {
					(document.querySelector('button[type=submit]') as HTMLButtonElement).focus();
				});
			}
		};

		onMounted(() => {
			$navigationBar.overlayShow();
			$statusBar.overlayShow();
			$navigationBar.setColor('#18181B');
			$statusBar.setColor('#18181B');

			const response =  authService.generateOtp();
		});

		return {
			otp,
			isSubmitDisabled,
			submitForm,
			handleInput,
			handleKeyDown,
			handlePaste
		};
	}
};
</script>

<style scoped></style>
