$(function(){
    $(window).on("scroll", function(){
        if(this.scrollY === 0){            
            $(".nav_ul").css({"background-image":"linear-gradient(to bottom, transparent, transparent)"});
        }
        else{
            $(".nav_ul").css({"background-image":"linear-gradient(to bottom, rgba(90, 90, 90, .8), transparent)"});
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