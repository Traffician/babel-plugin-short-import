# babel-plugin-short-import

Small Babel plugin allowing to use shorthand imports.

It generates import's identifier from file name (without extension), so all line can be written in shorter version as `import "path/to/the/file"`. It also works with NPM modules. 

Plugin requires **Babel 7** and it may cause conflicts with Webpack's methods of including styles and other files.

## Installation

```sh
$ npm install --save-dev babel-plugin-short-import
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": [
    "babel-plugin-short-import", 
    { 
      "importAsNamespace": false,
      "useCamelCase": false
    }
  ]
}
```

### Via CLI

```sh
$ babel --plugins babel-plugin-short-import script.js
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: [
    'babel-plugin-short-import', 
    { 
      importAsNamespace: false,
      useCamelCase: false
    }
  ]
});
```

## Parameters
* **importAsNamespace**

  If `false` (default) it will behave like `import file from "./path/file.js"`.

  Otherwise it will import all namespace - `import * as file from "./path/file.js"`.

* **useCamelCase**

  If `false` (default) it will replace invalid characters in file name with underscore ( _ ) like `import my_file from "./path/my-file.js`.

  Otherwise it will apply camel case - `import * as myFile from "./path/my-file.js"`.

## Examples
**path/to/the/file.js** or **@vendor/some-module**
```javascript
  export const test1 = "Test 1";
  export const test2 = { test: 2 };
  export default "Default test";
```

### Default importing
Configured with `{ "importAsNamespace": false }`

Import in this example is an equivalent of `import file from "path/to/the/file.js"`

```javascript
import "path/to/the/file.js";

console.log(file.test1); // undefined
console.log(file.test2); // undefined
console.log(file); // "Default test"
```

### Namespace importing
Configured with `{ "importAsNamespace": true }`

Import in this example is an equivalent of `import * as file from "path/to/the/file.js"`

```javascript
import "path/to/the/file.js";

console.log(file.test1); // "Test 1"
console.log(file.test2); // { "test": 2 }
console.log(file); // { "test1": "Test 1", "test2": { "test": 2 }, "default": "Default test" }
```

### NPM modules importing
Configured with `{ "importAsNamespace": true, "useCamelCase": true }`

```javascript
import "@vendor/some-module";

console.log(someModule.test1); // "Test 1"
console.log(someModule.test2); // { "test": 2 }
console.log(someModule.default); // "Default test"
```