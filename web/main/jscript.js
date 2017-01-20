$(document).ready(function(){
  var win_offset;
  var this_offset;
  var win_height = $(window).height();

  $('nav a').hover(function() {
		var ppos = $(this).offset();
		$('.a_border').css("left",ppos.left);
  	$('.a_border').toggleClass('nav_hover');
  }, function() {
		$('.a_border').toggleClass('nav_hover');
  });

  $(window).on('scroll', function() {
    win_offset = $(window).scrollTop() + win_height;
    //pre kazdu sekciu kontrolujem, ci je scrollnuta
    $('.page').each(function(i){
      var this_offset = $('.scroll_trigger').eq(i).offset().top;
      if(win_offset-250>this_offset){
        //ak je, popridavam classy
        setTimeout(function() {
          $('.scroll_trigger').eq(i).addClass('smooth');
        }, 1000);
        //teraz pridavam classu celej sekcii, nie osobitne
        $('.page').eq(i).addClass('comin_in_hot');
      }else {
        //ak nie, odoberiem classy
        setTimeout(function() {
          $('.scroll_trigger').eq(i).removeClass('smooth');
        }, 1000);
        $('.page').eq(i).removeClass('comin_in_hot');
      }
    });
  });
});
