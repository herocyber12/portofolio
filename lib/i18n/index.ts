import type { Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { id } from "./dictionaries/id";

export * from "./config";
export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { en, id };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
