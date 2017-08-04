var fs = require('fs');
var bf = fs.readFileSync(process.argv[2]);
var str = bf.toString();
 var a= str.split('\n');
 console.log(a.length-1);
