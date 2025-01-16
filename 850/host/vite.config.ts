import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation"

const port = 5170;

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        kendoBugRemote: 'http://localhost:5171/assets/kendo-mfe-bug.js'
      },
      shared: {
        "react": {
          version: "18.2.0",
        },
        "react-dom": {
          version: "18.2.0",
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
