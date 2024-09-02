<template>
	<section class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
		<auth-back-button href="/auth/forgotPassword"></auth-back-button>
		<auth-logo-and-title :title="$t('auth_title')"></auth-logo-and-title>

		<div class="mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col">
			<form @submit.prevent="submitForm" ref="otpForm" class="space-y-5">
				<div class="flex items-center justify-center gap-3">
					<input
							v-for="(digit, index) in otp"
							:key="index"
							v-model="otp[index]"
							type="text"
							class="input input-primary input-otp-cube"
							maxlength="1"
							pattern="\d*"
							@input="handleInput(index, $event)"
							@keydown="handleKeyDown(index, $event)"
							@paste="handlePaste($event)"
							placeholder="0"
					/>
				</div>
				<div>
					<button
							:disabled="isSubmitDisabled"
							type="submit"
							class="button button-primary"
							:class="{ 'button-disabled': isSubmitDisabled }"
							form="otpForm">
						{{ $t('submit_button') }}
					</button>
					<button
							@click="generateOneTimePassword"
							:disabled="timer > 0"
							:class="{ 'button-disabled': timer > 0 }"
							class="button button-primary mt-2"
							type="button"
							form="otpForm"
					>
						{{
							timer > 0 ? `${$t('otp_resend_in')} ${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}` : $t('otp_resend_button')
						}}
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
import {AuthBackButton, AuthLogoAndTitle} from '#components';
import {useToast} from 'vue-toastification';
import authService from '~/services/api/authService';

export default {
	name: 'otpComponent',
	components: {AuthLogoAndTitle, AuthBackButton},

	setup() {
		const router = useRouter();
		const route = useRoute();
		const toast = useToast();
		const {$statusBar, $navigationBar, $getLocale, $t} = useNuxtApp();

		const otp = ref(['', '', '', '', '']);
		const email = ref<string | null>(null);
		const successUrl = ref<string | null>(null);
		const cancelUrl = ref<string | null>(null);

		const isSubmitDisabled = computed(() => otp.value.some((num) => num === ''));

		const timer = ref(180);
		const timerInterval = ref<number | null>(null);

		const startTimer = () => {
			timer.value = 180;
			timerInterval.value = window.setInterval(() => {
				if (timer.value > 0) {
					timer.value--;
				} else {
					clearInterval(timerInterval.value!);
					timerInterval.value = null;
				}
			}, 1000);
		};

		const handleInput = (index: number, event: Event) => {
			const target = event.target as HTMLInputElement;
			const value = target.value;

			if (value && index < otp.value.length - 1) {
				nextTick(() => {
					const inputs = document.querySelectorAll('input[type=text]');
					(inputs[index + 1] as HTMLInputElement).focus();
				});
			}
		};

		const handleKeyDown = (index: number, event: KeyboardEvent) => {
			if (
					!/^[0-9]{1}$/.test(event.key) &&
					!['Backspace', 'Delete', 'Tab'].includes(event.key) &&
					!event.metaKey
			) {
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
			if (/^\d{5}$/.test(<string>text)) {
				otp.value = text.split('');
				nextTick(() => {
					(document.querySelector('button[type=submit]') as HTMLButtonElement).focus();
				});
			}
		};

		const redirectToHomeIfParamsMissing = async () => {
			if (!route.params.email || !route.params.successUrl || !route.params.cancelUrl) {
				await router.push('/' + $getLocale() + cancelUrl.value);
			}
		};

		const resetOtp = async () => {
			if (timerInterval.value) return;

			try {
				toast.info(<any>$t('otp_resent'));
				await generateOneTimePassword();
				startTimer();
			} catch (error) {
				toast.error(error.response.data.message);
			}
		};

		const generateOneTimePassword = async () => {
			try {
				const response = await authService.generateOtp({
					email: email.value,
				});
			} catch (error) {
				toast.error(error.response.data.message);
			}
		}

		const submitForm = async () => {
			try {
				const otpCode = parseInt(otp.value.join(''), 10);
				const response = await authService.verifyOtp({
					email: email.value,
					otp: otpCode,
				});
				toast.success(response.message);
				await router.push('/' + $getLocale() + successUrl.value);
			} catch (error) {
				toast.error(error.response.data.message);
			}
		};

		onMounted(async () => {
			await redirectToHomeIfParamsMissing();

			$navigationBar.overlayShow();
			$statusBar.overlayShow();
			$navigationBar.setColor('#18181B');
			$statusBar.setColor('#18181B');

			email.value = route.params.email ? atob(<string>route.params.email) : null;
			successUrl.value = route.params.successUrl ? atob(<string>route.params.successUrl) : null;
			cancelUrl.value = route.params.cancelUrl ? atob(<string>route.params.cancelUrl) : null;

			await generateOneTimePassword();
			startTimer();
		});

		return {
			otp,
			isSubmitDisabled,
			submitForm,
			handleInput,
			handleKeyDown,
			timer,
			handlePaste,
			generateOneTimePassword,
		};
	},
};
</script>


<style scoped></style>
