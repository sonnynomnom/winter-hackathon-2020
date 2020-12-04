import { IStore } from "../models";

export const selectEntries = (s: IStore) => {
  return s.entries;
};

export const selectEntriesForConcept = (s: IStore, concept: string) =>
  s.entries.filter((e) => !!(e.concept === concept));

export const selectEntriesForConceptAndLanugage = (
  s: IStore,
  concept: string,
  language: string
) =>
  s.entries.filter(
    (e) => !!(e.concept === concept) && !!(e.language === language)
  );

export const selectEntriesForLanguage = (s: IStore, language: string) =>
  s.entries.filter((e) => !!(e.language === language));
