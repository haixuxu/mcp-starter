const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Simple in-memory clients map: id -> response
const clients = new Map();

app.get('/events/:id', (req, res) => {
  const id = req.params.id;
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  });
  res.flushHeaders();

  clients.set(id, res);
  console.log(`Client connected for id=${id}`);

  req.on('close', () => {
    clients.delete(id);
    console.log(`Client disconnected for id=${id}`);
  });
});

app.post('/respond', (req, res) => {
  const { id, prompt } = req.body || {};
  const data = JSON.stringify({ id, chunk: `Response chunk for: ${prompt}` });
  if (id && clients.has(id)) {
    const clientRes = clients.get(id);
    clientRes.write(`data: ${data}\n\n`);
  }
  res.json({ status: 'sent', id });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`SSE server listening on ${port}`));
