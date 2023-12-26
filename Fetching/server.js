import { createServer } from 'node:http';

const server = createServer(async (req, res) => {
    const {url, method} = req;

    switch (method) {
       
                case 'GET':
                    const fetchUrl = "https://catfact.ninja/fact"
                    const data = await fetchData(fetchUrl);
                    console.log(data);
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.write(`<h1>${data.fact}</h1>`);
                    res.end();
                return;
    }
       
console.log('method', method);
console.log('url', url);

});

server.listen(4343, () => {
    console.log("server listening on port 4343");
});

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}