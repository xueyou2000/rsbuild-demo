# Rsbuild Project

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```


推荐vscode配置

```json
{
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "cSpell.userWords": ["rsbuild", "stylelint"],

  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always",
    "source.fixAll.stylelint": "always",
    "source.fixAll": "always"
  },
  "prettier.requireConfig": true,
  // 关闭编辑器内置样式检查（避免与stylelint冲突）
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.validate": ["css", "less", "postcss", "scss", "sass"],
  "stylelint.packageManager": "pnpm",
  "stylelint.enable": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}

```