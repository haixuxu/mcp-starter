#!/usr/bin/env node
const fs = require('fs');

function handle(req) {
  return { id: req.id, output: `npm package handled: ${req.prompt || ''}` };
}

if (require.main === module) {
  // CLI stdio mode: read stdin fully (small demo)
  let data = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => data += chunk);
  process.stdin.on('end', () => {
    try {
      const req = JSON.parse(data);
      console.log(JSON.stringify(handle(req)));
    } catch (e) {
      console.error('invalid input');
      process.exit(1);
    }
  });
} else {
  module.exports = handle;
}
