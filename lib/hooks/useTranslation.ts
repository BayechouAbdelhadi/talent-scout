import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { translations, Language, TranslationKey } from "../translations";

export function useTranslation() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const lang = (searchParams?.get("lang") as Language) || "en";

  const t = (key: string): string => {
    // Split the key by dots and traverse the translations object
    const keys = key.split(".");
    let result: any = translations[lang];

    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    // If the result is an object, return the key to avoid React rendering errors
    if (typeof result === "object") {
      console.warn(
        `Translation key "${key}" returned an object instead of a string`
      );
      return key;
    }

    return result as string;
  };

  const changeLanguage = (newLang: Language) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("lang", newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    t,
    lang,
    changeLanguage,
  };
}
