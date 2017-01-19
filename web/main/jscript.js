$(document).ready(function(){
  var win_offset;
  var this_offset;
  var win_height = $(window).height();
  var i = 1;
  setTimeout(function() {
    $('.page_1 .scroll_trigger').addClass('smooth');
  },1000);
  $('.page_1 .right_sheet').animate({height: '80px'}, 1000);
  $('.page_1 h1').addClass('comin_in_hot');
  $('.page_1 p').addClass('comin_in_hot');
  $('nav a').hover(function() {
		var ppos = $(this).offset();
		$('.a_border').css("left",ppos.left);
  	$('.a_border').toggleClass('nav_hover');
  }, function() {
		$('.a_border').toggleClass('nav_hover');
  });

  $(window).on('scroll', function() {
      this_offset = $('.scroll_trigger').eq(i).offset().top;
      win_offset = $(window).scrollTop() + win_height;
      if(win_offset-250>this_offset){
        setTimeout(function(integer) {
          $('.scroll_trigger').eq(integer).addClass('smooth');
        }.bind(null, i), 1000);
        $('.right_sheet').eq(i).animate({height: '80px'}, 1000);
        $('.page_'+ (i+1)+ ' h1').addClass('comin_in_hot');
        $('.page_'+ (i+1)+ ' p').addClass('comin_in_hot');
        i++;
      }
  });
});
