const http = require("http");
const port = 8000;

// we need to handle request. other wise browser will keep loading
const server = http.createServer(requestHandler);
const fs = require("fs");

// this function will check the urls
function requestHandler(req, res) {
  console.log(req.url);
//   200 is default response code
  res.writeHead(200, { "content-type": "text/html" });
  // for reading a file
  fs.readFile("index.html", function (err, data) {
    if (err) {
      console.log("error", err);
      return req.end("<h1>Error!</h1>");
    }
    return res.end(data);
  });
}

// listening the server responses
server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server is running on:", port);
});
