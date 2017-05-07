jQuery(document).ready(function($) {
  // on resize adjust the top margin of top header
  $(window).resize(() => {
    navHeight = $('#sticky-nav').height();
    topHeaderHeight = $('#top-header').height();
    if (navHeight === 146) {
      $('#top-header').css('margin-top', '170px');
    } else if (navHeight === 88) {
      $('#top-header').css('margin-top', '30px');
    } else {
      $('#top-header').css('margin-top', '100px');
    }
  });
  // Sticky Nav Bar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('.sticky').addClass("fixed");
    } else {
      $('.sticky').removeClass("fixed");
    }
  });
});
// hacky solution to make the top header look responsive
let navEle = document.getElementById('sticky-nav');
let topHeaderEle = document.getElementById('top-header');
if (navEle.offsetHeight === 148) {
  topHeaderEle.style.marginTop = '170px';
} else if (navEle.offsetHeight === 90) {
  topHeaderEle.style.marginTop = '30px';
} else {
  topHeaderEle.style.marginTop = '100px';
}
