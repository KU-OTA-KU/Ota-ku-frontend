export default defineNuxtPlugin(() => {
    if (typeof window !== 'undefined') {
        const schemeQuery = window.matchMedia('(prefers-color-scheme: light)');
        console.log(schemeQuery)

        function updateScheme(event: any) {
            const newScheme = event.matches ? "тестная" : "светлая";
            console.log(`Цветовая схема системы обновлена на ${newScheme}.`);
        }

        schemeQuery.addEventListener('change', updateScheme);
    }
});
