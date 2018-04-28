module.exports = {
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'plugins': [
        'react'
    ],
    'rules': {
        // Workarounds

        // Support this in arrow functions class properties
        'no-invalid-this': 0,

        // React
        'react/forbid-prop-types': [2, { 'forbid': ['any'] }],
        'react/no-array-index-key': 2,
        'react/no-children-prop': 2,
        'react/no-danger-with-children': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': [2, { 'ignoreStateless': true }],
        'react/no-redundant-should-component-update': 2,
        'react/no-render-return-value': 2,
        'react/no-string-refs': 2,
        'react/no-unescaped-entities': 2,
        'react/no-unknown-property': 2,
        'react/no-unused-prop-types': 2,
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': 2,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/style-prop-object': 2,
        'react/void-dom-elements-no-children': 2,

        // JSX
        'react/jsx-boolean-value': 2,
        'react/jsx-closing-bracket-location': [2, 'props-aligned'],
        'react/jsx-closing-tag-location': 2,
        'react/jsx-curly-spacing': 2,
        'react/jsx-equals-spacing': 2,
        'react/jsx-first-prop-new-line': 2,
        'react/jsx-indent': 2,
        'react/jsx-indent-props': 2,
        'react/jsx-key': 2,
        // 'react/jsx-no-bind': [2, { 'ignoreRefs': true }],
        'react/jsx-no-comment-textnodes': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-target-blank': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-tag-spacing': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 2
    }
};
