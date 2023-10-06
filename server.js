const http = require("http");

const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(productsData));
});


const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`)})