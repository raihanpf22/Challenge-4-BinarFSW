const http = require('http'),
  fs = require('fs'),
  port = 2000;

http
  .createServer((req, res) => {
    switch (req.url) {
      case '/':
        req.url = 'landingPage.html';
        break;
      case '/test':
        req.url = 'index.html';
        break;
      case '/searchCars.html':
        req.url = 'searchCars.html';
        break;
    }
    let path = 'public/' + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(port, 'localhost', () => {
    console.log('Server sudah berjalan, silahkan buka http://localhost:2000');
  });