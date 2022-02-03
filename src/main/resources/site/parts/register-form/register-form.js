var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');
var constants = require('../../../assets/constants/main.js');
var common = require('../../../lib/API.js');

exports.get = function (req) {

    var model = {
        id: req.params.id,
        firstName: req.params.firstName,
        lastName: req.params.lastName,
        email: req.params.email,
        gender: req.params.gender,
        dob: req.params.dob,
        teacher: req.params.teacher,
    };
    var view = resolve('register-form.html');

    return {
        body: thymeleaf.render(view, model)
    };

};

exports.post = function (req) {

    var student = {
        firstName: req.params.firstName,
        lastName: req.params.lastName,
        email: req.params.email,
        gender: req.params.gender,
        dob: req.params.dob,
        teacher: req.params.teacher,
    };
    var data = JSON.stringify(student);
    var response = common.api("POST", "add", data);
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

};