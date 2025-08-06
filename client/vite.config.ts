import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "..", "shared"),
    },
  },
  server: {
    port: 3000,
    host: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}); 