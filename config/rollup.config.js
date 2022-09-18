import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// 允许 Rollup 从 JSON 文件导入数据
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import vue from "rollup-plugin-vue";
import pkg from "../package.json";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const extensions = [".js", ".jsx", ".ts", ".tsx", ".vue", ".cjs", ".mjs", ".es6", ".es"];
const input = ["src/main.ts"];
const plugins = [
  /**
   * 支持 .vue 文件
   */
  vue({
    css: true,
  }),
  babel({
    exclude: /node_moduels/,
    extensions,
    /**
     * 'runtime' - 如果你要用rollup构建一个js包的时候，使用该配置，
     * 该配置要结合@babel/plugin-transform-runtime插件使用，
     * 使用@babel/plugin-transform-runtime也要安装@babel/runtime插件
     *
     * 'external' 要结合@babel/plugin-external-helpers插件使用，
     * 它会把helpers 收集到一个共享模块，我的理解是相当于runtime和bundled一个集合，
     * 就是把helpers 抽到一个全局的共享模块但是又不会造成全局的污染
     *
     * 'bundled' - 如果用rollup构建一个项目的用此参数
     */
    babelHelpers: "bundled",
  }),
  resolve({
    extensions,
    modulesOnly: true,
    preferredBuiltins: false,
  }), // 告诉 Rollup 如何查找外部模块
  commonjs(), // 支持 commonjs 语法
  json(),
  postcss({
    plugins: [autoprefixer(), cssnano()],
    extract: "css/index.css",
  }),
];
export default [
  {
    input,
    output: [
      {
        file: `dist/${pkg.name}.umd.js`,
        name: "SmartyUI", // 如果是 iife 或者 umd 格式，需要指定一个全局变量（可以通过window访问）
        format: "umd",
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
      {
        file: `dist/${pkg.name}.umd.min.js`,
        name: "SmartyUI", // 如果是 iife 或者 umd 格式，需要指定一个全局变量（可以通过window访问）
        format: "umd",
        exports: "named",
        sourcemap: true,
        globals: {
          vue: "Vue",
        },
        plugins: [terser()],
      },
    ],
    external: ["vue"],
    plugins,
  },
  {
    input,
    output: [
      {
        dir: `dist/esm`,
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
      {
        dir: `dist/cjs`,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: ["vue"],
    plugins,
  },
];
