import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation"

const port = 5171;

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "kendo-mfe-bug",
      filename: "kendo-mfe-bug.js",
      exposes: {
        "./KendoBug": "./src/App.tsx",
      },
      shared: {
        "react": {
          requiredVersion: "19.0.0"
        },
        "react-dom": {
          requiredVersion: "19.0.0"
        }
      },
    }),
  ],
  server: {
    open: true,
    watch: {
      usePolling: false,
      interval: 2000,
      binaryInterval: 3000
    },
    port: port,
  },
  preview: {
    port: port,
  },
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false
  },
})
