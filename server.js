const http = require("http");
http.createServer((req, res) => {
  res.end("Hello from version 2\n");
}).listen(3000);