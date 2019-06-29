# Typescript Starter for Gridsome

This is a starter template for Gridsome using Typescript. It uses **eslint** and **typescript** for static code analisys. In order to integrate these tools with Visual Studio Code, you'll need to install **ESLint** and **Vetur** extensions for the editor.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create gridsome-ts https://github.com/cleitonper/gridsome-starter-typescript.git` to install this typescript starter
2. `cd gridsome-ts` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. happy coding 🎉🙌

### 3. Static Code Analysis - Command Line

1. edit the `.eslintrc.json` file and add your favorites rules from [`eslint`](https://eslint.org/docs/rules/), [`typescript`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules) and [`vue`](https://vuejs.github.io/eslint-plugin-vue/rules/).
2. run `yarn lint:check` to see static analysis result
3. run `yarn lint:fix` to fix errors found by `eslint`

### 4. Static Code Analysis - Visual Studio Code

As mentioned before, in order to lint your Typescript code in `*.vue` *Single File Components* with *vscode* you'll need to install [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [`Vetur`](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extensions for the editor.

Use the links above to install the extensions, or follow the steps below:

1. Open your vscode, type `CTRL + SHIFT + X`
2. Search for **ESLint**
3. Select and install the extension
4. Do same thing for **Vetur** extension

### 5. Useful links

* [Gridsome docs](https://gridsome.org/docs/)
* [Typescript docs](https://www.typescriptlang.org/docs/)
* [ESLint docs](https://eslint.org/)
* [ESLint rules](https://eslint.org/docs/rules/)
* [Typescript rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)
* [Vue rules](https://vuejs.github.io/eslint-plugin-vue/rules/)
* [ESLint extension for vscode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Vetur extension for vscode](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
