$(document).ready(function () {
    alert(`${gender}`);

    $('#registerForm').on("submit", function (e) {

        e.preventDefault();

        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#email').val();
        var birthdate = $('#birthdate').val();
        var teacher = $('#teacher').val();

        $('.error').remove();

        if (firstName.length == 0) {
            $('#firstName').after('<span class="error">This field is required</span>');
        }

        if (lastName.length == 0) {
            $('#lastName').after('<span class="error">This field is required</span>');
        }

        if (email.length == 0) {
            $('#email').after('<span class="error">This field is required</span>');
        } else {
            var regEx = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;
            if (!regEx.test(email)) {
                $('#email').after('<span class="error">Enter a valid email address</span>');

            }
        }

        if (birthdate.length == 0) {
            $('#birthdate').after('<span class="error">This field is required</span>');
        }

        if (teacher.length == 0) {
            $('#teacher').after('<span class="error">This field is required</span>');
        }

        $(this).off('submit');

        if ($(this).valid()) {
            this.submit();
            var onlyUrl = window.location.href.replace(window.location.search, '');
            alert(`${response}`);
            window.location.href = onlyUrl;
        }
    });
});