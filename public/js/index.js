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

if (wasVisited && isIndexPage) {
  removeClass(document.getElementById('div-wrapper-top'), 'display-none');
  removeClass(document.getElementById('div-wrapper-bot'), 'display-none')
  addDisplayNoneMainHeader();
}

if(!wasVisited && isIndexPage) {
  $('main-header').removeClass('display-none');
  removeClass(document.getElementById('main-header'), 'display-none');
}
