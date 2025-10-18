#!/usr/bin/env python3
import sys
import json

# Minimal stdio MCP: read newline-delimited JSON from stdin and write JSON replies to stdout.
# Example input (single line): {"id":"1","prompt":"hello"}
# Example output (single line): {"id":"1","output":"Handled prompt: hello"}

def handle_request(req):
    # Simple echo-like handler
    return {"id": req.get("id"), "output": f"Handled prompt: {req.get('prompt','')}"}

if __name__ == '__main__':
    try:
        for line in sys.stdin:
            line = line.strip()
            if not line:
                continue
            try:
                req = json.loads(line)
            except json.JSONDecodeError:
                # ignore invalid lines
                continue
            resp = handle_request(req)
            print(json.dumps(resp), flush=True)
    except KeyboardInterrupt:
        # graceful exit
        pass
