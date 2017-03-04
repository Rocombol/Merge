'use strict';

function InfoView () {
var infoDiv = document.createElement('div'),
	closeButton;
		
	this.render = function (_student) {
		
		var student = _student,
			json = student.toJSON(), 		
        	html = '';
		
        html += renderTemplate(infoViewTpl, json);
        infoDiv.innerHTML = html;
        closeButton = infoDiv.querySelector('.closeInfo');
				
		closeButton.addEventListener('click', this.closeInfo, false);

		return infoDiv;
	}
		
	this.closeInfo = function () {
		
		closeButton.removeEventListener('click', this.closeInfo);
		infoDiv.parentNode.innerHTML='';
	};
		
    return this;
}