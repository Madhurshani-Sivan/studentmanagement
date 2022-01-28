var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');

exports.get = function(req) {

    var students=[
        {
            firstName:'Uriah',
            lastName:'Disbrow',
            email:'mdisbrow0@google.com.au',
            gender:'Female',
            dob:'2021-04-21',
            teacher:'Mallorie'
        },
        {
            firstName:'Garek',
            lastName:'Millar',
            email:'smillar1@nytimes.com',
            gender:'Female',
            dob:'2022-01-06',
            teacher:'Sandor'
        },
        {
            firstName:'Abramo',
            lastName:'Tal',
            email:'gtal2@etsy.com',
            gender:'Male',
            dob:'2021-03-24',
            teacher:'Gifford'
        }
    ];


    students.push({
        firstName:req.params.firstName,
        lastName:req.params.lastName,
        email:req.params.email,
        gender:req.params.gender,
        dob:req.params.dob,
        teacher:req.params.teacher,
    });

    var model = {
        students:students
    };
    var view = resolve('student-list.html');

    return {
        body: thymeleaf.render(view, model)
    };

};
