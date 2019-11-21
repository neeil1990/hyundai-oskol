
window.onload = function() {
    $('.showroom-car__name').each(function (id, elem) {
        if($(this).text() == 'i30 N'){
            $(this).closest('.showroom-car').remove();
        }
    });
};