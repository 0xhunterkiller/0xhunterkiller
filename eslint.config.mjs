import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // disable this one specifically
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      // optional: keep console logs in dev
      "no-console": "off",
    },
  },
];

export default eslintConfig;
