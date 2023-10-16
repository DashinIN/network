import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgx from '@svgx/vite-plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
    plugins: [
        svgx(),
        react(),
        checker({
            eslint: {
                lintCommand: 'eslint "./src/**/*.{ts,tsx}"',

            },
            stylelint: {
                lintCommand: 'stylelint "./src/**/*.{scss, module.scss}"',
            },
        }),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:5000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
