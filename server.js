const http = require("http");
const port = process.env.PORT || 3000;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
})
    .listen(port, host, () => {
        const serverUrl = `http://localhost:${port}`
        console.log(`Server avviato su ${serverUrl}`);
    });