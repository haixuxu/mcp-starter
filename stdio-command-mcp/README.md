# stdio-command-mcp

Minimal stdio (command) MCP example.

What it is
- A small Python script that implements a newline-delimited JSON stdio MCP.

Files
- mcp.yaml - manifest declaring this is a command/stdio MCP
- run.py - the stdio handler

Run locally
- Make sure Python 3 is available.
- Start the handler:

```bash
python3 run.py
```

- In another terminal, send a single JSON line to stdin:

```bash
echo '{"id":"1","prompt":"hello"}' | python3 run.py
```

Expected output
- The script will print a JSON response line, for example:

{"id":"1","output":"Handled prompt: hello"}

Notes
- This example is intentionally minimal to demonstrate the stdio communication pattern.
