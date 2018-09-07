import "./shortcut";
import "./secondShortcut.with-weird.filename.js";
import fakeImport from "./notShortcut.js";
import "@vendor/my-npm-module";

console.log(shortcut);
console.log(secondShortcut);
console.log(fakeImport);
console.log(my_npm_module);