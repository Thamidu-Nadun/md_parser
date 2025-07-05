import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'MyMarkdownParser',
            fileName: (format) => `bundle.min.${format}.js`,
            formats: ['es', 'cjs'], // output both ESM and CommonJS
        },
        rollupOptions: {
            external: [
                'markdown-it',
                'markdown-it-emoji',
                'js-yaml',
                // add more here to avoid bundling external deps
            ],
            plugins: [terser()],
        },
        emptyOutDir: true,
        minify: 'terser',
    }
});
