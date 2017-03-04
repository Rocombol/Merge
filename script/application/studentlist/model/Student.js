'use strict';

function Student (name, lastName, gender, skype, phone, email, birthdate) {
    var values = {
        name: name,
		lastName: lastName,
        gender: gender,
        phone: phone,
        skype: skype,
        email: email,
        birthdate: getAge(birthdate)
    };
	
    this.toJSON = function () {
        return values;
    };
				
    this.get = function (key) {
        return values[key];
    };

    this.set = function (key, value) {
        values[key] = value;
		this.trigger('change');
    };	
	
    function getAge (birthdate) {
        var birthdateToDate,
            ageDifMs,
            ageDate;

        birthdateToDate = new Date(birthdate);
        ageDifMs = Date.now() - birthdateToDate.getTime();
        ageDate = new Date(ageDifMs);

        return Number(Math.abs(ageDate.getUTCFullYear() - 1970));
    }

    return this;

}

Student.prototype = new Observer();
Student.prototype.constructor = Student; 