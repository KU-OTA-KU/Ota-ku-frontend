<template>
  <div class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
    <div class="block lg:hidden pt-4 pr-5 pl-5 absolute top-0 left-0">
      <NuxtLink to="/auth/forgotpassword" class="font-sans font-sm">
        <svg class="w-10 h-10 p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </NuxtLink>
    </div>
    <div class="pointer-events-none select-none">
      <NuxtImg class="mx-auto w-52 pointer-events-none select-none" preload format="webp" src="/otaKu/logo.png"
        alt="Ota-ku Смотреть аниме в нашем платформе" />
      <h2 class="mt-3 text-center text-lg font-semibold font-sans leading-5">Лаг Сиинг уже в пути!
      </h2>
    </div>
    <div class="mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col">
      <form @submit.prevent="submitForm" ref="otpForm" class="space-y-5">
        <div class="flex items-center justify-center gap-3">
          <input v-model="otp[0]" type="text" class="input input-primary input-otp-cube" maxlength="1" pattern="\d*"
            @input="handleInput(0, $event)" @keydown="handleKeyDown(0, $event)" @paste="handlePaste($event)"
            placeholder="0" />
          <input v-model="otp[1]" type="text" class="input input-primary input-otp-cube" maxlength="1" pattern="\d*"
            @input="handleInput(1, $event)" @keydown="handleKeyDown(1, $event)" @paste="handlePaste($event)"
            placeholder="0" />
          <input v-model="otp[2]" type="text" class="input input-primary input-otp-cube" maxlength="1" pattern="\d*"
            @input="handleInput(2, $event)" @keydown="handleKeyDown(2, $event)" @paste="handlePaste($event)"
            placeholder="0" />
          <input v-model="otp[3]" type="text" class="input input-primary input-otp-cube" maxlength="1" pattern="\d*"
            @input="handleInput(3, $event)" @keydown="handleKeyDown(3, $event)" @paste="handlePaste($event)"
            placeholder="0" />
          <input v-model="otp[4]" type="text" class="input input-primary input-otp-cube" maxlength="1" pattern="\d*"
            @input="handleInput(4, $event)" @keydown="handleKeyDown(4, $event)" @paste="handlePaste($event)"
            placeholder="0" />
        </div>
        <div>
          <button :disabled="isSubmitDisabled" type="submit" class="button button-primary"
            :class="{ 'button-disabled': isSubmitDisabled }">Отправить</button>
        </div>
      </form>

      <div class="mt-5 text-center">
        <p class="text-xs text-gray-400">Используя сайт / приложение, Вы соглашаетесь с условиями <NuxtLink
            to="/doc/terms_ru" class="underline text-blue-500">Пользовательсово соглашения.</NuxtLink> и <NuxtLink
            to="/doc/privacy_policy_ru" class="underline text-blue-500">Политика конфиденциальности.</NuxtLink> Если Вы
          не согласны с условиями данного соглашения, не используйте сайт / приложение Ota-ku!<br>
          а также подтверждаете, что вам больше 16 лет.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted } from 'vue';
import { useNuxtApp } from '#app';
export default defineComponent({
  name: "otpComponent",
  data() {
    return {
      otp: ['', '', '', '', ''],
    };
  },

  setup() {
    const { $statusBar, $navigationBar } = useNuxtApp();

    onMounted(async () => {
      $navigationBar.overlayShow();
      $statusBar.overlayShow();
      $navigationBar.setColor('#18181B');
      $statusBar.setColor('#18181B');
    });
  },

  computed: {
    isSubmitDisabled() {
      return this.otp.some(num => num === '');
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', { otp: this.otp });
      this.$router.push("/auth/changePassword")
    },
    handleInput(index: number, event: Event) {
      const target = event.target as HTMLInputElement;
      const value = target.value;

      if (value) {
        if (index < this.otp.length - 1) {
          nextTick(() => {
            const inputs = document.querySelectorAll('input[type=text]');
            (inputs[index + 1] as HTMLInputElement).focus();
          });
        }
      }
    },
    handleKeyDown(index: number, event: KeyboardEvent) {
      if (!/^[0-9]{1}$/.test(event.key) && !['Backspace', 'Delete', 'Tab'].includes(event.key) && !event.metaKey) {
        event.preventDefault();
      }

      if (event.key === 'Backspace' || event.key === 'Delete') {
        if (this.otp[index] === '') {
          if (index > 0) {
            nextTick(() => {
              const inputs = document.querySelectorAll('input[type=text]');
              (inputs[index - 1] as HTMLInputElement).focus();
            });
          }
        } else {
          this.otp[index] = '';
        }
      }
    },
    handlePaste(event: ClipboardEvent) {
      event.preventDefault();
      const text = event.clipboardData?.getData('text');
      if (/^\d{5}$/.test(text)) {
        this.otp = text.split('');
        nextTick(() => {
          (document.querySelector('button[type=submit]') as HTMLButtonElement).focus();
        });
      }
    }
  }
});
</script>

<style scoped></style>
