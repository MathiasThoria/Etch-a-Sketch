
printPixels(32,24);
events();

function printPixels(x,y){
    
    
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
};

function resetCanvas(x,y){
    const ConteinerCanvas = document.querySelector('.conteinerCanvas');
    
    while (ConteinerCanvas.hasChildNodes()) {
        ConteinerCanvas.removeChild(ConteinerCanvas.firstChild);
    };
    console.log("reseteando con " + x); 
    printPixels(x,y);
};


function events(){

    const X=[16,32,64,128,256];
    const Y=[12,24,48,96,192];

    const shakeIt = document.querySelector('.shakeIt');
    subX=2;
    subY=2;

    //events for ShakeIt button
    shakeIt.addEventListener('mouseover', () => {
        shakeIt.classList.add('animationExpandHover');            
        
    });
    shakeIt.addEventListener('mouseout', () => {
        shakeIt.classList.remove('animationExpandHover');
    });

    shakeIt.addEventListener('mousedown',(ev)=>resetCanvas(X[subX],Y[subY]));
    
    //events for knobs

    const resolutionKnob =  document.querySelector('.knobResolution');        
    console.log(resolutionKnob);
    let rotationNow=0;    
    resolutionKnob.addEventListener('mousedown', (e) =>{
        x = e.clientX;
        console.log("click on " + e.clientX);
        
        outKnob = document.querySelector('body');
        //console.log(bodyKnob);
       

        outKnob.addEventListener('mouseup',(e2)=>{
            console.log("click out" + e2.clientX);
            if ((x<e2.clientX) && (rotationNow<=15)){                
                e.target.style.transform = "rotate(" + (rotationNow + 15) + "deg)";
                rotationNow+=15;                
                subX++;
                subY++;                
            };   
            if ((x>e2.clientX) && (rotationNow>=-15)){                                
                e.target.style.transform = "rotate(" + (rotationNow - 15) + "deg)";
                rotationNow-=15;                        
                subX--;
                subY--;
            };  
            console.log("rotationnow:" + rotationNow);
            console.log("llamando con " + X[subX]);
            resetCanvas(X[subX],Y[subY]);


        }, { once: true });
        
    
    });

};
