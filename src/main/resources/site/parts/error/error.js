var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');
var constants = require('../../../assets/constants/main.js');

exports.get = function (req) {


    var model = {
        error: req.params.response,
    };
    var view = resolve('error.html');

    return {
        body: thymeleaf.render(view, model)
    };

};
