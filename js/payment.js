$(document).ready(function() {
    sessionStorage.clear();
    
    function controleInput(el, interval, delimiter) {
        var el_id = document.getElementById(el);
        el_id.onkeyup = function (e) {
            if (this.value == this.lastValue) return;
            var caretPosition = this.selectionStart;
            var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
            var parts = [];

            // for (var i = 0, len = sanitizedValue.length; i < len; i +=interval) { 
                for (var i = 0; i < sanitizedValue.length; i +=interval) {
                parts.push(sanitizedValue.substring(i, i + interval));
            }

            for (var i=caretPosition - 1; i>= 0; i--) {
                var c = this.value[i];
                if (c < '0' || c> '9') {
                    caretPosition--;
                }
            }
            caretPosition += Math.floor(caretPosition / interval);
            
            this.value = this.lastValue = parts.join(delimiter);
            this.selectionStart = this.selectionEnd = caretPosition;
        }
    }

    //For Card Number formatted input
    controleInput('cr_no', 4, ' ');
    //For Date formatted input
    controleInput('exp', 2, '/');

    $(window).on('scroll', function(e) {
        var scroll_top = $(this).scrollTop();
        if (scroll_top == 0) {
            $("#section_cgv").addClass('hide');
        } else {
            $("#section_cgv").removeClass('hide');
        }
    });    
});