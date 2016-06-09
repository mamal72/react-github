require('./.dom-mock')('<html><body></body></html>');

import jsdom from 'mocha-jsdom';

jsdom({ skipWindowCheck: true });
