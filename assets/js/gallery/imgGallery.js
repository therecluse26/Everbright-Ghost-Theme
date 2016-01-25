$(document).ready(function($) {
$('.imgGallery').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
    }
  // other options
});

$("body").on("contextmenu", "img", function(e) {
  return false;
});
	
});
