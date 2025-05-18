import { en } from "@/translations/en";
import { fr } from "@/translations/fr";

export type Language = "en" | "fr";

export const languages: Language[] = ["en", "fr"];

// Create a type for the translation keys based on the English translations
type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;

type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
          DotNestedKeys<T[K]>
        >}`;
      }[Exclude<keyof T, symbol>]
    : ""
) extends infer D
  ? Extract<D, string>
  : never;

export type TranslationKey = DotNestedKeys<typeof en>;

export const translations = {
  en,
  fr,
} as const;
