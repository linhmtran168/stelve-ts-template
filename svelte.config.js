// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoPreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: autoPreprocess({
    postcss: true,
  }),
};
