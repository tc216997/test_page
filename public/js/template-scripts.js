let visited = {};
let wasVisited = JSON.parse(localStorage.getItem('visited'))? true:false;
let isIndexPage = window.location.pathname === '/' || window.location.pathname === '/index.html'? true:false;
let machines = ['jrii', 'sd501', 'sd501platinum', 'k8', 'super'];
function addDisplayNoneMainHeader(){
  document.getElementById('main-header').className += ' display-none';
}

function addDisplayNoneNavBar(){
  document.getElementById('sticky-nav').className += ' display-none';
}
function removeClass(element, classname) {
    element.className = element.className.replace(new RegExp('(?:^|s)' + classname + '(?!S)'), '');
}

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

if (wasVisited && isIndexPage) {
  removeClass(document.getElementById('div-wrapper-top'), 'display-none');
  removeClass(document.getElementById('div-wrapper-bot'), 'display-none')
  addDisplayNoneMainHeader();
}

if(!wasVisited && isIndexPage) {
  $('main-header').removeClass('display-none');
  removeClass(document.getElementById('main-header'), 'display-none');
}
/**
// get the modal
let modal = document.getElementById('jrii-info-modal');
// get the button that opens the modal
let modalBtn = document.getElementById('jrii-info-btn');
// button that close modal
let modalClose = document.getElementById('jrii-info-btn-close');
**/
let navBar = document.getElementById('sticky-nav');
let btns = document.getElementsByTagName('button');
for (let i = 0; i < btns.length; i++) {
  let name = btns[i].name
  let modal = document.getElementById(name + '-info-modal');
  let modalClose = document.getElementById(name + '-info-btn-close');
  let modalBodyDiv = document.getElementById(name + '-modal-body-div')
  // add click to open information modal
  btns[i].addEventListener('click', function(){
    modal.style.display = 'block';
    navBar.style.display = 'none';
    modalBodyDiv.style.height = 872 + 5;
    // scroll height
    console.log(modalBodyDiv.style.height)
    console.log(modal.scrollHeight);

  });
  // close modal window if clicked on x
  modalClose.addEventListener('click', function(){
    modal.style.display = 'none';
    navBar.style.display = 'block';
  });
  // close modal window if clicked outside of modal body or header
  modal.addEventListener('click', function(event){
    if (event.target.className === 'modal') {
      modal.style.display = 'none';
      navBar.style.display = 'block';
    }
  });
}
