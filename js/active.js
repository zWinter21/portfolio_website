$('.nav-link').on('click', function() {
  $('.nav-link').parent().removeClass('active');
  $(this).parent().addClass('active');

  setTimeout(function() {
    $('.nav-link').parent().removeClass('active');
  }, 1000);
});
