$(function(){
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
    
    $(".burger").on('click', function(){
        $( ".burger" ).toggleClass('change');
    });

    $(".burger").on('click', function(){
        $( ".nav_ul" ).animate({
            width: [ "toggle",],
            opacity: "toggle"
          }, 400, "linear");
    });
});