var http = require('http')
const BufferList = require('bl')

var bl = new BufferList()
http.get(process.argv[2], function(response) {

  response.setEncoding("utf8")

  response.on('data', function (chunk) {
    bl.append(chunk)
    //console.log(chunk);
  });

  response.on('end', function (out){
    console.log(bl.length);
    console.log(bl.toString());
  });

}).on('error', function(e) {
    console.log(e);
});
