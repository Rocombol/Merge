'use strict';

function EditView (_student) {
			
	mediator.sub('editView', function(_student){
		var student = _student,
    		extraInfo = document.getElementById('extraInfo'),
    		editDiv = document.createElement('div'),
			saveButton,
			closeButton;				

		editDiv.classList.add('editPanel'); 
		
        editDiv.innerHTML = editViewTpl;
        extraInfo.append(editDiv);		
        saveButton = editDiv.querySelector('.saveInfo');
		closeButton = editDiv.querySelector('.closeEdit'); 
				
		saveButton.addEventListener('click', changeData, false);
		closeButton.addEventListener('click', deleteExtraInfo, false);

		function changeData () {
				var inputCollection = document.getElementsByTagName('input');					
				[].forEach.call(inputCollection, function(input){						
					if (input.value!==''){
						student.set(input.name, input.value);				
					} 
				});								
				deleteExtraInfo();
				mediator.pub('infoView', student);
		};
		
		function deleteExtraInfo () {
			saveButton.removeEventListener('click', changeData)
			closeButton.removeEventListener('click', deleteExtraInfo)
			extraInfo.innerHTML = '';
		}
	});  

    return this;
}