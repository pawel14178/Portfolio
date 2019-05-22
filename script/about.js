$(function(){
    $(window).on('scroll', function(){
                                            //Responsive
        var $width = parseInt($(window).width());

        if ($width < 600) {
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


            }                               // Dla max 900
        else if ($width > 600 && $width < 900){
            
            if(this.scrollY >280){
                $('.about_one').addClass('u_slide');
            }
            else{
                $('.about_one').removeClass('u_slide');
            }
    //dwa
            if(this.scrollY > 320){
                $('.about_two').addClass('u_slide');
            }
            else{
                $('.about_two').removeClass('u_slide');
            }
    //trzy
            if(this.scrollY > 450){
                $('.about_three').addClass('u_slide');
            }
            else{
                $('.about_three').removeClass('u_slide');
            }
    //cztery
            if(this.scrollY > 550){
                $('.about_four').addClass('u_slide');
            }
            else{
                $('.about_four').removeClass('u_slide');
            }
    //piec
            if(this.scrollY > 640){
                $('.about_five').addClass('u_slide');
            }
            else{
                $('.about_five').removeClass('u_slide');
            }
        }
                            //Dla duzych
        else{
//jeden
            if(this.scrollY >= 400){
                $('.about_one').addClass('u_slide');
            }
            else{
                $('.about_one').removeClass('u_slide');
            }
    //dwa
            if(this.scrollY > 500){
                $('.about_two').addClass('u_slide');
            }
            else{
                $('.about_two').removeClass('u_slide');
            }
    //trzy
            if(this.scrollY > 700){
                $('.about_three').addClass('u_slide');
            }
            else{
                $('.about_three').removeClass('u_slide');
            }
    //cztery
            if(this.scrollY > 900){
                $('.about_four').addClass('u_slide');
            }
            else{
                $('.about_four').removeClass('u_slide');
            }
    //piec
            if(this.scrollY > 1100){
                $('.about_five').addClass('u_slide');
            }
            else{
                $('.about_five').removeClass('u_slide');
            }
        }
    });
});