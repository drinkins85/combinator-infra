module.exports = {
    plugins: [
        'stylelint-order'
    ],
    rules: {
        // General / Sheet
        'no-descending-specificity': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,
        'no-unknown-animations': true,
        'indentation': [4, { indentInsideParens: 'twice' }],
        'max-empty-lines': 1,
        'max-line-length': 90,
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,

        // Color
        'color-no-invalid-hex': true,
        'color-named': 'never',
        'color-hex-case': 'lower',
        'color-hex-length': 'short',

        // Font family
        'font-family-no-duplicate-names': true,
        'font-family-name-quotes': 'always-where-recommended',

        // Font weight
        'font-weight-notation': 'numeric',

        // Function
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',

        // String
        'string-no-newline': true,
        'string-quotes': 'single',

        // Number
        'number-max-precision': 2,
        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,

        // Unit
        'unit-no-unknown': true,
        'unit-case': 'lower',

        // Length
        'length-zero-no-unit': true,

        // Value
        'value-no-vendor-prefix': true,
        'value-keyword-case': 'lower',

        // Values list
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,

        // Property
        'property-no-unknown': true,
        'property-case': 'lower',

        // Shorthand property
        'shorthand-property-no-redundant-values': true,

        // Custom property
        'custom-property-empty-line-before': [
            'always',
            {
                except: ['after-comment', 'after-custom-property', 'first-nested'],
                ignore: ['after-comment']
            }
        ],

        // Declaration
        'declaration-no-important': true,
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',

        // Declaration block
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-redundant-longhand-properties': [true, {
            ignoreShorthands: ['flex-flow']
        }],
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',

        // Keyframe declaration
        'keyframe-declaration-no-important': true,

        // Block
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-space-before': 'always',

        // Selector
        'selector-pseudo-class-no-unknown': [true, {
            ignorePseudoClasses: ['global']
        }],
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': true,
        'selector-class-pattern': '^[a-z0-9-_]+$',
        'selector-max-class': 2,
        'selector-max-combinators': 1,
        'selector-max-empty-lines': 0,
        'selector-max-id': 0,
        'selector-max-specificity': '0,3,1',
        'selector-max-universal': 1,
        'selector-no-qualifying-type': true,
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'single',
        'selector-type-case': 'lower',

        // Selector list
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-before': 'never',

        // Rule
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment']
            }
        ],

        // At-rule
        'at-rule-no-unknown': [true, {
            ignoreAtRules: ['mixin', 'content', 'include']
        }],
        'at-rule-no-vendor-prefix': true,
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment']
            }
        ],
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always',
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',

        // Comment
        'comment-no-empty': true,
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment', 'stylelint-commands']
            }
        ],

        // Media
        'media-feature-name-no-vendor-prefix': true,

        // Media feature
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',

        // Media query list
        'media-query-list-comma-newline-before': 'never-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',

        // Order
        'order/order': [
            'custom-properties',
            'dollar-variables',
            'declarations',
            'rules',
            'at-rules'
        ],
        'order/properties-order': [
            {
                emptyLineBefore: 'always',
                properties: [
                    'position',
                    'z-index',
                    'top',
                    'right',
                    'bottom',
                    'left'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'display',
                    'visibility',
                    'float',
                    'clear',
                    'overflow',
                    'overflow-x',
                    'overflow-y',
                    '-ms-overflow-x',
                    '-ms-overflow-y',
                    'clip',
                    'zoom',
                    'flex-direction',
                    'flex-order',
                    'flex-pack',
                    'flex-align'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'box-sizing',
                    'width',
                    'min-width',
                    'max-width',
                    'height',
                    'min-height',
                    'max-height',
                    'margin',
                    'margin-top',
                    'margin-right',
                    'margin-bottom',
                    'margin-left',
                    'padding',
                    'padding-top',
                    'padding-right',
                    'padding-bottom',
                    'padding-left'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'table-layout',
                    'empty-cells',
                    'caption-side',
                    'border-spacing',
                    'border-collapse',
                    'list-style',
                    'list-style-position',
                    'list-style-type',
                    'list-style-image'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'content',
                    'quotes',
                    'counter-reset',
                    'counter-increment',
                    'resize',
                    'cursor',
                    'user-select',
                    'nav-index',
                    'nav-up',
                    'nav-right',
                    'nav-down',
                    'nav-left',
                    'text-align',
                    'text-align-last',
                    'vertical-align',
                    'white-space',
                    'text-decoration',
                    'text-emphasis',
                    'text-emphasis-color',
                    'text-emphasis-style',
                    'text-emphasis-position',
                    'text-indent',
                    'text-justify',
                    'letter-spacing',
                    'word-spacing',
                    'text-outline',
                    'text-transform',
                    'text-wrap',
                    'text-overflow',
                    'text-overflow-ellipsis',
                    'text-overflow-mode',
                    '-ms-word-wrap',
                    'word-wrap',
                    'word-break',
                    'tab-size',
                    'hyphens',
                    'pointer-events'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'font',
                    'font-family',
                    'font-size',
                    'font-weight',
                    'font-style',
                    'font-variant',
                    'font-size-adjust',
                    'font-stretch',
                    'font-effect',
                    'font-emphasize',
                    'font-emphasize-position',
                    'font-emphasize-style',
                    'font-smooth',
                    'line-height'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'opacity',
                    'color',
                    'border',
                    'border-width',
                    'border-style',
                    'border-color',
                    'border-top',
                    'border-top-width',
                    'border-top-style',
                    'border-top-color',
                    'border-right',
                    'border-right-width',
                    'border-right-style',
                    'border-right-color',
                    'border-bottom',
                    'border-bottom-width',
                    'border-bottom-style',
                    'border-bottom-color',
                    'border-left',
                    'border-left-width',
                    'border-left-style',
                    'border-left-color',
                    'border-radius',
                    'border-top-left-radius',
                    'border-top-right-radius',
                    'border-bottom-right-radius',
                    'border-bottom-left-radius',
                    'border-image',
                    'border-image-source',
                    'border-image-slice',
                    'border-image-width',
                    'border-image-outset',
                    'border-image-repeat',
                    'outline',
                    'outline-width',
                    'outline-style',
                    'outline-color',
                    'outline-offset',
                    'background',
                    'background-color',
                    'background-image',
                    'background-repeat',
                    'background-attachment',
                    'background-position',
                    'background-position-x',
                    'background-position-y',
                    'background-clip',
                    'background-origin',
                    'background-size',
                    'box-decoration-break',
                    'box-shadow',
                    'text-shadow'
                ]
            },
            {
                emptyLineBefore: 'always',
                properties: [
                    'transition',
                    'transition-delay',
                    'transition-timing-function',
                    'transition-duration',
                    'transition-property',
                    'transform',
                    'transform-origin',
                    'animation',
                    'animation-name',
                    'animation-duration',
                    'animation-play-state',
                    'animation-timing-function',
                    'animation-delay',
                    'animation-iteration-count',
                    'animation-direction',
                    'backface-visibility'
                ]
            }
        ]
    }
};
