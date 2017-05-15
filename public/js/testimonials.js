let clicked = false;
$(document).ready(function () {
  $('#testimonials-modal-close').click(closeModal);

  $('#modal-link').click(function () {
    closeModal();
  });

  $(window).scroll(function () {
    // check if scroll is near bottom
    if($(window).scrollTop() + $(window).height() >= $(document).height() -300) {
      if (!clicked) {
        openModal();
      }
    }
  });
});

function openModal() {
  let visitedFBGroup = localStorage.getItem('clickedOnFB')? true:false;
  clicked = true;
  if (!visitedFBGroup) {
    $('#testimonials-modal').css('display', 'block');
  }
}

function closeModal() {
  localStorage.setItem('clickedOnFB', true);
  clicked = true;
  $('#testimonials-modal').css('display', 'none');
}
