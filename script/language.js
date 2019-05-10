$(function(){
    $(window).on('load', function(){
        $.getJSON('script/language.json')
        .done(function(data){
            $('.translate').click(function(){
                $(this).siblings().removeClass('u_lang');
                var lang = $(this).attr('id');
                $(this).addClass('u_lang');
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