const http = require("http");
http.createServer((req, res) => {
  res.end("Hello from version 3\n");
}).listen(3000);