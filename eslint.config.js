import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn'
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        matchMedia: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        console: 'readonly',
        URL: 'readonly',
        Math: 'readonly',
        Map: 'readonly',
        Set: 'readonly',
        Array: 'readonly',
        String: 'readonly',
        Number: 'readonly',
        Object: 'readonly',
        encodeURIComponent: 'readonly',
        decodeURIComponent: 'readonly',
        performance: 'readonly',
        Node: 'readonly',
        HTMLElement: 'readonly'
      }
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'scripts/**']
  }
];
