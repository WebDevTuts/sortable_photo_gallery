var thumbnailSpacing = 15;

$(document).ready(function() {
  $('.gallery .sorting').css('margin-bottom', window.thumbnailSpacing+'px');
  $('.thumbnail_container a.thumbnail').addClass('showMe');

  positionThumbnails();
});

function positionThumbnails() {
  alert('ready to reposition');
}
