window.onload = function(){
    b1 = document.getElementById('button1');
    b2 = document.getElementById('button2');
    b3 = document.getElementById('button3');
    b1.onclick = function(){
        b1.remove();
        b2.remove();
        b3.remove();
    };
    b2.onclick = function(){
        b1.remove();
        b2.remove();
        b3.remove();
    };
    b3.onclick = function(){
        b1.remove();
        b2.remove();
        b3.remove();
    };
};
