var http = require('http')
var url = require('url')
var server = http.createServer(function (req, res) {

var date = url.parse(req.url, true);

var c = date.query.iso;
var path = date.pathname;
var json;

res.writeHead(200, { 'Content-Type': 'application/json' });

if(path=='/api/parsetime'){

        json =JSON.stringify( Object.create(null, { hour: { value: new Date(c).getHours(), enumerable: true },
                                    minute: { value: new Date(c).getMinutes(), enumerable: true },
                                    second: { value: new Date(c).getSeconds(), enumerable: true }}));

}else{

    if(path=='/api/unixtime')

        json =JSON.stringify( Object.create(null, { unixtime: { value: new Date(c).getTime(), enumerable: true }}));

}

res.end(json);

})

server.listen(process.argv[2]);
