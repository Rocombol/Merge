'use strict';

function ControllerStudent () {
	var $studentContainer = $('#content'),
		$addContainer = $('#extraInfo'),
		$addStudent = $('.addStudent'),
    	studentListView = new StudentListView();
		  
	$studentContainer.append(studentListView.render().el);

	$addStudent.click(addNewStudent);

	function addNewStudent () {
		var newStudent = new Student();

		mediator.pub('editView', newStudent);
	}

	mediator.sub('infoView', function (student){
		var infoView = new InfoView({model:student});
			
		$addContainer.html('');
		$addContainer.append(infoView.render().el);
	});	
	
	mediator.sub('editView', function (student){
		var editView = new EditView({model:student});
			
		$addContainer.html('');
		
		$addContainer.append(editView.render().el);
	});	
	
	return this;
};