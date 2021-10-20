window.onload = function() {

    if (location.href.indexOf('#') != -1 && location.href.substr(location.href.indexOf('#')) != "#about") {
        $('#heading').show();
    }

    $('#content_tabs a').on('click', function() {
        if (this.text == "ABOUT ME") {
            $('#heading').slideUp("slow");
        } else {
            $('#heading').slideDown("slow");
        }
    });
}
