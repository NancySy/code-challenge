var http = require('http')


const BufferList = require('bl');

var b1 = new BufferList();
var b2 = new BufferList();
var b3 = new BufferList();

var i=2;
    http.get(process.argv[2],function (response1){

      response1.setEncoding("utf8");

      response1.on('data', function (chunk1) {

        b1.append(chunk1);

      });

      response1.on('end', function (out1){


          console.log(b1.toString());

          http.get(process.argv[3],function (response2){

                response2.setEncoding("utf8");

                response2.on('data', function (chunk2) {

                  b2.append(chunk2);

                });

                response2.on('end', function (out2){


                        console.log(b2.toString());

                        http.get(process.argv[4],function (response3){

                              response3.setEncoding("utf8");

                              response3.on('data', function (chunk3) {

                                b3.append(chunk3);

                              });

                              response3.on('end', function (out3){

                                  console.log(b3.toString());
                              });

                          }).on('error', function(e) {
                                  console.log(e);
                            });



            })
          }).on('error', function(e) {
                          console.log(e);
                  });
                });

}).on('error', function(e) {
      console.log(e);
  });
