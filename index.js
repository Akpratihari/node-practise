const http = require('http');
const url=require('url');
const server=http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    if (req.url==='/favicon.ico') {
        return res.end();
    }
    const parsedUrl = url.parse(req.url, true);
console.log(parsedUrl)
    if (parsedUrl.pathname === '/') {
        return  res.end('<h1>Home page</h1>');
    }else if (parsedUrl.pathname === '/about') {
        return res.end(`<h1>Hello ${parsedUrl.query.name?parsedUrl.query.name:'world'} your age is ${parsedUrl.query.age?parsedUrl.query.age:"I dont know"}</h1>`);
    }else{
        return res.end('<h1>404</h1>');
    }
})

server.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});

