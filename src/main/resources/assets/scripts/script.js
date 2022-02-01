$(document).ready(function (){
    // $('#register-form').submit(function (e){
    //     alert("Form submitted");
    //     e.preventDefault();
    //     var first_name=$('#first-name').val();
    //     var last_name=$('#last-name').val();
    //     var email=$('#email').val();
    //     var birthdate=$('#birthdate').val();
    //     var teacher=$('#teacher').val();
    //
    //     $(".error").remove();
    //
    //     if(first_name.length<1){
    //         $('#first-name').after('<span class="error">This field is required</span>');
    //     }
    // })
    $('#firstName').on('blur', function () {
        alert('form submit');
    });
});