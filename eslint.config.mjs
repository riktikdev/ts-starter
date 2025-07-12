import antfu from '@antfu/eslint-config';

const config = antfu(
  {
    typescript: true,
    stylistic: false,
    type: 'lib',
  },
  {
    name: 'riktikdev/rewrite',
    rules: {
      'antfu/curly': 'off',
      'antfu/if-newline': 'off',
      'antfu/top-level-function': 'off',
      'node/prefer-global/process': 'off',
      'no-console': 'warn',
    },
  },
  {
    name: 'riktikdev/sort',
    rules: {
      'perfectionist/sort-array-includes': [
        'error',
        {
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          groups: [
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'named',
            'object',
            'operator',
            'tuple',
            'union',
            'nullish',
          ],
          order: 'asc',
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],
      'jsonc/sort-keys': 'off',
    },
  },
);

export default config;
