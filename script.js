
let x=0;
let y=0;

x = 64;
y = 48;
printPixels(x,y);
animations();



function rotateKnob(e2,e,rotationNow){

    console.log("click out" + e2.clientX);
    if ((x<e2.clientX) && (rotationNow<=30)){                
        e.target.style.transform = "rotate(" + (rotationNow + 15) + "deg)";
        rotationNow+=15;                
    }   
    if ((x>e2.clientX) /*&& (rotationNow>=330)*/){                                
        e.target.style.transform = "rotate(" + (rotationNow - 15) + "deg)";
        rotationNow-=15;                        
    }   
    return rotationNow;

}


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
    

    //animation for ShakeIt button
    shakeIt.addEventListener('mouseover', () => {
        shakeIt.classList.add('animationExpandHover');        
    
    });
    shakeIt.addEventListener('mouseout', () => {
        shakeIt.classList.remove('animationExpandHover');
    
    });
    
    //animation for knobs

    const resolutionKnob =  document.querySelector('.knobResolution');
    
    
    console.log(resolutionKnob);
    let rotationNow=0;    

    resolutionKnob.addEventListener('mousedown', (e) =>{
        x = e.clientX;
        console.log("click on " + e.clientX);
        
        outKnob = document.querySelector('body');
        //console.log(bodyKnob);
        
        outKnob.addEventListener('mouseup',(e2) => {
            rotationNow = rotateKnob(e2,e,rotationNow);           
        });

        outKnob.removeEventListener('mouseup',(e2) => {
            rotationNow = rotateKnob(e2,e,rotationNow);           
        });
    });

    resolutionKnob.removeEventListener('mousedown', (e) =>{
        x = e.clientX;
        console.log("click on " + e.clientX);
        
        outKnob = document.querySelector('body');
        //console.log(bodyKnob);
        
        outKnob.addEventListener('mouseup',(e2) => {
            rotationNow = rotateKnob(e2,e,rotationNow);           
        });

        outKnob.removeEventListener('mouseup',(e2) => {
            rotationNow = rotateKnob(e2,e,rotationNow);           
        });
    });
}
