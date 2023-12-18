const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

const frasi = [
    "frase 1",
    "frase 2",
    "frase 3",
    "frase 4"
]

function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
}

function numeroCasuale() {
    return Math.floor(Math.random() * 4);
}

const server = http.createServer(function (req, res) {
    htmlResponse(res,
        `Hello World! <br>
        ${process.env.TEXT} <br>
        <h1>${frasi[numeroCasuale()]}</h1>`
    );
});

server.listen(port, () => {
    const serverUrl = `http://localhost:${port}`
    console.log(`Server avviato su ${serverUrl}`);
});