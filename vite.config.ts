import includeHtml from "vite-include-html-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  server: { port: 6969 },
  build: { outDir: "../dist" },
  plugins: [includeHtml()],
});
