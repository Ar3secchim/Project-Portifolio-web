import react from '@vitejs/plugin-react';
import { compile } from '@mdx-js/mdx';
import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    {
      name: 'compile-mdx-for-tests',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.endsWith('.mdx')) return undefined;
        const compiled = await compile(code, {
          outputFormat: 'program',
          providerImportSource: '@mdx-js/react',
        });
        return { code: String(compiled), map: null };
      },
    },
    react(),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') },
  },
  test: {
    environment: 'jsdom',
    include: ['tests/unit/**/*.test.{ts,tsx}'],
    setupFiles: ['./tests/setup.ts'],
  },
});
