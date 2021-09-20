import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import externalGlobals from "rollup-plugin-external-globals";

export default {
  input: "src/index.js",
  plugins: [
    terser(),
    externalGlobals({
      "@kalenderjawa/pancawara": "Pancawara",
      "@kalenderjawa/saptawara": "Saptawara",
    }),
  ],
  output: [
    {
      file: pkg.module,
      format: "esm",
    },
    {
      file: pkg.browser,
      format: "iife",
      name: "Weton",
    },
    {
      file: pkg.main,
      format: "cjs",
    },
  ],
};
