$(document).on('ready', function () {    

    $(document).on('click', '#p_check_cgv', function (e) {
        $('#check_cgv').trigger('click');
    });
    $(document).on('click', '[id^=login_]', function (e) {
        e.preventDefault();
        $("#modalLogin").modal();
    });
    $(document).on('click', '[id^=member_envelope_], [id^=member_image_], [id^=inscription_avantage_]', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#blk_inscription").offset().top
        }, 1000);
    });
});