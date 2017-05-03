let visited = {};
let wasVisited = JSON.parse(localStorage.getItem('visited'))? true:false;
let isIndexPage = window.location.pathname === '/' || window.location.pathname === '/index.html'? true:false;
let viewportWidth = viewport().width;
let sectionElements = document.getElementsByTagName('section');
let indexiframeDiv1 = document.getElementById('iframe-div1');
let indexiframeDiv2 = document.getElementById('iframe-div2');
let indexiframes = document.getElementsByTagName('iframe');
let indexiframe1a = document.getElementById('index-iframe1-a');
let indexiframe2a = document.getElementById('index-iframe2-a');
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
    if ($(this).scrollTop() > 20){
        $('.sticky').addClass("fixed");
    }
    else{
        $('.sticky').removeClass("fixed");
    }
  });
  //fadein and fadeout the divs
  $('#get-started').click(() => {
    $('#main-header').fadeOut(500);
    $('#div-wrapper-top').fadeIn(500);
    $('#div-wrapper-bot').fadeIn(500);
    localStorage.setItem('visited', true);
  });

  $(window).resize(() => {
    viewportWidth = viewport().width;
    if (viewportWidth <= 480) {
      smallMobileStyles();
    }
    if (viewportWidth <= 768 && viewportWidth >= 481) {
      largerMobileStyles();
    }
    if (viewportWidth <= 983 && viewportWidth >= 769) {
      tabletStyles();
    }
    if (viewportWidth <= 1181 && viewportWidth >= 984) {
      largerTabletStyles();
    }
    if (viewportWidth >= 1182) {
      fullWidthStyles()
    }
  });
});

if (wasVisited && isIndexPage) {
  removeClass(document.getElementById('div-wrapper-top'), 'display-none');
  removeClass(document.getElementById('div-wrapper-bot'), 'display-none')
  addDisplayNoneMainHeader();
}

if(!wasVisited && isIndexPage) {
  removeClass(document.getElementById('main-header'), 'display-none');
}

if (viewportWidth <= 480) {
  smallMobileStyles();
}

if (viewportWidth <= 768 && viewportWidth>= 481) {
  largerMobileStyles();
}

if (viewportWidth <= 983 && viewportWidth >= 769) {
  tabletStyles();
}

if (viewportWidth <= 1181 && viewportWidth >= 984) {
  largerTabletStyles();
}

if (viewportWidth >= 1182) {
  fullWidthStyles()
}

function smallMobileStyles() {
  // less than 481px viewport width
  document.getElementById('problems').style.marginTop = '0px';
  // align the iframe
  indexiframeDiv1.style.marginLeft = '0px';
  indexiframeDiv2.style.marginLeft = '0px';
  // set iframe width
  for(let i = 0; i < indexiframes.length; i++) {
    indexiframes[i].style.width = '400px';
    indexiframes[i].style.marginBottom = '10px';
  }
  // section 3 p tags centering
  document.getElementById('index-section3-p2').style.textAlign = 'center';
  document.getElementById('index-section3-p3').style.textAlign = 'center';
}

function largerMobileStyles() {
  // for mobile viewport between 481 and 768
  document.getElementById('problems').style.marginTop = '0px';
  indexiframeDiv1.style.marginLeft = '0px';
  indexiframeDiv2.style.marginLeft = '0px';
  document.getElementById('index-iframe1').style.width = viewportWidth-80 + 'px';
  document.getElementById('index-iframe1').style.marginBottom = '10px';
  document.getElementById('index-iframe2').style.width = viewportWidth-80 + 'px';
  document.getElementById('index-iframe2').style.marginBottom = '10px';
  document.getElementById('index-section2-button').style.width = viewportWidth-80 + 'px';
  document.getElementById('index-section2-button').style.cssFloat = 'none';
  document.getElementById('index-order-div').style.textAlign = 'center';
  document.getElementById('index-section3-p2').style.textAlign = 'center';
  document.getElementById('index-section3-p3').style.textAlign = 'center';
}

function tabletStyles() {
  // for tablet viewport between 769 and 983
  document.getElementById('problems').style.marginTop = '120px';
  indexiframeDiv1.style.marginLeft = '0px';
  indexiframeDiv2.style.marginLeft = '0px';
  document.getElementById('index-iframe1').style.width = 688 + 'px';
  document.getElementById('index-iframe1').style.marginBottom = '10px';
  document.getElementById('index-iframe2').style.width = 688 + 'px';
  document.getElementById('index-iframe2').style.marginBottom = '10px';
  document.getElementById('index-section2-button').style.width = 688 + 'px';
  document.getElementById('index-section2-button').style.cssFloat = 'none';
  document.getElementById('index-order-div').style.textAlign = 'center';
  document.getElementById('index-section3-p2').style.textAlign = 'center';
  document.getElementById('index-section3-p3').style.textAlign = 'center';
}

function largerTabletStyles() {
  // for tablet viewport between 769 and 983
  document.getElementById('problems').style.marginTop = '70px';
  indexiframeDiv1.style.marginLeft = '0px';
  indexiframeDiv2.style.marginLeft = '0px';
  document.getElementById('index-iframe1').style.width = 688 + 'px';
  document.getElementById('index-iframe1').style.marginBottom = '10px';
  document.getElementById('index-iframe2').style.width = 688 + 'px';
  document.getElementById('index-iframe2').style.marginBottom = '10px';
  document.getElementById('index-section2-button').style.width = 688 + 'px';
  document.getElementById('index-section2-button').style.cssFloat = 'none';
  document.getElementById('index-order-div').style.textAlign = 'center';
  document.getElementById('index-section3-p2').style.textAlign = 'center';
  document.getElementById('index-section3-p3').style.textAlign = 'center';
}

function fullWidthStyles() {
  // larger than 1181 px width
  document.getElementById('problems').style.marginTop = '70px';
  console.log(viewportWidth)
  console.log(document.getElementById('index-iframe1').getAttribute('width'))
  console.log(document.getElementById('index-iframe2').getAttribute('width'))
  document.getElementById('index-iframe1').style.width = 500 + 'px';
  document.getElementById('index-iframe2').style.width = 500 + 'px';
  document.getElementById('index-section2-button').style.width = 688 + 'px';
  document.getElementById('index-section2-button').style.cssFloat = 'none';
  document.getElementById('index-order-div').style.textAlign = 'center';
}

function addDisplayNoneMainHeader(){
  document.getElementById('main-header').className += ' display-none';
}
function addDisplayNoneNavBar(){
  document.getElementById('sticky-nav').className += ' display-none';
}
function removeClass(element, classname) {
    element.className = element.className.replace(new RegExp('(?:^|s)' + classname + '(?!S)'), '');
}

function viewport() {
  // get viewport width
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
