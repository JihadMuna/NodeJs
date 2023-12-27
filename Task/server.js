import { createServer } from 'node:http';

const server = createServer ((req, res) => {
    const { url, method } = req;

    switch (url) {
        case '/message':
            switch (method) {
                case 'GET':
                    res.appendHeader("Access-Control-Allow-Origin","http://localhost:5173")
                    res.end("Hi from message");
                    case 'PUT':
                        res.end("Hi from Put")
                        return;
            }
         return;
    }
    console.log('url',url);
    console.log('method',method);
})

server.listen(4141, ()=> {
    console.log('server listening on port 4141');
})