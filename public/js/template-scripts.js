let visited = {'clicked':true};
let clicked = JSON.parse(localStorage.getItem('visited'))? true:false;
let isIndexPage = window.location.pathname === '/' || window.location.pathname === '/index.html'? true:false;
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
    localStorage.setItem('visited', JSON.stringify(visited));
  });

});

function addDisplayNoneDivWrappers() {
  document.getElementById('div-wrapper-top').className += 'display-none';
  document.getElementById('div-wrapper-bot').className += 'display-none';
}
function addDisplayNoneMainHeader(){
  document.getElementById('main-header').className += 'display-none';
}
if(!clicked && isIndexPage) {
  addDisplayNoneDivWrappers();
}
if (clicked && isIndexPage) {
  addDisplayNoneMainHeader();
}
