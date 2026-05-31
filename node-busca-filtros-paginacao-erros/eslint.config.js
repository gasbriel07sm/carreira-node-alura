import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
    { 
        files: ["**/*.{js,mjs,cjs}"], 
        plugins: { js }, 
        extends: ["js/recommended"], 
        languageOptions: {
            globals: { ...globals.node, ...globals.browser, ...globals.es2021 },
            ecmaVersion: 2021,
        },
        rules: {
            "indent": ["error", 4],
            "linebreak-style": ["error", "windows"],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
        }
    },
]);
