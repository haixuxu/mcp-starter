# npm-package-mcp

Minimal NPM package MCP example that supports programmatic import and CLI stdio mode.

Files
- mcp.yaml - manifest
- package.json - package metadata
- index.js - exported handler and CLI entrypoint

Install locally (optional)

```bash
cd examples/npm-package-mcp
# to use as CLI locally
npm link
# then you can run: echo '{"id":"1","prompt":"hi"}' | npm-mcp-example

# or run via node directly
echo '{"id":"1","prompt":"hi"}' | node index.js
```

Usage as module

```js
const handle = require('./index');
console.log(handle({ id: '1', prompt: 'hello' }));
```
