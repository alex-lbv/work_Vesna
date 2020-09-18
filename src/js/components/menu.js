let container = document.querySelector('body');
let main = document.querySelector('.mask');

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

container.addEventListener('click', function (e) {
  if (isShowingSidebar() && main.contains(e.target)) {
    e.preventDefault();
    hideSidebar();
  }
}, true);