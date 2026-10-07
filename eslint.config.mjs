import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "public/**",
    "vendor/**",
    "dist/**",
    "*.config.ts",
    "*.config.js",
    "next-env.d.ts",
  ]),
  ...nextVitals,
  ...nextTs,
]);
