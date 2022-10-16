import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import postCssPxToRem from "postcss-pxtorem";
import stylePxToRem from "./src/utils/stylePxToRem";

import { defaultSettings } from "../config";

// https://vitejs.dev/config/
export default defineConfig({
  mode: "hash",
  plugins: [
    stylePxToRem({
      viewportSize: defaultSettings.rootValue, // 1rem的大小
      minPixelValue: defaultSettings.minPixelValue, // 单位小于多少px不进行转换
      unitPrecision: defaultSettings.unitPrecision, // 转换后单位精度
      viewportUnit: "rem", // 转换单位
    }),
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      // 关键代码：自适应，px>rem转换
      plugins: [
        postCssPxToRem({
          rootValue: defaultSettings.rootValue, // 1rem的大小
          minPixelValue: defaultSettings.minPixelValue, // 单位小于多少px不进行转换
          unitPrecision: defaultSettings.unitPrecision, // 转换后单位精度
          propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: [], // 要忽略并保留为 px 的选择器
        }),
      ],
    },
  },
  server: {
    host: "0.0.0.0",
  },
});
