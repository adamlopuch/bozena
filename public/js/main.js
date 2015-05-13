$(function() {

  $('#btn-sign-it').click(function() {
    $('html, body')
    .animate({ scrollTop: $('#sign').offset().top }, 1500);

    return false;
  });

  $('#btn-esign').click(function() {
    $('#esign_modal').modal();

    return false;
  });

  $('#esign-link').click(function() {
    $('#esign_modal').modal();

    return false;
  });

});
