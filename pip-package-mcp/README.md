# pip-package-mcp

Minimal pip-installable MCP example.

Files
- mcp.yaml - manifest
- pyproject.toml - build metadata
- mcp_package/ - Python package containing handler and CLI module

Install and run

```bash
cd examples/pip-package-mcp
# install in editable mode
pip install -e .

# run as module reading stdin
echo '{"id":"1","prompt":"hello"}' | python -m mcp_package

# or run installed console script (if installed via scripts)
# mcp-py-example
```

Notes
- This example is intentionally small to demonstrate packaging and stdio handling.
