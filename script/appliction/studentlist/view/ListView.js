'use strict';

function ListView (studentsList) {
	var students = studentsList;
	
    this.renderList = function() {		
		var contentElement = document.getElementById('content'),
			itemTable = document.createElement('table');
		
		contentElement.innerHTML=listTpl;
		
		students.forEach(function(itemStudent){
		    var listItemView=new ListItemView(itemStudent),
				tr=listItemView.renderItem(itemStudent);
			
			itemTable.appendChild(tr);
		});
		
		contentElement.appendChild(itemTable);						
    };	
	return this;
}