/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-var-requires */
const { jsWithTs: tsjPreset } = require('ts-jest/presets');

module.exports = {
  transform: {
    ...tsjPreset.transform,
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
};
