$("h1").css("color","red");
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5}).animate({opacity:3.0});
});
