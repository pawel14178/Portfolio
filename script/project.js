$(function(){
    $('.project-modal').on('mouseover', function(){
        $(this).css({'opacity':'1'});
    });
    $('.project-modal').on('mouseout', function(){
        $(this).css({'opacity':'0'});
    })

    if (parseInt($(window).width()) < 600) {
        $('.project-modal').on('click', function(){
            let attr = $('.u_lang').attr('id');
            
            if (attr === 'pl'){
                $('.project-modal p').text("Mój pierwszy, większy projekt butiku z asynchronicznym wczytywaniem produktów, także z wersją na smartphony");
                attr="";
            }
            else{
                $('.project-modal p').text('My first major project of clothes boutique with asynchronous loading of products and opinions with mobile version')
                attr="";
            }
        })
    }

})