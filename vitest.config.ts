import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      reporter: ["lcov", "html"],
      include: ["src"],
      exclude: ["**/*.test.tsx", "**/*.stories.tsx", "**/index.ts", "**/setupTests.ts"],
    },
  },
});
