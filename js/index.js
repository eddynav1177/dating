$(document).on('ready', function () {
    var date = new Date(),
        lastDay = date.getDate(),
        currentMonth = date.getMonth() + 1,
        currentMonth = (currentMonth < 10) ? '0'+currentMonth : currentMonth,
        currentYear = date.getFullYear(),
        year_required = currentYear - 18,    
        lastday_in_month = new Date(currentYear, currentMonth, 0).getDate();

    function loop_date(el,start, end) {
        while (start <= end) {
            if (start < 10) {
                start = '0'+start;
            }
            $('#'+el).append("<option value="+start+">"+start+"</option>");
            if ($('#'+el).val() == start) {
                
            }
            start++;
        }
    }
    // Boucle date
    loop_date('jour_naissance', 1, lastday_in_month);
    // Boucle mois
    loop_date('mois_naissance', 1, 12);
    // Boucle annee
    loop_date('annee_naissance', 1940, year_required);
    // $('#jour_naissance').val()
    if ($('#jour_naissance').val() == lastDay) {
        $('#jour_naissance').val(lastDay).prop('selected', true);
    }
    console.log($('#jour_naissance').val());
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