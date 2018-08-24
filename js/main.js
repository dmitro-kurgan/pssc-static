// -------------FIXED-AND-MOBILE-HEADER---------------------
$(document).on('ready', function() {
    $(window).on('resize', function() {
		if(document.documentElement.clientWidth >= 768) {
		  	$(window).scroll(function(){
		  		if ($(this).scrollTop()> 0) {
		  			$('.header').addClass('fixed');
		  			$(".header-top__left").addClass('scroll');
		  			$('.header-top__menu').addClass('scroll');
		  			$('.header-top__menu .header-top__menu-list').addClass('scroll');
		  			$('.header-top__menu .header-top__menu-list a').addClass('scroll');
					$('.header-top__right').addClass('scroll');
					$('.header__language').addClass('scroll')
					$('.header-bottom__left').appendTo('.header-top__left').addClass('scroll');
					$('.header-bottom__left p').addClass('scroll');	
					$('.header-logo').addClass('scroll');	
					$('.header-logo__name').addClass('scroll');	
					$('.header-logo__text').addClass('scroll');	
					$('.header-bottom__center').appendTo('.header-top__left').addClass('scroll');
					$('.header-bottom__center p').hide(0);	
					$('.header-bottom__right').appendTo('.header-top__right').addClass('scroll');											
					$('.header-bottom__right-tel').addClass('scroll');					
					$('.header-bottom__right a').addClass('scroll');
					$('.header-bottom__right button').addClass('scroll');					
					$('.menu-item-has-children').addClass('scroll');
					$('.menu-item-has-children a').addClass('scroll');
					$('.menu-item-has-children .sub-menu').addClass('scroll');
					$('.menu-item-has-children .sub-menu li a').addClass('scroll');
		  		} else {
		  			$('.header').removeClass('fixed');
		  			$('.header-top__left').removeClass('scroll');
		  			$('.header-top__menu').removeClass('scroll');
		  			$('.header-top__menu .header-top__menu-list').removeClass('scroll');
		  			$('.header-top__menu .header-top__menu-list a').removeClass('scroll');
		  			$('.header-top__right').removeClass('scroll');
		  			$('.header__language').removeClass('scroll');
		  			$('.header-bottom__left').appendTo('.header-bottom').removeClass('scroll');
		  			$('.header-logo').removeClass('scroll');
		  			$('.header-logo__name').removeClass('scroll');
		  			$('.header-logo__text').removeClass('scroll');	
		  			$('.header-bottom__center').appendTo('.header-bottom').removeClass('scroll');
		  			$('.header-bottom__center p').show(0);
		  			$('.header-bottom__right').appendTo('.header-bottom').removeClass('scroll');
		  			$('.header-bottom__right-tel').removeClass('scroll');
		  			$('.header-bottom__right a').removeClass('scroll');	
		  			$('.header-bottom__right button').removeClass('scroll');
					$('.menu-item-has-children').removeClass('scroll');
					$('.menu-item-has-children a').removeClass('scroll');
					$('.menu-item-has-children .sub-menu').removeClass('scroll');
					$('.menu-item-has-children .sub-menu li a').removeClass('scroll');
		  		};
			});
		}
		if(document.documentElement.clientWidth <= 767) {
			$('.header-top__menu .header-top__menu-list').appendTo(".navbar-nav");
				$('.header-top__right').appendTo(".header-mob-center");
				$('.header-bottom__left').appendTo(".header-top__left");
				$('.header-bottom__right').appendTo(".navbar-collapse__bottom .container");
				$('.header-logo__text').appendTo(".header-top");
				$("#myNavbar").on('show.bs.collapse', function () {
					$('.header').addClass('mobile');
				});
				$("#myNavbar").on('hidden.bs.collapse', function () {
					$('.header').removeClass('mobile');
				});
				$(window).scroll(function(){
			  		$('.header').removeClass('fixed');
				});
			$(window).scroll(function(){
		  		if ($(this).scrollTop()> 0) {
					$('.header').removeClass('fixed');
		  			$('.header-top__left').removeClass('scroll');
		  			$('.header-top__menu, .header-top__menu .header-top__menu-list, .header-top__menu .header-top__menu-list a').removeClass('scroll');
		  			$('.header-top__right').removeClass('scroll');
		  			$('.header__language').removeClass('scroll')
		  			$('.header-bottom__left').removeClass('scroll');
		  			$('.header-logo__text').removeClass('scroll');	
		  			$('.header-bottom__right').removeClass('scroll');	
		  			$('.header-bottom__right button').removeClass('scroll');
		  			$('.header-bottom__right').appendTo(".navbar-collapse__bottom .container");	
				}
				else {
					$('.header-bottom__right').appendTo(".navbar-collapse__bottom .container");	
					$('.header-bottom__left').appendTo(".header-top__left");
				}
			});
		}
		else {
			$('.header-top__menu .header-top__menu-list').appendTo(".header-top .header-top__menu");
			$('.header-top__right').appendTo(".header-top");
			$('.header-bottom__left').appendTo(".header-bottom");
			$('.header-logo__text').appendTo(".header-bottom__left");
			$('.header-bottom__right').appendTo(".header-bottom");
			$('.header').removeClass('mobile');
		}
	}).trigger('resize');	
});
$(document).on('ready', function() {
    $(window).on('resize', function() {		
		if(document.documentElement.clientWidth <= 991) {
			$('.header__language li:first-child a').text("Укр");		
			$('.header__language li:nth-child(2) a').text("Рус");		
			$('.header__language li:last-child a').text("Eng");	
		}
		else {
			$('.header__language li:first-child a').text("Українська");		
			$('.header__language li:nth-child(2) a').text("Русский");		
			$('.header__language li:last-child a').text("English");	
		};
	}).trigger('resize');	
});
// -------------BACK-TO-TOP---------------
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 768) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');
});
// ----------SLIDER----------
$('.slider-for').each(function(key, item) {
	var sliderIdName = 'slider' + key;
	var sliderNavIdName = 'sliderNav' + key;
	this.id = sliderIdName;
	$('.slider-nav')[key].id = sliderNavIdName;
	var sliderId = '#' + sliderIdName;
	var sliderNavId = '#' + sliderNavIdName;
	$(sliderId).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: sliderNavId
	});
	$(sliderNavId).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: sliderId,
		focusOnSelect: true
	});
});