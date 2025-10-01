import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "IMUcraft文档站",
      description: "IMUcraft文档站",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
