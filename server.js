	var http = require('http'),
	    fs = require('fs');

	function otherRequest(uri) {
	    var res = true;

	    if (uri.indexOf('.') > -1) {
	        res = false;
	    }
	    return res;
	}

	function handleFiles(request, response) {
	    console.log('Got request for ' + request.url);
	    response.writeHead(200, {});
	    fs.readFile(request.url.replace('\/', ''), function(err, file) {
	        if (err) {
	            response.writeHead(500, {});
	            response.write(error + "\n");
	            response.end();
	        } else {
	            response.write(file.toString(), function() {
	                response.end();
	            });
	        }
	    });
	}

	function route(request, response) {
	    var handlers = {
	        '/json': json,
			 '/countries': countries
	    };

	function json() {
	    fs.readFile("/js/SoftServe/Homeworks/Merge/students.json", function (error, file) {
	    	if (error) {
	    		response.writeHead(500, {
	    			"Content-Type": "application/json"
	    			});
	    		response.write(error + "\n");
	    		response.end();
	    	} else {
	    	response.writeHead(200, {
				"Content-Type": "application/json"
	    		});
	    		response.write(file);
	    		response.end();
	    	}
	    });
	}

    function countries() {
	    fs.readFile("/js/SoftServe/Homeworks/Merge/countries.json", function (error, file) {
	    	if (error) {
	    		response.writeHead(500, {
	    			"Content-Type": "application/json"
	    			});
	    		response.write(error + "\n");
	    		response.end();
	    	} else {
	    	response.writeHead(200, {
				"Content-Type": "application/json"
	    		});
	    		response.write(file);
	    		response.end();
	    	}
	    });
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