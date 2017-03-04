'use strict';

function StudentListView (studentsList) {
	var students = studentsList;
	
    this.render = function() {		
		var itemTable = document.createElement('table');
		
		itemTable.innerHTML = listTpl;
		
		students.forEach(function(itemStudent){
		    var listItemView = new ListItemView(itemStudent),
				tr = listItemView.render(itemStudent);
			
			itemTable.appendChild(tr);
		});
		
		return itemTable;					
    };	
	return this;
}