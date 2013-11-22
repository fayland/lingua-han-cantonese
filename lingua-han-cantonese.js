var cantonese_data = require('./lib/cantonese.json');

var _is_tone_on = true;

var getCantonese = function(char) {
    if (char == null) return '';
    var xcode = escape(char).replace('%u', '');
    if (cantonese_data[xcode]) {
        var v = cantonese_data[xcode].split(' ')[0];
        if (_is_tone_on) {
            return v;
        } else {
            return v.replace(/\d+$/, '');
        }
    } else {
        return '';
    }
};

module.exports = {
    'get': getCantonese,
    'setToneOn':  function() { _is_tone_on = true; },
    'setToneOff': function() { _is_tone_on = false; }
};