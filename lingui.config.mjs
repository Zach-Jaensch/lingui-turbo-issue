/** @type {import("@lingui/conf").LinguiConfig} */
const linguiConfig = {
  locales: ["en-US"],
  pseudoLocale: "pseudo",
  sourceLocale: "en-US",
  fallbackLocales: {
    default: "en-US",
  },
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}",
      include: ["<rootDir>/src"],
    },
  ],
};

export default linguiConfig;
