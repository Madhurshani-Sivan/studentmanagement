$(document).ready(function () {

    $("#deleteForm").on('submit', function (e) {

        if (!confirm("Are you sure you want to delete this?")) {
            return false;
        }
    });

    var message = $('#message').val();
    if (message != null && message != '') {
        var onlyUrl = window.location.href.replace(window.location.search, '');
        console.log('*********************************************' + onlyUrl);
        alert(message);
        $('#message').val('');
        window.location.href = onlyUrl;

    }
});