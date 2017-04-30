let navBar = document.getElementById('sticky-nav');
let btns = document.getElementsByTagName('button');

for (let i = 0; i < btns.length; i++) {

  //modal for info
  if(btns[i].id.includes('info')) {
    let name = btns[i].name
    let modal = document.getElementById(name + '-info-modal');
    let modalClose = document.getElementById(name + '-info-btn-close');
    let modalBodyDiv = document.getElementById(name + '-modal-body-div')

    //  open information modal
    btns[i].addEventListener('click', function(){
      modal.style.display = 'block';
      navBar.style.display = 'none';
      modalBodyDiv.style.height = 872 + 5;
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

}
