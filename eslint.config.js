import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from 'eslint-config-prettier' 


export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  prettier, // Afegeix la configuració de Prettier per evitar conflictes de format
]

module.exports = {
  extends: [
    "eslint:recommended",
    "prettier"
  ]
};
