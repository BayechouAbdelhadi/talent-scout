import { useTranslation } from '@/lib/hooks/useTranslation';
import { languages } from '@/lib/translations';

export default function LanguageSelector() {
    const { t, lang, changeLanguage } = useTranslation();

    return (
        <div className="relative inline-block text-left">
            <select
                value={lang}
                onChange={(e) => changeLanguage(e.target.value as 'en' | 'fr')}
                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
                <option value="en">{t('english')}</option>
                <option value="fr">{t('french')}</option>
            </select>
        </div>
    );
} 