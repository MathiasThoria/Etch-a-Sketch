
let x=0;
let y=0;

x = 64;
y = 48;
printPixels(x,y);
animations();
function printPixels(x=0,y=0){
    
    
    /*console.log(divsito);*/
    
    const canvas = document.querySelector('.conteinerCanvas');

   
    for (let pixels = 0; pixels < (x * y); pixels++){
        const divsito = document.createElement('div');
        canvas.appendChild(divsito);
        divsito.classList.add('divsito');
        divsito.style.width = (640/x) + "px";
        divsito.style.height = (480/y) + "px";
        divsito.addEventListener('mouseover',(e) =>
         divsito.style.backgroundColor="grey");
        /*console.log(pixels);*/
        
    };


}
function animations(){
    const shakeIt = document.querySelector('.shakeIt');
    console.log(shakeIt);
    shakeIt.addEventListener('mouseover', () => {
        shakeIt.classList.add('animationExpandHover');        
        console.log(shakeIt);
    });
    shakeIt.addEventListener('mouseout', () => {
        shakeIt.classList.remove('animationExpandHover');
        console.log(shakeIt);
    });
    
}