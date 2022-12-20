
printPixels();

function printPixels(x=0,y=0){
    
    
    /*console.log(divsito);*/
    
    const canvas = document.querySelector('.conteinerCanvas');

    x = 64;
    y = 48;
    for (let pixels = 0; pixels < (x * y); pixels++){
        const divsito = document.createElement('div');
        canvas.appendChild(divsito);
        divsito.classList.add('divsito');
        divsito.style.width = (640/x)-2 + "px";
        divsito.style.height = (480/y)-2 + "px";
        console.log(pixels);
        
    };


}