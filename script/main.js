'use strict';
	Student.prototype = new Observer();
	Student.prototype.constructor = Student; 
	
	ColorCounter.prototype = new Observer();
	ColorCounter.prototype.constructor = ColorCounter;

var studentsList = new StudentsList(),
    listView = new ListView(studentsList),
    mediator = new Mediator(),
    infoView = new InfoView(),
    edit = new EditView(),
	colorCounter = new ColorCounter(),
    colorView = new ColorView(),
    counterView = new CounterView(colorCounter),
    buttonView = new ButtonView(colorCounter);	

	
document.addEventListener('DOMContentLoaded', function () {
		
    listView.renderList();	
		
    buttonView.renderButtons();
    counterView.renderCounters();

    colorCounter.on('change', colorView.renderColor);
    colorCounter.on('change', counterView.renderCounters);	
	
}, false);