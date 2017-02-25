function Observer () {
    var events = {};

    this.on = function (eventName, callback) {
        if(!events.hasOwnProperty(eventName)){
            events[eventName] = [];
        }
        events[eventName].push(callback);   
    };

    this.trigger = function (eventName, arg) {
        if(events.hasOwnProperty(eventName)){
            events[eventName].forEach(function(callback){
            callback(arg);
            });     
        }   
    };

    return this;
}
