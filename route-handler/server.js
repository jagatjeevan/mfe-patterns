const express = require("express");
const bodyParser = require("body-parser");
const proxy = require("express-http-proxy");

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.disable("x-powered-by");
server.use(bodyParser.json());

var layoutServer = "http://localhost:3000",
  catalogServer = "http://localhost:3001",
  reviewServer = "http://localhost:3002",
  recommendServer = "http://localhost:3003";

function match(domain) {
  return proxy(domain, {
    proxyReqPathResolver(req) {
      console.log(`${domain}${req.url}`);
      return `${domain}${req.url}`;
    }
  });
}

server.use("/cart", match(layoutServer));
server.use("/products", match(catalogServer));
server.use("/reviews", match(reviewServer));
server.use("/recommend", match(recommendServer));
server.use("/", match(catalogServer));

server.listen(2222, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:2222`);
});