  var ip   = "127.0.0.1";
  var port = 1337;
  var http = require('http');

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }).listen(port, ip);

  console.log("Server running at http://" + ip + ":" + port);
  console.log('Hello World\n');
   alert('Hello World\n');
