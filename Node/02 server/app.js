const http = require("http");
const fs = require("fs");
const nunjucks = require("nunjucks");
const url = require("url");

// read data file
const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const posts = JSON.parse(data);

//read temp file
const temp = fs.readFileSync(`${__dirname}/template.html`, "utf-8");

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === "/home" || pathname === "/") {
    res.writeHead(200, { "content-type": "text/html" });

    const html = posts
      .map((p) => nunjucks.renderString(temp, { ...p, pageType: "home" }))
      .join("\n");

    res.end(html);
  } else if (pathname == "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else if (pathname == "/post") {
    res.writeHead(200, { "content-type": "text/html" });
    const post = posts[query.id];
    post.show = true;
    console.log(post);

    const output = nunjucks.renderString(temp, { ...post, pageType: "detail" });

    res.end(output);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Error 404</h1>");
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log("server running");
});
