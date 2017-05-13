let visitedFBGroup = localStorage.getItem('clickedOnFB')? true:false;
let clicked = false;
$(document).ready(function () {

  $('#testimonials-modal-close').click(closeModal);

  $('#modal-link').click(function () {
    clicked = true;
    localStorage.setItem('clickedOnFB', true);
    closeModal();
  })

  $(window).scroll(function () {
    // check if scroll is near bottom
    if($(window).scrollTop() + $(window).height() >= $(document).height() -300) {
      if (!visitedFBGroup || !clicked) {
        openModal();
      }
    }
  });
});

function openModal() {
  $('#testimonials-modal').css('display', 'block');
}

function closeModal() {
  $('#testimonials-modal').css('display', 'none');
}
