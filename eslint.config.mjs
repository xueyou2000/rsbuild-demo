import { defineFlatConfig } from 'eslint-define-config'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import globals from 'globals'

import { fixupConfigRules } from '@eslint/compat'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import react from 'eslint-plugin-react/configs/recommended.js'
import reactJsx from 'eslint-plugin-react/configs/jsx-runtime.js'

import pluginPrettier from 'eslint-plugin-prettier'
import pluginTypescript from '@typescript-eslint/eslint-plugin'

export default defineFlatConfig([
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...fixupConfigRules([
    {
      ...react,
      settings: {
        pluginReact: { version: 'detect' },
      },
    },
    reactJsx,
  ]),
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      prettier: pluginPrettier,
      '@typescript-eslint': pluginTypescript,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      quotes: ['error', 'single'], // 使用单引号
      semi: ['error', 'never'], // 不在语句末尾使用分号
      '@typescript-eslint/explicit-function-return-type': 'off', // 关闭显式函数返回类型检查
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭显式模块边界类型检查
      'prettier/prettier': 'error', // 将 Prettier 规则作为错误处理
    },
  },
  { ignores: ['dist/'] },
])
