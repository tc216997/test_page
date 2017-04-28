let visited = {};
let wasVisited = JSON.parse(localStorage.getItem('visited'))? true:false;
console.log(JSON.parse(localStorage.getItem('visited')))
console.log(wasVisited)
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
    localStorage.setItem('visited', true);
    console.log(JSON.parse(localStorage.getItem('visited')))
  });
  if (wasVisited && isIndexPage) {
    console.log('remove class')
    removeClass(document.getElementById('div-wrapper-top'), 'display-none');
    removeClass(document.getElementById('div-wrapper-bot'), 'display-none')
    addDisplayNoneMainHeader();
  }
  if(!wasVisited && isIndexPage) {
    $('main-header').removeClass('display-none');
  }
});

function addDisplayNoneMainHeader(){
  document.getElementById('main-header').className += 'display-none';
}

function removeClass(element, classname) {
    element.className = element.className.replace(new RegExp('(?:^|s)' + classname + '(?!S)'), '');
}
