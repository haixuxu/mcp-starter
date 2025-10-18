# http-sse-mcp

Minimal HTTP + SSE MCP example (Node/Express).

Files
- mcp.yaml - manifest declaring http+sse MCP
- package.json - minimal package
- server.js - example SSE server

Install and run

```bash
cd examples/http-sse-mcp
npm install
npm start
```

Test
1) Open an SSE listener in a terminal (using curl):

```bash
curl -N http://localhost:8080/events/demo-id
```

2) In another terminal, POST to /respond to trigger an SSE event:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"id":"demo-id","prompt":"hello"}' http://localhost:8080/respond
```

You should see an SSE data: line containing the JSON payload appear in the first terminal.

Notes
- This example keeps clients in memory, which is fine for demo/testing but not production.
- Use a real message broker or persistent connection management for multiple instances.
