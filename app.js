const http = require('http'); //like a php require

// require is more orless the same as js import

const hostname = '127.0.0.1'; //this is localhost
const port = 3000;  //localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('yo check wassup');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});