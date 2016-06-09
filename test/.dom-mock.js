module.exports = function mock(markup) {
  if (typeof document !== 'undefined') return;

  const jsdom = require('jsdom').jsdom;

  global.document = jsdom(markup || '');
  global.window = document.defaultView;
  global.navigator = {
    userAgent: 'node.js'
  };
};
