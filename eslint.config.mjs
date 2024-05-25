// Eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

const reactRules = fixupConfigRules(pluginReactConfig);

export default {
  globals: globals.browser,
  extends: ["plugin:js/recommended"],
  ...reactRules,
  rules: {
    ...reactRules.rules,
    "react/react-in-jsx-scope": "off", // Desactiva la necesidad de importar React
  },
};
