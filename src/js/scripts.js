//= components/swiper.js
//= components/menu.js
//= components/count-snippet.js


let menuItem = $('body').find('.header__catalog-item');
$(menuItem).hover(function () {
  $(this).addClass('active').siblings().removeClass('active');
});

// let btnSeeAll = $('.filter__btn-see-all');
// $(btnSeeAll).on('click', function () {
//   $('.catalog__filter-list').toggleClass('hidden')
// });