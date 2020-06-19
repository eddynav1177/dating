$(document).on('ready', function () {
    var date = new Date(),
        lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0),
        currentYear = date.getFullYear(),
        year_required = currentYear - 18;
    function loop_date(el,start, end) {
        while (start <= end) {
            if (start < 10) {
                start = '0'+start;
            }
            $('#'+el).append("<option value="+start+">"+start+"</option>");
            start++;
        }
    }
    // Boucle date
    // loop_date('jour_naissance', 1, lastDay);
    // // Boucle mois
    // loop_date('mois_naissance', 1, 12);
    // // Boucle annee
    // loop_date('annee_naissance', 1940, year_required);
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