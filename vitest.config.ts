import swc from 'unplugin-swc'
import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: './',
    globals: true,
    passWithNoTests: true,
    include: ['tests/unit/**/*.test.ts'],
    env: loadEnv('test', process.cwd(), ''),
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage/unit',
      include: ['src/**/*.ts']
    }
  },
  plugins: [swc.vite({ module: { type: 'es6' } }), tsconfigPaths()]
})
