jQuery(document).ready(function($) {
  // Owl Carousel
  $(".carousel-default").owlCarousel({
     navigation : false,
   	 slideSpeed : 300,
   	 pagination: false,
   	 autoPlay : false,
     addClassActive: true,
     navigationText: ["&#xe605","&#xe606"],
   	 singleItem:true
  });


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

  function removeDisplayNone() {
    document.getElementById('div-wrapper').classList.remove('display-none')
  }
  $('#get-started').click(removeDisplayNone);
});
