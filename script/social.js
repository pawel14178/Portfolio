$(function(){

    $(".social_fb").bind("mouseover",'button', function(){
        $(".social_fb a").css({
            "opacity":'1',
            "-webkit-transform":"scaleX(1)"
        })
    });
    $(".social_fb").bind("mouseout",'button', function(){
        $(".social_fb a").css({
            "opacity":'0',
            "-webkit-transform":"scaleX(0)"
        })
    });
    $(".social_ig").bind("mouseover",'button', function(){
        $(".social_ig a").css({
            "opacity":'1',
            "-webkit-transform":"scaleX(1)"
        })
    });
    $(".social_ig").bind("mouseout",'button', function(){
        $(".social_ig a").css({
            "opacity":'0',
            "-webkit-transform":"scaleX(0)"
        })
    });
    $(".social_li").bind("mouseover",'button', function(){
        $(".social_li a").css({
            "opacity":'1',
            "-webkit-transform":"scaleX(1)"
        })
    });
    $(".social_li").bind("mouseout",'button', function(){
        $(".social_li a").css({
            "opacity":'0',
            "-webkit-transform":"scaleX(0)"
        })
    });
    $(".social_gh").bind("mouseover",'button', function(){
        $(".social_gh a").css({
            "opacity":'1',
            "-webkit-transform":"scaleX(1)"
        })
    });
    $(".social_gh").bind("mouseout",'button', function(){
        $(".social_gh a").css({
            "opacity":'0',
            "-webkit-transform":"scaleX(0)"
        })
    });
});