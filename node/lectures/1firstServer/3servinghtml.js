const http = require("http");
const port = 8000;
const server = http.createServer(requestHandler);

// for handeling the requestes
function requestHandler(req, res) {
  console.log(req.url);

  // serving html to server
  // 200 is default response code
  res.writeHead(200, { "context-type": "text/html" });
  res.end("<h1>Hello coders!</h1>");
}

// for listening the server
server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server is running on port:", port);
});
