window.onload = function(){
    b1 = document.getElementById('button1');
    b2 = document.getElementById('button2');
    b3 = document.getElementById('button3');
    game = document.getElementById('game');
    function start(){
        b1.remove();
        b2.remove();
        b3.remove();
        game.style.transition = backgroundColor 3s;
        game.style.backgroundColor = white;      
    }
    b1.onclick = start();
    b2.onclick = start();
    b3.onclick = start();  
};
