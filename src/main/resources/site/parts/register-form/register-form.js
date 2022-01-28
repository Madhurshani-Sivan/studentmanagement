var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');

exports.get = function(req) {

    var model = {};
    var view = resolve('register-form.html');
    return {
        body: thymeleaf.render(view, model)
    };

};

exports.post=function(req){

    var url=portal.pageUrl({
        path:'../home',
        params:{
            firstName:req.params.firstName,
            lastName:req.params.lastName,
            email:req.params.email,
            gender:req.params.gender,
            dob:req.params.dob,
            teacher:req.params.teacher,
        }
    });

    return{
      redirect:url,
    };

};