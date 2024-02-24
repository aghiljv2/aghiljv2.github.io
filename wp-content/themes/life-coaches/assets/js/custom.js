(function($) {



  $("#hamburger-menu").click(function(event) {
    event.stopPropagation();
    $(".header-navigation").addClass("open");

  });

    $(".close-menu").click(function(event) {
    event.stopPropagation();
    $(".header-navigation").removeClass("open");

  });

  $("#hamburger-menu").keypress(function(e) {
    var key = e.which;
    if (key == 13) // the enter key code
    {
      $(".header-navigation").addClass("open");
    }
  });

  $(".close-menu").keypress(function(e) {
    var key = e.which;
    if (key == 13) // the enter key code
    {
      $(".header-navigation").removeClass("open");
    }
  });


AOS.init({
  once: true,
  duration: 700,
});


})(jQuery);

if (jQuery(window).width() < 991){
  const  life_coaches_focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const life_coaches_modal = document.querySelector('nav#site-navigation'); 

const life_coaches_firstFocusableElement = life_coaches_modal.querySelectorAll(life_coaches_focusableElements)[0]; 
const life_coaches_focusableContent = life_coaches_modal.querySelectorAll(life_coaches_focusableElements);
const life_coaches_lastFocusableElement = life_coaches_focusableContent[life_coaches_focusableContent.length - 1];


document.addEventListener('keydown', function(e) {
let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

if (!isTabPressed) {
  return;
}

if (e.shiftKey) { // if shift key pressed for shift + tab combination
  if (document.activeElement === life_coaches_firstFocusableElement) {
    life_coaches_lastFocusableElement.focus(); // add focus for the last focusable element
    e.preventDefault();
  }
} else { // if tab key is pressed
  if (document.activeElement === life_coaches_lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
    life_coaches_firstFocusableElement.focus(); // add focus for the first focusable element
    e.preventDefault();
  }
}
});

life_coaches_firstFocusableElement.focus();}

