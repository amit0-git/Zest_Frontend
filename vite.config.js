import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000', // Your backend server URL
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrite path if needed
            },
        },
    }
   
});

// export default defineConfig({
//     plugins: [react()],
//     resolve: {
//       alias: {
//         '@': '/src',
//       },
//     },
//   });