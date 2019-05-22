$(function(){
    $(window).on('scroll', function(){
                                            //Responsive
        var $width = parseInt($(window).width());

        console.log(this.scrollY);

        if ($width < 600) {
            if(this.scrollY > 850){
                $('.skills_logos img').addClass('u_fadein');
            }
            else{
                $('.skills_logos img').removeClass('u_fadein');
            }
        }
        else{
            if(this.scrollY > 1550){
                $('.skills_logos img').addClass('u_fadein');
            }
            else{
                $('.skills_logos img').removeClass('u_fadein');
            }
                    
        }
    });
});