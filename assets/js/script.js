$('document').ready(function(){
  $('#flex_container').mouseenter(
    function(){
    $('.content').fadeOut()}
  )
  $('.noise').mouseenter(
    function(){
    $('.content').fadeIn()}
  )
  $('.content').mouseleave(
    function(){
    $('.content').fadeOut()}
  )

  var image1 = 'images/phone.png';
  var image2 = 'images/down.png';

  $('.phone').click(function(){
    $('.second_container .video').slideToggle({
      direction: "up"}, 300);
    $(this).prop('src', function (index, currentSource) {
          return currentSource == image2 ? image1 : image2;
    });
  })


















});
