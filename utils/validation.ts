import { useNuxtApp } from '#app';

export interface ValidationErrors {
    email?: string;
    login?: string;
    password?: string;
    repeatPassword?: string;
}

export function validateEmail(email: string, errors: Record<string, string>): void {
    const { $t } = useNuxtApp(); // Используем контекст приложения для доступа к переводу

    if (!email) {
        errors.email = <string>$t('validation.email_required'); // Переводим строку
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase())) {
        errors.email = <string>$t('validation.email_invalid'); // Переводим строку
    } else {
        delete errors.email;
    }
}

export function validateLogin(login: string, errors: Record<string, string>): void {
    const { $t } = useNuxtApp();

    if (!login) {
        errors.login = <string>$t('validation.login_required');
    } else {
        delete errors.login;
    }
}

export function validateOtpInput(otp: string, errors: Record<string, string>): void {
    const { $t } = useNuxtApp();

    if (!otp) {
        errors.otp = <string>$t('validation.otp_required');
    } else {
        delete errors.otp;
    }
}

export function validatePassword(password: string, errors: Record<string, string>): void {
    const { $t } = useNuxtApp();

    if (!password) {
        errors.password = <string>$t('validation.password_required');
    } else if (password.length < 8) {
        errors.password = <string>$t('validation.password_min_length');
    } else {
        delete errors.password;
    }
}

export function validateRepeatPassword(password: string, repeatPassword: string, errors: Record<string, string>): void {
    const { $t } = useNuxtApp();

    if (!repeatPassword) {
        errors.repeatPassword = <string>$t('validation.repeat_password_required');
    } else if (password !== repeatPassword) {
        errors.repeatPassword = <string>$t('validation.passwords_do_not_match');
    } else {
        delete errors.repeatPassword;
    }
}
