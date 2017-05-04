$(document).ready(function() {
  lazyLoad()
  // on scroll
  $(window).scroll(function() {
    lazyLoad();
  });
});

// lazy loading the iframes by using the distance from top of the window
// to element top position - 880px, since it takes time to load the embed,
// decide to load up the iframe much earlier
function lazyLoad() {
  let windowTop = $(window).scrollTop();
  let divs = $('.ytplayer-div');
  let index = 0;
  $('.ytplayer-div').each(function(item) {
    let divTop = $(this).offset().top - 880;
    let hasLoaded = $(this).attr('loaded');
    if (!hasLoaded && windowTop >= divTop) {
      $(this).attr('loaded', true);
      $(this).html(ytVids[index]);
    }
    index++;
  });

}
