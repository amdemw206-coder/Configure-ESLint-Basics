import js from "@eslint/js";
import globals from "globals";


export default [
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { 
      globals: globals.node 
    },
    // Add this block below
    rules: {
      "no-unused-vars": "warn",   // Changes unused variables from an error to a warning
      "no-console": "off",        // Allows you to use console.log without ESLint complaining
      "semi": ["error", "always"] // Forces you to use semicolons
    }
  },
];
