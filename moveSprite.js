$(document).ready(function() {
  $(document).on('keydown', function() {
    moveSprite(event.keyCode);
  });
});

function moveSprite(direction) {
  var posTop = parseInt($('#sprite').css('top').trimRight(2));
  var posLeft = parseInt($('#sprite').css('left').trimRight(2));
  var up = (posTop - 20) + "px";
  var down = (posTop + 20) + "px";
  var left = (posLeft - 20) + "px";
  var right = (posLeft + 20) + "px";
  switch (direction) {
    case 87:
      $('#sprite').css({top: up});
      break;
    case 83:
      $('#sprite').css({top: down});
      break;
    case 65:
      $('#sprite').css({left: left});
      break;
    case 68:
      $('#sprite').css({left: right});
      break;
    default:
      break;
  }
}
