#!/usr/bin/env node

const newport = require('new-port');

newport.then(port => {
  process.stdout.write(`${port}`);
});
