var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    qs = require('querystring'),
    port = process.argv[2] || 8335;


http.createServer(function(request, response) {
    var Response = {
        "GET": {
            "200":function(file, filename){
                var extname = path.extname(filename);
                var header = {
                    "Access-Control-Allow-Origin":"*",
                    "Pragma": "no-cache",
                    "Cache-Control" : "no-cache"
                }

                response.writeHead(200, header);
                response.write(file, "binary");
                response.end();
            },
            "404":function(){
                response.writeHead(404, {"Content-Type": "text/plain"});
                response.write("404 Not Found\n");
                response.end();

            },
            "500":function(err){
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();

            }
        },
        "POST": {
            "200":function(){
                var header = {
                    "Access-Control-Allow-Origin":"*",
                    "Pragma": "no-cache",
                    "Cache-Control" : "no-cache"
                }

                response.writeHead(200, header);
                response.write("GET POST\n");
                response.end();
            }
        }
    }


    var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri)
    , agent = request.headers['user-agent'];

    if(request.method === "GET"){
        fs.exists(filename, function(exists){
            console.log('"URI:' + filename + '","METHOD:GET","DATA:"","AGENT:","' + agent + '"');
            if (!exists) { Response[request.method]["404"](); return ; }
            if (fs.statSync(filename).isDirectory()) { filename += '/index.html'; }

            fs.readFile(filename, "binary", function(err, file){
                if (err) { Response[request.method]["500"](err); return ; }
                Response[request.method]["200"](file, filename);
            });

        });
    }else{
        var body='';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end',function(){
            //var post_data =  qs.parse(body);
            console.log('"URI:' + filename + '","METHOD:POST","DATA:"' + body + '","AGENT:' + agent +'",');
            //console.log(body);
        });
        Response[request.method]["200"]();
    }


}).listen(parseInt(port, 10));

//console.log("Server running at http://localhost:" + port );
