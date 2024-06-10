const httpServer = require('http-server');

const server = httpServer.createServer({
  root: './public' // Specify the directory to serve files from
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
