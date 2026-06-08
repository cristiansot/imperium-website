// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     dedupe: ['react', 'react-dom']  // Esto evita duplicación de React
//   }
// })


// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Usa rutas relativas
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Mantén los nombres originales de las imágenes
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.webp') || assetInfo.name?.endsWith('.svg')) {
            return 'assets/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})