const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Homepage");
  }
  if (req.url === "/about") {
    res.end("Welcome to our About page");
  }
  res.end(`
    <h1> oops </h1>
    <p> We can't seem to find the page you are looking for </p>
    <a href="/"> backhome </a>
    `);
});

server.listen(3000);
