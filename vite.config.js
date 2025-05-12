import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import svgr from "vite-plugin-svgr";
// import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), svgr(), tailwindcss()],
  plugins: [react()],
  base: "/OCPR13-WealthHealth/",
  build: {
    outDir: "dist/new",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(dirname("index.html"), "index.html"),
        employeeList: resolve(
          dirname("employee-list.html"),
          "employee-list.html",
        ),
      },
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
