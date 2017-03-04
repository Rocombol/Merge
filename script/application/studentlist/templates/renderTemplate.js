'use strict';

function renderTemplate (tpl, json) {
    var tplNew = tpl,
        dummyElement;

    for (var key in json) {
        dummyElement = ':' + key;
        tplNew = tplNew.replace(dummyElement, json[key]);
    }

    return tplNew;
}