const http = require('http');

const server = http.createServer(((req, res) => {
    res.end('voekozaekaozp');
}));

server.listen( 3000);