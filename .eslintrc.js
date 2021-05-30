module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-recommended',
		'airbnb-base'
	],
	rules: {
		'no-param-reassign': 'off',

		'import/first': 'off',
		'import/named': 'error',
		'import/namespace': 'error',
		'import/default': 'error',
		'import/export': 'error',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'prefer-promise-reject-errors': 'off',
		'prefer-destructuring': 'off',
		'no-async-promise-executor': 'off',
		'comma-dangle': ['error', 'never'],
		'no-unreachable': 'warn',
		'max-len': 0,
		'no-continue': 0,
		'no-tabs': 0,
		'no-nested-ternary': 0,
		'no-void': 0,
		'no-restricted-globals': 0,
		'no-bitwise': 0,
		indent: ['error', 'tab', { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
		'arrow-parens': ['error', 'as-needed'],
		'func-names': 0,
		'no-plusplus': 0,
		'no-constant-condition': 0,
		'template-curly-spacing': 'off',
		'nonblock-statement-body-position': ['error', 'below'],
		curly: ['error', 'multi-or-nest'],
		'no-unused-vars': 'warn',
		'vue/max-attributes-per-line': ['error', {
			singleline: 5,
			multiline: {
				max: 5,
				allowFirstLine: true
			}
		}],
		'no-underscore-dangle': 0,
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'never'
		}],
		'vue/html-indent': ['error', 'tab', {
			alignAttributesVertically: false
		}],
		'vue/no-unused-components': 'warn',
		'vue/no-v-html': 0,

		// allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
};
