$(document).ready(function() {
    var kurs = $('.nivoi');
    var nivo = $('.nivoi_kurseva');

    kurs.on('click', function check(){
        $('.nivoi_kurseva').not(this).slideUp();
        $(this).parent().css("height", "500px");
        $(this).parent().find('.nivoi_kurseva').toggle();
    });
});