import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const server = createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    switch (url) {
        case '/about':
            switch (method) {
                case 'GET':
                    const htmlFile = readFileSync('./src/index.html', 'utf-8')
                    res.end(htmlFile)
                    return;
            
                case 'DELETE':
                res.end("delete in about")

                case 'POST':
                    res.end("post from about");
            }
            return;

        case '/video':
            res.end("hi from video")
            return;

        case '/style.css':
            const cssFile = readFileSync('./src/style.css', 'utf-8')
            console.log('cssFile', cssFile);
            res.end(cssFile);
            return;
    }
console.log('method', method);
console.log('url', url);

});

server.listen(4646, () => {
    console.log("server listening on port 4646");
});