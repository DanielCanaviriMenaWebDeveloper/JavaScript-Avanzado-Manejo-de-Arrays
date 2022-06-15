var array = [];

function memoria(limit) {
    var array = [];
    return function(element) {
        var isSet = arguments.length >= 1;
        if (ifSet) {
            array.push(element);
            if (array.length === limit + 1) {
                array.shift();
            }else {
                return array;
            }
        }
    }
}

var store 