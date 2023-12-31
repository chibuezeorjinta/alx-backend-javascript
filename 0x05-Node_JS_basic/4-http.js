const app = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const server = app.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at app://${hostname}:${port}/`);
});
