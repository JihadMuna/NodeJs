import { createServer } from "node:http";
import { readFileSync } from "node:fs";

const server = createServer((req, res) => {
    const { url, method } = req;

    switch (url) {
        case '/raw-html':
            switch (method) {
                case 'GET':
                    res.end("<h1>Welcome</h1>");
                    return;
            }

        case '/users':
            switch (method) {
                case 'GET':
                    const jsonFile = readFileSync('./src/users.json', 'utf-8');
                    res.end(jsonFile);
                    return;
            }

        case '/':
            switch (method) {
                case 'GET':
                    const htmlFile = readFileSync('./src/index.html', 'utf-8');
                    res.end(htmlFile);
                    return;
            }

        case '/index.css':
            switch (method) {
                case 'GET':
                    const cssFile = readFileSync('./src/index.css', 'utf-8');
                    console.log('cssFile', cssFile);
                    res.end(cssFile);
                    return;
            }
    }

    console.log('method', method);
    console.log('url', url);
});

const PORT = 4745;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
