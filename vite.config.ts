import includeHtml from "vite-include-html-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: { outDir: "./dist" },
  plugins: [includeHtml()],
});
