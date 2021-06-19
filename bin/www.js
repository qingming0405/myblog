const http = require('http')
const serverHandler = require('../app.js')

const port = 5000

const server = http.createServer(serverHandler)

server.listen(port, () => {
    console.log('server running at port 5000 ...');
})