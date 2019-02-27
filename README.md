# Typescript Starter for Gridsome

This is a starter template for Gridsome using Typescript. It uses **wotan** for command line code analisys and **tslint** for integration with vscode. In order to work with Visual Studio Code, you'll need to install **TSLint** and **TSLint Vue** extensions for the editor.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create gridsome-ts https://github.com/cleitonper/gridsome-starter-typescript.git` to install this typescript starter
2. `cd gridsome-ts` to open folder
3. `gridsome develop` to start local dev server at `http://localhost:8080`
4. happy coding 🎉🙌

### 3. Static Code Analysis - Command Line

1. edit the `tslint.json` file and add your favorites [`tslint rules`](https://palantir.github.io/tslint/rules/).
2. run `yarn lint:check` to see static analysis result
3. run `yarn lint:fix` to fix errors found by `wotan` and `tslint`

### 4. Static Code Analysis - Visual Studio Code

As mentioned before, in order to lint your Typescript code in `*.vue` *Single File Components* with *vscode* you'll need to install [`TSLint`](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin) and [`TSLint Vue`](https://marketplace.visualstudio.com/items?itemName=prograhammer.tslint-vue) extensions for the editor.

Click in the links above to install it, or follow the steps below:

1. With your vscode open, type `CTRL + SHIFT + X`
2. Search for **TSLint** (select the extension published by Microsoft)
3. Select and install the extension
4. Do same thing for **TSLint Vue** extension

### 5. Useful links

* [Gridsome docs](https://gridsome.org/docs/)
* [Typescript docs](https://www.typescriptlang.org/docs/)
* [TSLint rules](https://palantir.github.io/tslint/rules/)
* [Fimbullinter/wotan docs](https://github.com/fimbullinter/wotan)
* [TSLint extension for vscode](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
* [TSLint Vue extension for vscode](https://marketplace.visualstudio.com/items?itemName=prograhammer.tslint-vue)
