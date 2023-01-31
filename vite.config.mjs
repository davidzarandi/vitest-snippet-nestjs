import { defineConfig } from "vite";
import { VitePluginNode as vitePluginNode } from "vite-plugin-node";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
  },
  test: {
    passWithNoTests: true,
    coverage: {
      provider: "istanbul",
      reporter: ["lcov", "text"],
    },
  },
  plugins: [
    ...vitePluginNode({
      adapter: "nest",
      appPath: "./src/index.ts",
      tsCompiler: "swc",
    }),
    tsconfigPaths({
      projects: ["./tsconfig.json"],
    }),
  ],
  optimizeDeps: {
    // Vite does not work well with optional dependencies,
    // mark them as ignored for now
    exclude: [
      "@nestjs/microservices",
      "@nestjs/platform-express",
      "@nestjs/websockets",
      "@nestjs/terminus",
      "rxjs",
      "cache-manager",
      "class-transformer",
      "class-validator",
      "redis",
      "json-socket",
      "cli-color",
      "optional",
    ],
  },
});
