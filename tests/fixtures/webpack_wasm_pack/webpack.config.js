const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    "entry": "./index.js",
    "target": "webworker",
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "crate"),
        }),
    ]
}