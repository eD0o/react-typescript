# 1 - Preparation

## 1.2 - Tools

VS Code, Node, Git, NPM, Vite and TypeScript.

### 1.2.1 - VS Code Setup

- Plugins
  Prettier, ESLint

- React Snippets
  https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

- Settings.json (used in the course)

```json
{
  "workbench.colorTheme": "Origamid Next",
  "workbench.iconTheme": "origamid-next-icons",
  "editor.fontFamily": "IBM Plex Mono, Monaco, Courier New, monospace",
  "editor.fontSize": 16,
  "editor.lineHeight": 28,
  "editor.tabSize": 2,
  "editor.tabCompletion": "on",
  "editor.wordWrap": "on",
  "editor.formatOnSave": true,
  "editor.colorDecorators": false,
  "editor.autoClosingBrackets": "always",
  "editor.autoClosingQuotes": "always",
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "selection",
  "editor.bracketPairColorization.enabled": false,
  "terminal.integrated.fontSize": 16,
  "breadcrumbs.enabled": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  "workbench.startupEditor": "none",
  "workbench.statusBar.visible": false,
  "window.title": "${activeEditorMedium}${separator}${rootName}",
  "window.newWindowDimensions": "inherit",

  "telemetry.telemetryLevel": "off",
  "extensions.ignoreRecommendations": true,

  "color-highlight.markerType": "dot-before",
  "html.autoClosingTags": false,
  "files.associations": {
    "*.js": "javascriptreact",
    "*.tsx": "typescriptreact"
  },
  "prettier.trailingComma": "all",
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "html.format.wrapAttributes": "auto",
  "html.format.wrapLineLength": 0,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.donotVerifyTags": true
}
```

## 1.3 - Environment Setup

### 1.3.1 - Workspace

```js
npm create vite@latest projectname
```

```js
cd projectname
```

```js
npm i
```

```js
npm run dev
```

### 1.3.2 - ESLint and TSConfig (used in the course)

- ESLint (eslintrc.cjs)

```cjs
rules: {
  "react-refresh/only-export-components": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-unused-vars": "off",
}
```

- TSConfig (tsconfig.json)

```json
{
  "compilerOptions": {
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
```
