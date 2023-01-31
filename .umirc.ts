import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'pnpm',
  plugins: [
    '@umijs/plugins/dist/qiankun',
  ], // 使用@umijs/max时内置了该插件，无需额外安装
  qiankun: {
    master: {},
  },
});
