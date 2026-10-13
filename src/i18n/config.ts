import type {I18nStrings} from "./types";
import ARLocale from "./locales/ar";
import ENLocale from "./locales/en";
import ESLocale from "./locales/es";
import FRLocale from "./locales/fr";
import RULocale from "./locales/ru";

export type LocaleProfile = {
    name: string;
    messages: I18nStrings;
    langTag: string;
    direction: "rtl" | "ltr" | "auto";
    googleFontName: string;
    default?: boolean;
};

export type LocaleKey = keyof typeof localeToProfile;

export const localeToProfile = {
    // locale key must be in lowercase
    ar: {
        name: "العربية", // Name presented in language picker
        messages: ARLocale, // Locale translations
        langTag: "ar-EG", // Extremly important used in localizing dates, numbers and sitemap,  only English alphabet and hyphen allowed
        direction: "rtl", // UI layout direction
        googleFontName: "Cairo", // For OG image generation, font must support 400 and 700 weights, write name as it should goes in a URL, words separated with '+' instead of spaces
    },
    en: {
        name: "English",
        messages: ENLocale,
        langTag: "en-US",
        direction: "ltr",
        googleFontName: "IBM+Plex+Mono",
        default: true,
    },
    fr: {
        name: "Français", // Name presented in language picker
        messages: FRLocale, // Locale translations
        langTag: "fr-FR", // Extremly important used in localizing dates, numbers and sitemap, only English alphabet and hyphen allowed
        direction: "ltr", // UI layout direction
        googleFontName: "Noto+Sans", // For OG image generation, font must support 400 and 700 weights, write name as it should goes in a URL, words separated with '+' instead of spaces
    },
    es: {
        name: "Español", // Name presented in language picker
        messages: ESLocale, // Locale translations
        langTag: "es-ES", // Extremly important used in localizing dates, numbers and sitemap, only English alphabet and hyphen allowed
        direction: "ltr", // UI layout direction
        googleFontName: "Noto+Sans", // For OG image generation, font must support 400 and 700 weights, write name as it should goes in a URL, words separated with '+' instead of spaces
    },
    ru: {
        name: "Русский", // Name presented in language picker
        messages: RULocale, // Locale translations
        langTag: "ru-RU", // Extremly important used in localizing dates, numbers and sitemap, only English alphabet and hyphen allowed
        direction: "ltr", // UI layout direction
        googleFontName: "Noto+Sans", // For OG image generation, font must support 400 and 700 weights, write name as it should goes in a URL, words separated with '+' instead of spaces
    },


} satisfies Record<string, LocaleProfile>;

export const SUPPORTED_LOCALES = Object.keys(localeToProfile) as LocaleKey[];

export const DEFAULT_LOCALE =
    SUPPORTED_LOCALES.find(
        key => (localeToProfile[key] as LocaleProfile)?.default === true
    ) ?? SUPPORTED_LOCALES[0];

export const LOCALES_TO_LANG = Object.fromEntries(
    // For Sitemap
    Object.entries(localeToProfile).map(([locale, profile]) => [
        locale,
        profile.langTag,
    ])
) as Record<keyof typeof localeToProfile, string>;
