export const i18n = {
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  pages: {
    '/': ['header', 'home', "about", 'career', 'skills', 'projects', 'contact'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`../public/locales/${lang}/${ns}.json`).then((m) => m.default),
};
