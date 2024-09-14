import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import hy from './locales/hy.json';
import ja from './locales/ja.json';
import ru from './locales/ru.json';
import uk from './locales/uk.json';
import zh from './locales/zh.json';

export default defineI18nConfig(() => ({
    messages: {
        en,
        es,
        fr,
        hy,
        ja,
        ru,
        uk,
        zh
    }
}));
