import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Force Vite to pre-bundle these so the dev server resolves them correctly
    include: ['lenis', 'framer-motion'],
    exclude: ['lucide-react'],
  },
  resolve: {
    // Prefer the "module" / "default" export for packages that ship only ESM
    mainFields: ['module', 'main'],
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber'],
          'motion-vendor': ['framer-motion'],
        },
      },
    },
  },
});
