const dictionaries = (namespace) => ({
  en: () =>
    import(`../locales/en/${namespace}.json`).then((module) => module.default),
  fr: () =>
    import(`../locales/fr/${namespace}.json`).then((module) => module.default),
});

export const getDictionary = async (locale, namespace) => {
  const dictionaryGetter = dictionaries(namespace);
  return await dictionaryGetter[locale]();
};
