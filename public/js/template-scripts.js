jQuery(document).ready(function($) {
  // Sticky Nav Bar
  $(window).scroll(function() {
    //console.log($(this).scrollTop())
    if ($(this).scrollTop() > 20){
        $('.sticky').addClass("fixed");
    }
    else{
        $('.sticky').removeClass("fixed");
    }
  });

});
