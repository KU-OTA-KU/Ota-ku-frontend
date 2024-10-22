export const API_CONFIG = {
    BASE_URL: process.env.API_BASE_URL || 'http://localhost:49152/api',
    TIMEOUT: Number(process.env.API_REQUEST_TIMEOUT) || 10000,
    LOCAL_STORAGE_TOKEN_KEY: process.env.API_LOCALE_STORAGE_TOKEN_KEY || 'at',
    TOKEN_PREFIX: process.env.API_BARRIER_TOKEN_NAME || 'Bearer',
    LOCALE_KEY: process.env.SITE_LOCALE_KEY || 'i18n_redirected',
};
