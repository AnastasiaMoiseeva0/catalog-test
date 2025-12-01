import { defineConfig } from 'rollup';

export default defineConfig({
    root: '.',
    publicDir: './assets',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './index.html'
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: ''
            }
        }
    }
})