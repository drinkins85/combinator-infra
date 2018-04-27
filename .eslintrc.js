module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "./config/eslint/base.js",
        "./config/eslint/react.js",
        "./config/eslint/node.js",
    ]
};
