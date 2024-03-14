module.exports = {
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localeDetection: false,
  pages: {
    '/': ['header', 'home', "about", 'career', 'skills', 'projects', 'contact'],
  },
  // Function returning a Promise with the JSON file
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
};
