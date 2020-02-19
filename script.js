window.onload = function(){
  b1 = document.getElementById('button1');
  b2 = document.getElementById('button2');
  b3 = document.getElementById('button3');
  game = document.getElementById('game');
  b1.onclick = start();
  b2.onclick = start();
  b3.onclick = start();  
};

function start(players){
  b1.remove();
  b2.remove();
  b3.remove();
  game.style.transition = backgroundColor 3s;
  game.style.backgroundColor = white;
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
}
