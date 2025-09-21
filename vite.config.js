import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()], // ✔ React and Tailwind plugins
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✔ @ now points to src/
    },
  },
});
