let youtube = document.querySelectorAll('.youtube');

for (let i = 0; i < youtube.length; i++) {
  let source = 'https://img.youtube.com/vi/' + youtube[i].dataset.embed + '/hqdefault.jpg';
  let image = new Image();
  image.src = source;
  youtube[i].appendChild(image)

  youtube[i].addEventListener('click', function() {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.embed + '?rel=0&showinfo=0&autoplay=1');
    this.innerHTML = '';
    this.appendChild(iframe);
  });
}
