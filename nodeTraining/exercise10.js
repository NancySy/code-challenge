var net = require('net')
var server = net.createServer(function (socket) {
var date = new Date();


var data = date.getFullYear();
var month;
data+="-";
if(date.getMonth()<9){

    month = date.getMonth()+1;
    data+="0"+month;
} else {

    month = date.getMonth()+1;
    data+=month;
}

data+="-";
if(date.getDate()<10){

    data+="0"+date.getDate();
}  else {

    data+=date.getDate();
}

data+=" ";
if(date.getHours()<10){

    data+="0"+date.getHours();
}  else {

    data+=date.getHours();
}

data+=":";
if(date.getMinutes()<10){

      data+="0"+date.getMinutes();
}  else {
      data+=date.getMinutes();
}

data+="\n";

  socket.end(data);

});
server.listen(process.argv[2]);
