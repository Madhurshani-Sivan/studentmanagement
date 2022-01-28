var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');

exports.get = function(req) {

    var url=portal.pageUrl({
        path:'../register-student',
    });
    var model = {
        url:url,
    };
    var view = resolve('register-button.html');

    return {
        body: thymeleaf.render(view, model)
    };

};
