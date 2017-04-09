	var http = require('http'),
	    fs = require('fs'),
	    url = require("url"),
	    countriesJSON = require('./countries'),
	    studentsJSON = require('./students'),

	 	number;

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

        var pathname = url.parse(request.url).pathname,
            path = pathname.split('/'),
            collection = path[1],
            id = path[path.length-1];


        if (collection === 'students') {
			if (request.method === 'POST') {
                var body = '';

				request.on('data', function(data) {
					body += data;					
				});

				request.on('end', function() {
					var studentJSON = JSON.parse(body);
                    var studentPost = addStudent(studentJSON);	
                
					response.writeHead(200, {'Content-Type': 'application/json'});
					response.write(JSON.stringify(studentPost));
					response.end();				
				});			
		    }
			
			if (request.method === 'PUT') {
                var body = '';

				request.on('data', function(data) {
					body += data;					
				});

				request.on('end', function() {


                    var student = editData(id, body);	
                
					response.writeHead(200, {'Content-Type': 'application/json'});
					response.write(student);
					response.end();
          				
				});
                
		    }
			
		    if (request.method === 'GET') {			
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.write(students());
                response.end();
            }
		}

		if(collection === 'countries'){

			if(request.method === 'GET') {

                response.writeHead(200, {'Content-Type': 'application/json'});
                response.write(countries());
                response.end();
			}			


			if(request.method === 'DELETE') {

                response.writeHead(200, {'Content-Type': 'application/json'});
                response.write(deleteCountry());
                response.end();
			}

		}

	    function deleteCountry () {

	        countriesJSON.forEach(function(itemCountry, index){	
	       		if (itemCountry.id===id){
	       			number = index; 	
	       		}
	       });

	        countriesJSON.splice(number, 1);

	        return JSON.stringify(countriesJSON);
	    
	    }

	    function students () {  
	       var studentsString = JSON.stringify(studentsJSON);

	       return studentsString;
	    }
	    
	    function countries () {
			var countriesJSONString = JSON.stringify(countriesJSON);

			return countriesJSONString;
	    }


	    function addStudent (student) {
	    	var studentId = studentsJSON.length + 1;
	    	student.id = studentId;
	    	studentsJSON.push(student);                          
	    	return student;
	    }


  		function editData (id, data) {
			var studentData = JSON.parse(data),
				number;

			studentsJSON.forEach(function(itemStudent, index){					
				if (itemStudent.id === id){
						number = index; 
				}
			});

			studentsJSON.splice(number, 1, studentData);				  			
	    	
	    	return JSON.stringify(studentData);
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