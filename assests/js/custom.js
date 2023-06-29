
$(document).ready(function(){
    $('.loader').addClass('loader-overlay--initial');
});

// Toggle menu

changePickupStoreMenu();

function changePickupStoreMenu(){
 
    var body = $('body'),
        mask = $('<div class="mask"></div>'),
        toggleSlideRight = document.querySelector( ".toggle-slide-right" ),
        slideMenuRight = document.querySelector( ".slide-menu-right" ),
        activeNav = '';
    ;
    $('body').append(mask);
 
    /* slide menu right */
    toggleSlideRight.addEventListener( "click", function(){
        $('body').addClass("smr-open");
        $('.mask').fadeIn();
        activeNav = "smr-open";
    } );
 
    /* hide active menu if close menu button is clicked */
    $(document).on('click', ".close-menu", function(el,i){
        $('body').removeClass(activeNav);
        activeNav = "";
        $('.mask').fadeOut();
    });
 
}

// Add Section height as per device
$(document).ready(function(){
        if ($(window).width() > 991) {
            jQuery(window).on('load resize', function(){
                jQuery('.section-wrapper').height($(this).height());
            });
        };
 });


// Custom Multi-Modal
$('[open-modal]').on('click', function(){
    var id = $(this).attr('open-modal');
    $('.custom-modal#'+id).addClass('active');
  });
  
  $('[close-modal]').on('click', function(){
    $(this).parents('.custom-modal').removeClass('active');
  });
  
  $('.custom-modal').on('click', function(e) {
    if(e.target !== this){return};
    $(this).removeClass('active');
  });

// Dropdown Menu Open
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})
Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};
// Dropdown Menu Close
