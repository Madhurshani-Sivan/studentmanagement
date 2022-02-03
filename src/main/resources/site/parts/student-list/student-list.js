var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');
var httpclient = require('/lib/http-client');
var constants = require('../../../assets/constants/main.js');

exports.get = function (req) {

    var response = httpclient.request({
        method: "GET",
        url: `${constants.server}/students`,
        contentType: "application/json",
    });
    var students = JSON.parse(response.body);
    var model = {
        students: students,
        message: req.params.response,
    };
    var view = resolve('student-list.html');

    return {
        body: thymeleaf.render(view, model)
    };

};
exports.post = function (req) {

    if (req.params.button == 'Delete') {

        var studentId = req.params.id;
        var response = httpclient.request({
            method: "DELETE",
            url: `${constants.server}/students/${studentId}`,
            contentType: "application/json",

        });
        var res = JSON.parse(response.body);
        var url = portal.pageUrl({
            path: `../${constants.home}`,
            params: {
                response: res.message
            }
        });

        return {

            redirect: url,
        };

    }

    if (req.params.button == 'View') {

        var url = portal.pageUrl({
            path: `../${constants.register}`,
            params: {
                id: req.params.id,
                firstName: req.params.firstName,
                lastName: req.params.lastName,
                email: req.params.email,
                gender: req.params.gender,
                dob: req.params.dob,
                teacher: req.params.teacher,
            },
        });

        return {
            redirect: url,
        };

    }

};
