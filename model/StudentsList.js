'use strict';
function StudentsList () {
		
	Student.prototype = new Observer();
	Student.prototype.constructor = Student; 
			
		var first = new Student("Alex", "Grigoryev", "Male", "answer_quick", "3805555333", "answer_quick@hmail.com", "1994-08-03"),
        	second = new Student("Svetlana", 'Ovcharenko', "Female", "sweetie", "+380663334455", "sweetie@gmail.com", "1991-05-24"),
        	third = new Student("Polina", 'Zhylyaeva', "Female", "candy_polya", "+380934445566", "candy_polya@hmail.com", "1987-07-07"),
        	fourth = new Student("Elena", 'Ryndina', "Female", "smile", "+380666668888", "smile@hmail.com", "1991-08-24"),
        	fifth = new Student("Irina", "Ruban", "Female","dn100980rev", "+380998885511",  "kitty@gmail.com", "1995-02-04"),
        	sixth = new Student("Vladimir", "Timofeev", "Male", "vovanium", "+380634207163", "vovanium@gmail.com", "1988-06-06");
    
        var students = [first, second, third, fourth, fifth, sixth];
	    
	    this.forEach = function (itemStudent) {
			students.forEach(itemStudent);		  
		} 
		
    return this;
}