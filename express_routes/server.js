import express from "express";

const server = express();

server.get('/numbers', (req, res) => { 
    res.send("success using get");
});
server.post('/numbers', (req, res) => { 
    res.send("success using post")
});
server.delete('/numbers', (req, res) => {
    res.send("success using delete")
 });
server.put('/numbers', (req, res) => {
    res.send("success using put")
 });

server.listen(4343, ()=> {
console.log('express server listening on port 4343');
} )