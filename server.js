const http = require("node:http");

const PORT = parseInt(process.env.PORT, 10) || 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ node: process.version, modules: process.versions.modules }) + "\n");
});

server.listen(PORT, () => {
  console.log("listening on " + PORT);
  console.log("node " + process.version);
});
