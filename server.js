	var http = require('http'),
	    fs = require('fs'),
	    url = require("url"),
	    countriesJSON = require('./countries'),
	    studentsJSON = require('./students'),
		studentsString = JSON.stringify(studentsJSON),
	 	countriesJSONString = JSON.stringify(countriesJSON);

	function otherRequest (uri) {
	    var res = true;

	    if (uri.indexOf('.') > -1) {
	        res = false;
	    }
	    return res;
	}

	function handleFiles (request, response) {
	    console.log('Got request for ' + request.url);
	    response.writeHead(200, {});
	    fs.readFile(request.url.replace('\/', ''), function(err, file) {
	        if (err) {
	            response.writeHead(500, {});
	            response.write(error + "\n");
	            response.end();
	        } else {
	            response.writeHead(200, {});
	            response.write(file.toString(), function() {
	                response.end();
	            });
	        }
	    });
	}

	function route (request, response) {
	    var handlers = {
	        '/students': students,
	        '/countries': countries
	    };

	    function students() {
	        response.writeHead(200, { "Content-Type": "application/json" });
	        response.write(studentsString);
	        response.end();	       
	    }

	    if (request.method == 'PUT') {
	        var body = '';

	        request.on('data', function(data) {
	                body += data;
	        });

	        request.on('end', function() {
	                var foo = JSON.parse(body),
	                    studentsList = JSON.parse(studentsString),
	                 	pathname = url.parse(request.url).pathname.split('/'),
	    				id = pathname[pathname.length-1];
	    				 
	    				studentsJSON.forEach(function(itemStudent, index){	

						if (itemStudent.id===id){
							studentsJSON.splice(index,1, foo);
						}
	    		});
	                studentsString = JSON.stringify(studentsJSON);
	        });
	     }

	    function countries () {
	        response.writeHead(200, { "Content-Type": "application/json" });
	        response.write(countriesJSONString);
	        response.end();	  
	    }

	    if (request.method == 'DELETE') {
	    	var pathname = url.parse(request.url).pathname.split('/'),
	    		id = pathname[pathname.length-1];

	    		 countriesJSON.forEach(function(itemCountry, index){	
						if (itemCountry.id===id){
							countriesJSON.splice(index,1);
						}
	    		});
	    		countriesJSONString = JSON.stringify(countriesJSON);
	     }

	    if (handlers[request.url]) {
	        handlers[request.url]();
	    }
	}

	http.createServer(function(request, response) {
	    if (!otherRequest(request.url)) {
	        handleFiles(request, response);

	    } else {
	        route(request, response);

	    }
	}).listen(3000);
	console.log(' The Badboy is running!');