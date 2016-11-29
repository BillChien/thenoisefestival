$('document').ready(function(){

  console.log('in js');

  var mediaMap = { 'a':'sounds/Weird Bird.wav', 'b':'sounds/Blender.wav', 'c':'sounds/Car.wav','d':'sounds/Dog.wav', 'e':'sounds/Data1.mp3',
  'space':'sounds/Bell.mp3','f':'sounds/machine.mp3', 'g':'sounds/Crow.wav', 'h': 'sounds/Saw.mp3','i':'sounds/drum.mp3', 'j':'sounds/Scream2.mp3',
  'k':'sounds/Bad Radio.wav','l':'sounds/Sew.mp3', 'm': 'sounds/Scream.wav', 'n': 'sounds/Data1.mp3','o':'sounds/Car.wav', 'p':'sounds/Weird Bird.wav',
  'q':'sounds/hit.mp3','r':'sounds/Data2.mp3','s':'sounds/Blender.wav','t':'sounds/Sew.mp3', 'u': 'sounds/u.mp3','v':'sounds/Data2.mp3',
  'w':'sounds/Wow.mp3','x':'sounds/Weird Bird.wav','y':'sounds/Bad Radio.wav','z':'sounds/drum.mp3'};

  var keyMap   = {  32:'space', 97:'a',98:'b',99:'c',100:'d',101:'e',102:'f', 103:'g',
  104:'h',105:'i',106:'j',107:'k', 108:'l', 109:'m',110:'n',111:'o', 112:'p', 113:'q',
  114:'r',115:'s', 116:'t', 117:'u', 118:'v',119:'w', 120:'x',121:'y',122:'z',};

  $(document).keypress(function(key){
    var keyNum = key.keyCode;
    console.log(keyNum + '  ' + keyMap[keyNum]);
    playSound(keyNum);
  });

  function playSound (key){
    //alert('in playsound '+key);
    var letter = keyMap[key];
    var link = mediaMap[letter]
    var audio = new Audio(link);
    audio.play()
  }

  $('div').on(
      "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
      function() {
          $(this).removeClass("active");
      }
  );


    $(document).on('keypress',function(a){
      if(a.which==97){
        el = $('.Bird');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==98){
        el = $('.Saw');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==99){
        el = $('.Car');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==100){
        el = $('.Dog');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==101){
        el = $('.Data1');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==102){
        el = $('.Machine');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==103){
        el = $('.Crow');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==104){
        el = $('.Saw');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==105){
        el = $('.Drum');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==106){
        el = $('.scream2');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==107){
        el = $('.BadRadio');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==108){
        el = $('.Sew');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==109){
        el = $('.scream');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
           el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==110){
        el = $('.Data1');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==111){
        el = $('.Car');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==112){
        el = $('.Bird');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==113){
        el = $('.Hit');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==114){
        el = $('.Data2');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==115){
        el = $('.Saw');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==116){
        el = $('.Sew');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==117){
        el = $('.u');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==118){
        el = $('.Data2');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==119){
        el = $('.Wow');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==120){
        el = $('.Bird');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==121){
        el = $('.BadRadio');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==122){
        el = $('.Drum');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();
      }
      if(a.which==32){
        el = $('.Bell');
        el.addClass('active');
        el.one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
        function (e) {
         el.removeClass('active');
       });
       $('.content').fadeOut();
       $('.message').fadeOut();


      }
    });



  $('#flex_container').mouseenter(function(){
        $('.content').fadeOut()});

  $('.activator').mouseenter(function(){
        $('.content').fadeIn()});

  $('.activator').mouseleave(function(){
        $('.content').fadeOut()});


  var image1 = 'images/phone.png';
  var image2 = 'images/down.png';

  $('.phone').click(function(){
    $('.second_container .video').slideToggle({
        direction: "up"}, 300);
    $(this).prop('src', function (index,currentSource) {return currentSource == image2 ? image1 : image2;});

  });




});
