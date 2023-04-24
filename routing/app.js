const express = require('express');
const app = express();

const host = '127.0.0.1';
const port = 7000;

app.get('/api/users', (req, res) => {...});
app.post('/api/users', (req, res) => {...});
app.put('/api/users', (req, res) => {...});
app.delete('/api/users', (req, res) => {...});

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));
