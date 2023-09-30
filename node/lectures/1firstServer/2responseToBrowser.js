const http = require('http');
const port = 8000;
const server = http.createServer(requestHandler);

// this function will request the url from the browser
function requestHandler(req, res){
    console.log(req.url);
}

// it will listen the server request
server.listen(port, function(err){
    if(err){
        console.log(err);
        return
    }
    console.log('server is running on port:', port);
});