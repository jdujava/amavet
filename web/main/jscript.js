$(document).ready(function(){
	var current_page = $('title').text();
	var item_offset;
	var offset;
	var element_pos;
	var i = 0;
	var t = 1;
	var margin_left = 0;
	var doc_height = $(document).height();
	$('#knife').addClass('element-animation');
	$('#fork').addClass('element-animation');
	$('.horizontal').animate({'width': '450px'}, 1500);
	$('.slider_text p').css('opacity', '0');
	$('.slider_text p:eq(4)').css('opacity', '1');
	var sliding = setInterval(slider,6000);
	function slider(){
		if(i == 4)
		{
			$('.leader').css('margin-left', '0px');
			margin_left = -1000;
			$('.leader').animate({'margin-left': '' + margin_left + 'px'},2000);
			$('.slider_text p').animate({"opacity": "0"}, 300);
			$('.slider_text p:eq(1)').delay(500).animate({"opacity": "1"}, 2500);
			i=1;
			t=2;
		}
		else
		{
			margin_left -= 1000;
			$('.slider_text p').animate({"opacity": "0"}, 300);
			$('.slider_text p:eq(' + t + ')').delay(500).animate({"opacity": "1"}, 2500);
			$('.leader').animate({'margin-left': '' + margin_left + 'px'},2000);
			t +=1;
			i +=1;
		}
	}
});

/*$(window).on("scroll", function(){
		item_offset = $(window).scrollTop()-116;
		offset = $(window).scrollTop();
		element_pos = $('footer h3').offset().top;
		console.log(offset);
		if(item_offset > 0 && item_offset<817)
		{
			$('.menu1').css("background-size", "" + (120 - (item_offset/40.85)) + "%", + (120 - (item_offset/40.85)) + "%");
			$('.menu2').css("background-size", "" + (120 - (item_offset/40.85)) + "%", + (120 - (item_offset/40.85)) + "%");
		}
		if (offset + $(window).height() >= element_pos)
		{
			$('.hnedypasik').animate({"width": "180px"}, 700);
			var delay = 300;
			var progress = setInterval(cycle, delay);

			var index = 1;
			function cycle(){
				var dis = document.getElementById('' + index);
				$(dis).addClass('fade_in');
				index ++;

				if(index>5){
					clearInterval(progress);
				}
			};
		}
	});*/
