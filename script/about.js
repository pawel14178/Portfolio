$(function(){
    $(window).on('scroll', function(){
                                            //Responsive

        if (parseInt($(window).width()) < 600) {
            //jeden
            if(this.scrollY >150){
                $('.about_one').addClass('u_slide');
            }
            else{
                $('.about_one').removeClass('u_slide');
            }
    //dwa
            if(this.scrollY > 300){
                $('.about_two').addClass('u_slide');
            }
            else{
                $('.about_two').removeClass('u_slide');
            }
    //trzy
            if(this.scrollY > 420){
                $('.about_three').addClass('u_slide');
            }
            else{
                $('.about_three').removeClass('u_slide');
            }
    //cztery
            if(this.scrollY > 600){
                $('.about_four').addClass('u_slide');
            }
            else{
                $('.about_four').removeClass('u_slide');
            }
    //piec
            if(this.scrollY > 750){
                $('.about_five').addClass('u_slide');
            }
            else{
                $('.about_five').removeClass('u_slide');
            }


            }
                            //Dla duzych
        else{
//jeden
            if(this.scrollY >= 500){
                $('.about_one').addClass('u_slide');
            }
            else{
                $('.about_one').removeClass('u_slide');
            }
    //dwa
            if(this.scrollY > 600){
                $('.about_two').addClass('u_slide');
            }
            else{
                $('.about_two').removeClass('u_slide');
            }
    //trzy
            if(this.scrollY > 800){
                $('.about_three').addClass('u_slide');
            }
            else{
                $('.about_three').removeClass('u_slide');
            }
    //cztery
            if(this.scrollY > 1000){
                $('.about_four').addClass('u_slide');
            }
            else{
                $('.about_four').removeClass('u_slide');
            }
    //piec
            if(this.scrollY > 1200){
                $('.about_five').addClass('u_slide');
            }
            else{
                $('.about_five').removeClass('u_slide');
            }
        }
    });
});