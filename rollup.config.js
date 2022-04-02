/*
 * @Author: xiaoliang.pan
 * @Date: 2022-04-02 11:37:31
 * @LastEditTime: 2022-04-02 17:28:38
 * @LastEditors: xiaoliang.pan
 * @Description:
 * @FilePath: /rollup_demo/rollup.config.js
 *
 */
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
export default {
  input: "./src/index.ts",
  output: [
    {
      file: "dist/amd/bundle.js",
      format: "amd",
      amd: {
        id: "Test",
      },
    },
    {
      file: "dist/cjs/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/esm/bundle.js",
      format: "esm",
    },
    {
      file: "dist/iife/bundle.js",
      format: "iife",
      name: "Test",
      globals: {
        lodash: "_", //告诉rollup全局变量_即是lodash
      },
    },
    {
      file: "dist/umd/bundle.js",
      format: "umd",
      name: "Test",
      globals: {
        lodash: "lodash",
      },
      amd: {
        id: "Test",
      },
    },
    {
      file: "dist/system/bundle.js",
      format: "system",
    },
  ],
  external: ["lodash"],
  plugins: [
    resolve(),
    commonjs(),

    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts", ".tsx"],
    }),
    typescript(),
    // terser(),
    postcss(),
    serve({
      open: true,
      port: 8080,
      contentBase: "./dist",
    }),
  ],
};
