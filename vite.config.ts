import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    base: '/',
    server: {
        port: 3003,
        origin: ' http://127.0.0.1:3003',
    },
    resolve: {
        alias: {
            src: '/src',
            components: '/src/components',
            library: '/src/library',
            style: '/src/style',
            types: '/src/types',
            utils: '/src/utils',
            context: '/src/context',
            router: '/src/router',
            service: '/src/service',
            test: '/src/test',
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString();
                    }
                },
            },
        },
    },
});
