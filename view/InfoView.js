'use strict';

function InfoView () {

	mediator.sub('infoView', function (_student){
		var student = _student,
			json = student.toJSON(), 		
        	infoData = '',
            infoDiv = document.createElement('div'),
            extraInfo = document.getElementById('extraInfo'),
			closeButton;
		
        infoData += renderTemplate(infoViewTpl, json);
        infoDiv.innerHTML = infoData;
        extraInfo.append(infoDiv);		
        closeButton = document.querySelector('.closeInfo');
				
		closeButton.addEventListener('click', closeInfo, false);
		
			function closeInfo() {
				closeButton.removeEventListener('click', closeInfo)
				closeButton.closest('#extraInfo').innerHTML='';						
		}
	}); 
		
    return this;
}