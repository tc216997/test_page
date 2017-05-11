let navBar = document.getElementById('sticky-nav');
let btns = document.getElementsByTagName('button');

for (let i = 0; i < btns.length; i++) {
  //modal for info
  if (btns[i].id.includes('info')) {
    let name = btns[i].name
    let modal = document.getElementById(name + '-info-modal');
    let modalClose = document.getElementById(name + '-info-btn-close');
    let modalBodyDiv = document.getElementById(name + '-modal-body-div');
      //  open information modal
    btns[i].addEventListener('click', function() {
      modal.style.display = 'block';
      navBar.style.display = 'none';
      modalBodyDiv.style.height = 872 + 5;
    });
    // close modal window if clicked on x
    modalClose.addEventListener('click', function() {
      modal.style.display = 'none';
      navBar.style.display = 'block';
    });
    // close modal window if clicked outside of modal body or header
    modal.addEventListener('click', function(event) {
      if (event.target.className === 'modal') {
        modal.style.display = 'none';
        navBar.style.display = 'block';
      }
    });
  }
  if (btns[i].id.includes('payment')) {
    let btnValue = btns[i].value;
    let pdfLink = '/pdf?filename=' + btns[i].value;
    let name = btns[i].name;
    let modal = document.getElementById('payment-modal');
    let modalClose = document.getElementById('payment-btn-close');
    let modalBodyDiv = document.getElementById('modal-body-payment-div');
    let modalText = document.getElementById('payment-modal-h2-text');
    //  open information modal
    btns[i].addEventListener('click', function() {
      modal.style.display = 'block';
      navBar.style.display = 'none';
      modalBodyDiv.style.height = 872 + 5;
      document.getElementById('order-form-a').setAttribute('href', pdfLink);
      document.getElementById('refund-form-a').setAttribute('href', '/pdf?filename=return-policy');
      document.getElementById('w9-form-a').setAttribute('href', '/pdf?filename=w9');
      if (btnValue.includes('zerodown')){
        modalText.innerHTML = 'Please call Enagic Headquarter at (310) 542-7700 to see if you are eligible.'
      } else {
        modalText.innerHTML = 'Please complete the following forms for the order, thank you.'
      };

    });
    // close modal window if clicked on x
    modalClose.addEventListener('click', function() {
      modal.style.display = 'none';
      navBar.style.display = 'block';
    });
    // close modal window if clicked outside of modal body or header
    modal.addEventListener('click', function(event) {
      if (event.target.className === 'payment-modal') {
        modal.style.display = 'none';
        navBar.style.display = 'block';
      }
    });

  }
}
