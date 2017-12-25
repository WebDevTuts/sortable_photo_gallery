var thumbnailSpacing = 15;

$(document).ready(function() {
  $('.gallery .sorting').css('margin-bottom', window.thumbnailSpacing+'px');
  $('.thumbnail_container a.thumbnail').addClass('showMe');

  positionThumbnails();
});

function positionThumbnails() {
  /* debug */
  $('.debug-remainder').html('');

  var containerWidth = $('.photos').width();
  var thumbnail_R = 0;
  var thumbnail_C = 0;
  var thumbnailWidth = $('a.thumbnail img:first-child').outerWidth() + window.thumbnailSpacing;
  var thumbnailHeight = $('a.thumbnail img:first-child').outerHeight() + window.thumbnailSpacing;
  var max_C = Math.floor(containerWidth / thumbnailWidth);
}
