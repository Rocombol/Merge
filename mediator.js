function Mediator () {
    var events = {};

    this.sub = function (eventName, callback) {
        if (!events[eventName]) {
            events[eventName] = [];
        }
        events[eventName].push(callback);
    };

    this.pub = function (eventName, arg) {
        if (events[eventName]) {
            events[eventName].forEach(function (callback) {
                callback(arg);
            });
        }
    };

    return this;
}
