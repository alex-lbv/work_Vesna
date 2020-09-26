let container = document.querySelector('body');
let main = document.querySelector('.mask');
let close = document.querySelector('.hamburger--close');

function toggleSidebar() {
  isShowingSidebar() ? hideSidebar() : showSidebar();
}

function showSidebar() {
  container.classList.add('show-sidebar');
}

function hideSidebar() {
  container.classList.remove('show-sidebar');
}

function isShowingSidebar() {
  return container.classList.contains('show-sidebar');
}

document.querySelector('.hamburger').addEventListener('click', toggleSidebar, false);
document.querySelector('.hamburger--close').addEventListener('click', toggleSidebar, false);

container.addEventListener('click', function (e) {
  if (isShowingSidebar() && main.contains(e.target)) {
    e.preventDefault();
    hideSidebar();
  }
}, true);