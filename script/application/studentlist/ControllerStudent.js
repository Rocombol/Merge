'use strict';

function ControllerStudent () {
	var studentContainer = document.querySelector('#content'),
		infoContainer = document.querySelector('#extraInfo'),
		editContainer = document.querySelector('#extraInfo'),	
	 	infoView = new InfoView(),
		editView = new EditView(),
		studentsList = new StudentsList(),
    	studentListView = new StudentListView(studentsList),
		studentListViewRender = studentListView.render();	
		  
	studentContainer.appendChild(studentListViewRender);
			
	mediator.sub('infoView', function (_student){
		
		infoContainer.innerHTML='';
		
		var info = infoView.render(_student);
			
		infoContainer.appendChild(info)
		
	});	
	
	

	mediator.sub('editView', function (_student){
		
		editContainer.innerHTML='';
		
		var edit = editView.render(_student);
			
		editContainer.appendChild(edit);
		
	});	
		
	
	return this;
	
};