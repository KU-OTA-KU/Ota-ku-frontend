// middleware/i18n.ts
import {defineNuxtRouteMiddleware, useCookie, navigateTo, useRoute} from '#app';

function removeLocalePrefix(path: string): string {
    const localePattern = /^\/[a-z]{2}(\/|$)/;
    return path.replace(localePattern, '/');
}

export default defineNuxtRouteMiddleware(async (to) => {
    const locale = useCookie('user-locale').value || '';

    if (locale === 'en') {
        if (/^\/[a-z]{2}(\/|$)/.test(to.fullPath)) {
            const newPath = removeLocalePrefix(to.fullPath);
            return navigateTo(newPath);
        }
        return;
    }

    const localePrefix = `/${locale}`;

    if (to.fullPath.startsWith(localePrefix)) {
        return;
    }

    const pathSegments = to.fullPath.split('/').filter(Boolean);
    console.log(pathSegments);
    if (pathSegments.length > 1 && pathSegments[0] !== locale) {
        pathSegments.shift();
    }

    const newPath = `/${locale}/${pathSegments.join('/')}`;
    console.log("new-path: " + newPath);

    const route = useRoute();
    if (route.matched.length > 0) {
        return;
    }

    return navigateTo(newPath);
});
