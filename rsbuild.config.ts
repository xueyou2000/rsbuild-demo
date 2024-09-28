import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginTypedCSSModules } from '@rsbuild/plugin-typed-css-modules'
import { pluginTypeCheck } from '@rsbuild/plugin-type-check'

console.log('>>>', process.env.NODE_ENV)

export default defineConfig({
  source: {
    alias: {
      '@': './src',
    },
  },
  plugins: [pluginTypeCheck(), pluginReact(), pluginSass(), pluginTypedCSSModules()],
})
