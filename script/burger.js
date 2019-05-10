$(function(){
    $(".burger").on('click', function(){
        $( ".burger" ).toggleClass('change');
    });

    $(".burger").on('click', function(){
        $( ".nav_ul" ).animate({
            width: [ "toggle",],
            opacity: "toggle"
          }, 400, "linear");
    });
    
    //Burger dla mobile
    if (parseInt($(window).width()) < 600) {
        var click = true;
        $(".burger").on('click', function(){
            if ( click === true){
                $( ".nav_ul_rwd" ).css({
                    "-webkit-transform":"scaleX(1)",
                    "opacity": '1'
                });
                click = false;

                $( ".nav_ul_rwd button" ).on('click', function(){
                    $( ".nav_ul_rwd" ).css({
                        "-webkit-transform":"scaleX(0)",
                        "opacity": '0'
                    });
                    $( ".burger" ).removeClass('change');
                    click = true;
                });
                
            }
            else{
                $( ".nav_ul_rwd" ).css({
                    "-webkit-transform":"scaleX(0)",
                    "opacity": '0'
                });
                click = true;
            }

        });
    }
    else{
        //Burger dla PC
        $(window).on("scroll", function(){
            if(this.scrollY != 0){            
                $(".nav_ul").addClass('u_menu');
            }
            else{
                $(".nav_ul").removeClass('u_menu');
            }
        });    
    
         $(".burger").on('mouseover', function(){
            $(".nav_ul").addClass('u_shake');
        });
         $(".burger").on('mouseout', function(){
            $(".nav_ul").removeClass('u_shake');
        }); 

    }
});