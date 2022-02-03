$(document).ready(function () {

    var gender = $('#gender').val();
    if (gender == "Male") {
        $("#genderM").prop("checked", true);
    } else if (gender == "Female") {
        $("#genderF").prop("checked", true);
    }

    $('#registerForm').on("submit", function () {

        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var birthdate = $('#birthdate').val();
        var teacher = $('#teacher').val();

        $('.error').remove();

        if (firstName.length == 0) {
            $('#firstName').after('<span class="error">This field is required</span>');
            return false;
        }

        if (lastName.length == 0) {
            $('#lastName').after('<span class="error">This field is required</span>');
            return false;
        }

        if (email.length == 0) {
            $('#email').after('<span class="error">This field is required</span>');
        } else {
            var regEx = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;
            if (!regEx.test(email)) {
                $('#email').after('<span class="error">Enter a valid email address</span>');
                return false;
            }
        }

        if (birthdate.length == 0) {
            $('#birthdate').after('<span class="error">This field is required</span>');
            return false;
        }

        if (teacher.length == 0) {
            $('#teacher').after('<span class="error">This field is required</span>');
            return false;
        }

    });
});