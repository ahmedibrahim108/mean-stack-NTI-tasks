const http = require("http");
const fs = require("fs");
const nunjucks = require("nunjucks");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const posts = JSON.parse(data);

const temp = fs.readFileSync(`${__dirname}/template.html`, "utf-8");

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === "home" || pathname === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    const html = posts.map((p) => nunjucks.renderString(temp, p)).join("\n");
    res.end(html);
  } else if (pathname === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else if (pathname == "/posts") {
    res.writeHead(200, { "content-type": "application/json" });
    const post = posts[query.id];
    const output = nunjucks.renderString(temp, post);
    res.end(output);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>page not found error 404</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server listen");
});
