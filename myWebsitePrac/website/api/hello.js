const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!'
//   }));
  if(req.url == '/'){
    res.end("Welcome!")
  }
  if(req.url == '/about'){
    res.end("This is practice webpage!")
}
});

server.listen(8000);