'use strict';

function EditView () {
	
var editDiv = document.createElement('div'),
	saveButton, closeButton;
					
	this.render =  function (_student){		
		var student = _student;
			
		editDiv.classList.add('editPanel'); 
		
        editDiv.innerHTML = editViewTpl;
      
        saveButton = editDiv.querySelector('.saveInfo');
		closeButton = editDiv.querySelector('.closeEdit'); 
				
		saveButton.addEventListener('click', changeData, false);
		closeButton.addEventListener('click', this.closeInfo, false);
		
		function changeData () {
				var inputCollection = document.getElementsByTagName('input');					
				[].forEach.call(inputCollection, function(input){						
					if (input.value!==''){
						student.set(input.name, input.value);				
					} 
				});								
				deleteExtraInfo ();
				mediator.pub('infoView', student);
		}
		
		function deleteExtraInfo () {	
			saveButton.removeEventListener('click', changeData)
			closeButton.removeEventListener('click', deleteExtraInfo)
			editDiv.parentNode.innerHTML='';
		}
		
		return editDiv;
	};
	
	
	this.closeInfo = function () {
			editDiv.parentNode.innerHTML='';
	};
			
    return this;
}