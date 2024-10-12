import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // sentryVitePlugin({
    //   org: "honey-bank",
    //   project: "javascript-react",
    // }),
    sentryVitePlugin({
      org: "honey-bank",
      project: "3-greactsap-threejs_apple-web-clone",
    }),
  ],

  build: {
    sourcemap: true,
  },
});
