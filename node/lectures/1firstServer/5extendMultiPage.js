const http = require("http");
const port = 8000;
const server = http.createServer(requestHandler);
const fs = require("fs");

function requestHandler(req, res) {
  console.log(req.url);
  res.writeHead(200, { "context-type": "text/html" });

  let filepath;
  switch (req.url) {
    case "/":
      filepath = "html/index.html";
      break;
        // reamember everytime, when we are linking file, we need to write forward slash.
    case "/profile":
      filepath = "html/profile.html";
      break;
    default:
      filepath = "html/404.html";
  }
  fs.readFile(filepath, function(err, data){
    if(err){
        console.log('error', err);
        return res.end("end")
    }
    return res.end(data);
});
}

// reading a server
server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server is running on port:", port);
});
