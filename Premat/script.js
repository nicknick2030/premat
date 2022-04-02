AOS.init();
$(document).ready(function(){
  $(window).scroll(function(){
    var top = $(this).scrollTop();
    var menu =  $(".navmenu");
    if (top>=100) {
      menu.addClass('navscroll');
      menu.css({'background':'white'});

    } else if (top <= 200) {
      menu.css({'background':'#ffe3e2'})
      menu.removeClass('navscroll');
    }
  });

  $(".hamburger").click(function(){
    $(".hamburger__menu").toggleClass("active");
    $(".hamb__links").toggleClass("active");
  });

  $(".more-prod-btn").click(function(){
    $(".hideproducts").slideToggle("slow");
    if ($("#changeText").text() === "More Product") {
      $("#changeText").html("Less Product");
    } else {
      $("#changeText").html("More Product");
    } ;
  });

})

