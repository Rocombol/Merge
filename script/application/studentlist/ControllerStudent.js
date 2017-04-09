'use strict';

function ControllerStudent () {
	var $studentContainer = $('#content'),
		$addContainer = $('#extraInfo'),
		$addStudent = $('.addStudent'),
		studentsList = new StudentsList(),
    	studentListView = new StudentListView({collection:studentsList});
		  
	$studentContainer.append(studentListView.render().el);

	mediator.sub('infoView', function (student){
		var infoView = new InfoView({model:student});
			
		$addContainer.html('');
		$addContainer.append(infoView.render().el);
	});	
	
	mediator.sub('editView', function (student){
		var editView = new EditView({
			model:student,
			collection:studentsList	
		});
			
		$addContainer.html('');
		
		$addContainer.append(editView.render().el);
	});	
	
	return this;
};