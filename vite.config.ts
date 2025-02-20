import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["src/setupTests.ts", "**/*.test.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        entryFileNames: "[name].js",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
});
