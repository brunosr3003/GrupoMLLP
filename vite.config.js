import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      // Proxy só será usado no modo de desenvolvimento
      proxy: mode === 'development' ? {
        '/enviarFormulario': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        },
      } : undefined,
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          // Configurações extras de output, se necessário
        },
      },
    },
  };
});
