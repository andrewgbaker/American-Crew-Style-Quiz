$(document).ready(function() {
	$.fn.fullpage({
        verticalCentered: true,
        resize : false,
        anchors:['firstSlide', 'secondSlide'],
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        menu: false,
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
		css3: true
	});
	
	$(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event, delta) {
		if ($('#section1').hasClass('look_down')) {
			$('#section1').toggleClass('look_down');
			$('header').toggleClass('header_up');
			setTimeout(function() {
				$('.expand div').toggleClass('open');
				$('.looks_logo').toggleClass('hidden');
			}, 500);
		}
		return false;
	});
	
	$('html').on({ 'touchmove' : function(){
		if ($('#section1').hasClass('look_down')) {
			$('#section1').toggleClass('look_down');
			$('header').toggleClass('header_up');
		}
		$('html').unbind('touchmove');
		return false;
		}
	});
	
	$('.expand').on( "click", function() {
		$('#section1').toggleClass('look_down');
		$('header').toggleClass('header_up');
		setTimeout(function() {
				$('.expand div').toggleClass('open');
				$('.looks_logo').toggleClass('hidden');
		}, 500);
	});
});