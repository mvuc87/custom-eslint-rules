import noUnderscorePlugin from './no-underscore/plugin.js';
import noNestedPlugin from './no-nested/plugin.js';

export default {
  files: ['src/**/*.js'],
  plugins: {
    'no-underscore-plugin': noUnderscorePlugin,
    'no-nested-plugin': noNestedPlugin
  },
  rules: {
    'no-underscore-plugin/no-underscore-in-var-name': 'warn',
    'no-nested-plugin/no-nested-if': ['error', 2]
  },
};
