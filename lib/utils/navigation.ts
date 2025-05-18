import { Language } from "../translations";

export function getUrlWithLang(path: string, lang: Language): string {
  // Remove any existing query string
  const basePath = path.split("?")[0];

  // Add or update lang parameter
  const separator = basePath.includes("?") ? "&" : "?";
  return `${basePath}${separator}lang=${lang}`;
}
