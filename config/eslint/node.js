module.exports = {
    'env': {
        'node': true
    },
    'rules': {
        'callback-return': [0, 'next'],
        'global-require': 2,
        'handle-callback-err': 2,
        'no-buffer-constructor': 2,
        'no-mixed-requires': 2,
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 2,

        // Enables you to write code in the style where all functions
        // With async operations inside labeled with async (even with one such)
        'no-return-await': 0,

        // There are `no-global-assign` and `no-shadow-restricted-names`.
        // And these rules are sufficient for preventing undefined shadowing.
        'no-undefined': 0
    }
};
