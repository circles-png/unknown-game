/*window.onload = function(){
  var buttons = [
    document.getElementById('button1'),
    document.getElementById('button2'),
    document.getElementById('button3')
  ];

  var game = document.getElementById('game');
  buttons[0].onclick = start();
  buttons[1].onclick = start();
  buttons[2].onclick = start();
};

function start(players){
  buttons.remove();
  game.style.transition = "backgroundColor 3s"; // FIXME: open in browser to see error in dev tools
  game.style.backgroundColor = "white";
  switch (players) {
    case 2:
      // TODO: add stuff
      break;
    case 3:
      // TODO: add stuff
      break;
    case 4:
      // TODO: add stuff
      break;

    default:
      alert('We\'re sorry. It seems like an error has occurred. Please try again later.')
  }
}*/

$(document).ready(function($) {
  window.buttons = [
    $('#button1'),
    $('#button2'),
    $('#button3')
  ];
  $('#frame').css('display', 'none')
  $('#button1, #button2, #button3').click(function () {
    $("#buttonContainer").remove();
    $('#game').css('transition','backgroundColor 3s');
    $('#game').css('backgroundColor', 'white');
    $('#frame').css('display', 'block')
  });
});
