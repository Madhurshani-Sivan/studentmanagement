var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');

exports.get = function () {

    var content = portal.getContent();
    var model = {
        displayName: content.displayName, region: content.page.regions.main
    };
    var view = resolve('standardPage.html');

    return {
        body: thymeleaf.render(view, model)
    };

};
