const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello world");
  }
  if (req.url === "/data") {
    res.end("data");
  } else {
    res.end("error");
  }
});
server.listen(3000, () => {
  console.log("listing on server");
});
