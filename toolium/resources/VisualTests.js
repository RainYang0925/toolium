function launchModal(src) {
  var image = document.getElementById('modal-image');
  image.setAttribute('src', src);
  var modal = document.getElementById('modal');
  var currentClass = modal.getAttribute('class');
  modal.setAttribute('class', currentClass + ' show');
}
function closeModal() {
  var modal = document.getElementById('modal');
  modal.className = 'tc-modal';
}
