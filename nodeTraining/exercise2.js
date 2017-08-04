var sum = 0;
var i= 2;

for( i=2;i< process.argv.length;i++){

  //if(process.argv[i].trim()!=null && process.argv[i].trim()!=""){

    //if(!Number(process.argv[i]))
    //    continue;

      sum = sum + Number(process.argv[i]);
  }

console.log(sum);
