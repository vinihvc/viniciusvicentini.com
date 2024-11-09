import pluginJs from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import prettier from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      '@next/next': nextPlugin,
    },
  },
  { ignores: ['.next', 'node_modules', '.contentlayer'] },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: { react: { version: 'detect' } },
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      ...pluginReactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
    },
  },
]
