const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // content type
  res.setHeader('Content-Type', 'text/html');

  // routing
  let filePath = './views/';
  switch (req.url) {
    case '/':
      filePath += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      filePath += 'about.html';
      res.statusCode = 200;
      break;
    case '/contact-me':
      filePath += 'contact-me.html';
      res.statusCode = 200;
      break;
    default:
      filePath += '404.html';
      res.statusCode = 404;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.end(data);
  });
});
server.listen(8080, 'localhost', () => {
  console.log('Listening to requests on port 8080');
});
