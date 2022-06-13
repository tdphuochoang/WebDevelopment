const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("server is up on port 3000");
});

app.use(express.json());

app.get("/index", (req, resp) => {
  resp.sendFile("index.html", { root: __dirname });
});

app.get("/post", (req, resp) => {
  //resp.setHeader("Content-Type", "text/html");
  resp.setHeader("Content-Security-Policy", "script-src 'none'");
  resp.send(`welcome, ${req.query.input}`);
});

//When we send back the HTML, we should assign a header that contains the Content-Security-Policy. This header was introduced to restrict the execution of any JavaScript codes. The script-src is set to 'none' which means any attemps to execute JavaScript is avoided. Thus, it will prevent the injection of any malicious JavaScript codes to other users. Another way to prevent it is to set the script-src to only execute on the localhost url. In other words, the scripts will be only allowed to be loaded from the localhost server, so other visitors of the site will not be affected.
