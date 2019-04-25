jQuery(document).ready(function($) {

	$('#menu-handler').on('click', function () {


		$(this).fadeOut(300, function() {
			$(this).toggleClass('icon-close').fadeIn(300);
		});

		$('nav').toggleClass('displayed');
	});

    $('.sub-menu-parent').on('click', function () {

        $('.sub-menu').toggleClass('displayed-submenu');
    });


});