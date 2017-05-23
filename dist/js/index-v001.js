//$.getScript('https://codepen.io/koenigsegg1/pen/evNYbR.js');

$('.menu-wrap').on('click', function() {
	$('nav ul').toggleClass('hidden');	
});
//
//var top;
//$(window).scroll(function() {
////	var top;
//	top = $('.main').offset().top;
//	
//
//	console.log(top);
//
//});
//
//
//	$('.landing .btn').click(function () {
//    $('html, body').animate({
//      scrollTop: top
//    }, 300);
//  });
//



$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  // var scrolled = $('.border').scrollTop();
  // $('.main *').css('transform','translateY(' + (scrolled*(-0.12)) + 'px)');
	
	// $('.main:before').css('height', (scrolled*(-0.15)) + 'px');
	// $('.style').html('<style>.do::before{height:' + scrolled*(.2) + 'px;}</style>');
	
	// body.md or lger
	$('.parallax .plx').each( function () {
  var z = parseInt($(this).data("z"));
  $(this).css('transform','translateY(' + (scrolled * (z * (-.01))) + 'px)')
});
}

$(window).on("load resize",function(){
  if ($(window).width() >= 700) {
		$('body').addClass('parallax');
		$('.plx').removeClass('no-plx');
	  parallax();
	} else {
		$('body').removeClass('parallax');
		$('.plx').addClass('no-plx');
	}
});


// $('.playEpisode').on('click', function() {
// 	$('.plyr--setup').on('canplay', function() {
// 		console.log($('.plyr--setup source:last-child').attr('src'));
// 	});
// })



