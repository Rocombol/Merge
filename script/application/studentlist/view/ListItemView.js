'use strict';

function ListItemView (_student) {
	var student = _student,
		itemTr = document.createElement('tr'),
		buttonFind, buttonEdit;
			
    this.render = function () {
        var itemData = '',
            json = student.toJSON();
		
		itemData += renderTemplate(listItemTpl, json) ;		
		itemTr.innerHTML = itemData;			      
		
		queryListeners();				
		
		student.on('change', changeStudent);		
		
		return itemTr;
    };
	
	function changeStudent () {
		var itemData = '',
			json = student.toJSON();
		     
		queryRemoveListeners();						
		itemData += renderTemplate(listItemTpl, json);		
		itemTr.innerHTML = itemData;		
		queryListeners();						         								
	}

	function findMore () {  			
		mediator.pub('infoView', student)				
	}
	
	function editInfo () {                    
		mediator.pub('editView', student)							
	}
	
	function queryListeners () {
		buttonFind = itemTr.querySelector('.showInfo');
		buttonEdit = itemTr.querySelector('.editInfo');		
		buttonFind.addEventListener('click', findMore, false);			
		buttonEdit.addEventListener('click', editInfo, false);		
	}	
	
	function queryRemoveListeners () {
		buttonFind = itemTr.querySelector('.showInfo');
		buttonEdit = itemTr.querySelector('.editInfo');
        buttonFind.removeEventListener('click', findMore);
        buttonEdit.removeEventListener('click', editInfo);				
	}
		
    return this;
};