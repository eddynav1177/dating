$(document).ready(function() {

    var date = new Date(),
        last_day = date.getDate(),
        current_month = date.getMonth() + 1,
        current_month = (current_month < 10) ? '0'+current_month : current_month,
        current_year = date.getFullYear(),
        year_required = current_year - 18,    
        last_day_in_month = new Date(current_year, current_month, 0).getDate();

    function select_loop_date(el,start, end) {
        while (start <= end) {
            if (start < 10) {
                start = '0'+start;
            }
            $('#'+el).append("<option value="+start+">"+start+"</option>");
            switch (start) {
                case last_day:
                    $("#"+el+" option[value="+last_day+"]").prop('selected', true);
                break;
                case current_month:
                    $("#"+el+" option[value="+current_month+"]").prop('selected', true);
                break;
                case year_required:
                    $("#"+el+" option[value="+year_required+"]").prop('selected', true);
                break;
            }
            start++;
        }
    }

    // Boucle date
    select_loop_date('jour_naissance', 1, last_day_in_month);
    // Boucle mois
    select_loop_date('mois_naissance', 1, 12);
    select_loop_date('mois_expiration_carte', 1, 12);
    // Boucle annee
    select_loop_date('annee_naissance', 1940, year_required);
    select_loop_date('annee_expiration_carte', current_year, 2040);
    

    $('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder','');
    }).blur(function(){
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
});
