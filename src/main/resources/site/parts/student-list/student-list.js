var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');
var httpclient = require('/lib/http-client');
var constants = require('../../../assets/constants/main.js');
var common = require('../../../lib/API.js');

exports.get = function (req) {


    var response = common.api("GET", 'students', null);
    log.info(response);
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
        var response = common.api("DELETE", `students/${studentId}`, null);
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
