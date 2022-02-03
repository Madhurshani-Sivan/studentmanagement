$(document).ready(function () {

    $("#delete").on('click', function () {
        if (!confirm("Are you sure you want to delete this?")) {
            return false;
        }
    });

    var message = $('#message').val();

    if (message != null && message != '') {
        var onlyUrl = window.location.href.replace(window.location.search, '');
        alert(message);
        $('#message').val('');
        window.location.href = onlyUrl;
    }

    var rowsShown = 5;
    var rowsTotal = $('#data tbody tr').length;
    var numPages = Math.ceil(rowsTotal / rowsShown);

    for (i = 1; i <= rowsTotal; i++) {
        var row = '<td>' + i + '</td>';
        var rowNo = i - 1;
        $('#data tbody tr:eq(' + rowNo + ')').prepend(row);
    }

    for (i = 1; i <= numPages; i++) {
        $('#nav').append('<a href="#" rel="' + i + '">' + "Page " + i + '</a> ');
    }

    $('#data tbody tr').slice(0, rowsShown).show();
    $('#nav a:first').css('color', 'red');

    $('#nav a').on('click', function () {
        $('#nav a').css('color', 'purple');
        $(this).css('color', 'red');
        var currentPage = $(this).attr('rel');
        var startItem = (currentPage - 1) * rowsShown;
        var endItem = startItem + rowsShown;
        $('#data tbody tr').hide().slice(startItem, endItem).css('display', 'table-row');
    });

});