# docker-image-mcp

Minimal Dockerized MCP exposing an HTTP endpoint using Flask.

Files
- mcp.yaml - manifest
- Dockerfile - container build instructions
- app.py - Flask app exposing /respond

Build and run

```bash
cd examples/docker-image-mcp
docker build -t docker-image-mcp .
docker run -p 8080:8080 docker-image-mcp
```

Test

```bash
curl -X POST -H "Content-Type: application/json" -d '{"prompt":"hi"}' http://localhost:8080/respond
```

Expected response

{"output":"docker handled: hi"}
