$(function(){
    $(window).on('load', function(){
        $.getJSON('script/language.json')
        .done(function(data){
            $('.translate').click(function(){
                var lang = $(this).attr('id');

                $(".lang").each(function(index, element){
                    $(this).text(data[lang][$(this).attr('key')]);
                });
            })
        })
        .fail(function(){
            alert("Nie można w tej chwili przytłumaczyć strony");
        })
    });
});