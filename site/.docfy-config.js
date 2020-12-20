const path = require('path');
const autolinkHeadings = require('remark-autolink-headings');
const highlight = require('remark-highlight.js');
const codeImport = require('remark-code-import');

module.exports = {
  tocMaxDepth: 3,
  remarkPlugins: [
    [
      autolinkHeadings,
      {
        behavior: 'wrap'
      }
    ],
    codeImport,
    highlight
  ],
  sources: [
    {
      root: path.resolve(__dirname, '../docs'),
      pattern: '**/*.md',
      urlPrefix: 'docs'
    }
  ],
  labels: {
    components: 'Components',
    docs: 'Documentation'
  }
};
