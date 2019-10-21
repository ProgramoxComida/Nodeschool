const http = require("http")

const server = http.createServer(function (req, res) {
    if (req.method !== 'GET') return res.end('send me a GET\n')
    
    let url = require('url').parse(req.url, true)
    // api/parsetime?iso=2013-08-10T12:10:15.474Z
    var dt = new Date(url.query.iso)
    var resultado
    if (/^\/api\/parsetime/.test(req.url)) {
        resultado = {hour: dt.getHours(), minute: dt.getMinutes(), second: dt.getSeconds()}
    } else if (/^\/api\/unixtime/.test(req.url)) {
        resultado = {unixtime: dt.getTime()}
    }
    
    if (resultado) {
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(resultado))
    } else {
        res.writeHead(404);
        res.end()
    }

})
server.listen(Number(process.argv[2]))