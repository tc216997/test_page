let visitedFBGroup = localStorage.getItem('clickedOnFB')? true:false;

$(document).ready(function () {

  $('#testimonials-modal-close').click(closeModal);

  $('#modal-link').click(function () {
    closeModal();
    localStorage.setItem('clickedOnFB', true);
  })

  $(window).scroll(function () {
    // check if scroll is near bottom
    if($(window).scrollTop() + $(window).height() >= $(document).height() -300) {
      if (!visitedFBGroup) {
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
