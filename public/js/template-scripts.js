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

  //fadein and fadeout the divs
  $('#get-started').click(() => {
    $('#main-header').fadeOut(500);
    $('#div-wrapper-top').fadeIn(500);
    $('#div-wrapper-bot').fadeIn(500);
    localStorage.setItem('visited', true);
  });
});
