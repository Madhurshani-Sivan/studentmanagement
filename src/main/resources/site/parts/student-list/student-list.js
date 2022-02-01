var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');
var httpclient = require('/lib/http-client');
var constants = require('../../../assets/constants/main.js');

exports.get = function (req) {

    var response = httpclient.request({
        method: "GET",
        url: `${constants.server}/students`,
        contentType: "application/json"
    });
    var students = JSON.parse(response.body);
    var model = {
        students: students
    };
    var view = resolve('student-list.html');

    return {
        body: thymeleaf.render(view, model)
    };

};

