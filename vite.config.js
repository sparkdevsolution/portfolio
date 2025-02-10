// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(() => {
//     return {
//         build: {
//             outDir: 'build',
//         },
//         plugins: [react()],
//     };
// });

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can change the port here
  },
  resolve: {
    alias: {
      "@": "/src", // Simplified import paths
    },
  },
});
