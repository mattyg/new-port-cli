#!/usr/bin/env node

const newport = require('new-port');

newport.then(port => {
  console.log(port);
});
