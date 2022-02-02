var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');
var constants = require('../../../assets/constants/main.js');

exports.get = function (req) {

    var url = portal.pageUrl({
        path: `../${constants.home}`,
    });
    var model = {
        url: url,
    };
    var view = resolve('home-button.html');

    return {
        body: thymeleaf.render(view, model)
    };

};
