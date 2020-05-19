var http = require('http');
var fs = require('fs');
var url = require('url');
const Data = require('./data');


http.createServer(async (request, response) => {

    if (request.method == 'GET') {
        switch (request.url) {
            case '/':
                response.writeHead(200, {'Content-type': 'text/plain'});
                response.end('Hello World');
                break;
            case '/employees':
                const data = fs.readFileSync('files/employees.json')
                response.writeHead(200, {'Content-type': 'text/plain'});
                response.end(data);
                break;

            case '/crawl':
                fs.readFile('files/crawl.html', function (error, data) {
                    response.writeHead(200, {'Content-type': 'text/html'});
                    response.end(data)
                });
                break;

            default:
                response.statusCode = 404;
                response.end('Not Found')
        }
    } else if (request.method == 'POST') {
        switch (request.url) {
            case '/crawl':
                const data = await Data();
                response.writeHead(200, {'Content-type': 'text/plain'})
                response.end('Crawl successfully')
                break;
        }
    } else {


    }
}).listen(3000)
