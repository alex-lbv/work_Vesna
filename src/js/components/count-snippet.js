$(document).ready(function(){
  $('.count').prop('disabled', true);
  $(document).on('click','.card-checkout__count-plus',function(){
    $('.count').val(parseInt($('.count__val').val()) + 1 );
  });
  $(document).on('click','.card-checkout__count-minus',function(){
    $('.count').val(parseInt($('.count__val').val()) - 1 );
    if ($('.count').val() == 0) {
      $('.count').val(1);
    }
  });
});