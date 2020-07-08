/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-var-requires */
const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefix = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefix,
    purgecss({
      content: ['./**/*.html', './**/*.svelte'],
    }),
    cssnano({
      preset: 'default',
    }),
  ],
};
