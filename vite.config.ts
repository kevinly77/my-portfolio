import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleX from "vite-plugin-stylex";
import path from "node:path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
  publicDir: "./src/assets",
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
