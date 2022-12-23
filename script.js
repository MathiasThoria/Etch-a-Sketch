
printPixels(64,48,"black");
events();

function printPixels(x,y,colorMode){
    let opacity=0;
    
    /*console.log(divsito);*/
    
    const canvas = document.querySelector('.conteinerCanvas');

   
    for (let pixels = 0; pixels < (x * y); pixels++){
        const divsito = document.createElement('div');
        canvas.appendChild(divsito);
        divsito.classList.add('divsito');
        divsito.style.width = (640/x) + "px";
        divsito.style.height = (480/y) + "px";
        divsito.addEventListener('mouseover',(e) =>{
            switch (colorMode){
                case "black":
                    divsito.style.backgroundColor="black";
                break;
                case "rainbow":
                    divsito.style.backgroundColor= "rgba(" + Math.floor(Math.random() * 250) + 
                    "," + Math.floor(Math.random() * 250) + "," + Math.floor(Math.random() * 250)
                    + ")";
                    /*console.log("rgba(" + Math.floor(Math.random() * 250) + 
                    "," + Math.floor(Math.random() * 250) + "," + Math.floor(Math.random() * 250)
                    + ")");*/
                break;
                case "crescentBlack":
                    divsito.style.backgroundColor="rgba(0,0,0," + opacity + ")";
                    opacity+=0.01;
                    
                break;
                case "white":
                    divsito.style.backgroundColor="white";
                break;
            };     
            
        });
        /*console.log(pixels);*/
        
    };
};

function resetCanvas(x,y,colorMode){
    const ConteinerCanvas = document.querySelector('.conteinerCanvas');
    
    while (ConteinerCanvas.hasChildNodes()) {
        ConteinerCanvas.removeChild(ConteinerCanvas.firstChild);
    };
    console.log("reseteando con " + x); 
    printPixels(x,y,colorMode);
};


function events(){

    const X=[16,32,64,128,256];
    const Y=[12,24,48,96,192];
    const COLORMODE=["rainbow","crescentBlack","black","white"];

    const shakeIt = document.querySelector('.shakeIt');
    subX=2;
    subY=2;
    subColor=2;
    //events for ShakeIt button
    shakeIt.addEventListener('mouseover', () => {
        shakeIt.classList.add('animationExpandHover');                    
    });
    shakeIt.addEventListener('mouseout', () => {
        shakeIt.classList.remove('animationExpandHover');
    });
    shakeIt.addEventListener('mousedown',(ev)=>resetCanvas(X[subX],Y[subY],COLORMODE[subColor]));
    
    //events for knobs

    const resolutionKnob =  document.querySelector('.knobResolution');        
    console.log(resolutionKnob);
    let rotationNowRes=0;    
    resolutionKnob.addEventListener('mousedown', (e) =>{
      
        console.log("click on " + e.clientX);
        
        outKnob = document.querySelector('body');
        //console.log(bodyKnob);
       

        outKnob.addEventListener('mouseup',(e2)=>{
            console.log("click out" + e2.clientX);
            if ((e.clientX<e2.clientX) && (rotationNowRes<=15)){                
                e.target.style.transform = "rotate(" + (rotationNowRes + 15) + "deg)";
                rotationNowRes+=15;                
                subX++;
                subY++;                
            };   
            if ((e.clientX>e2.clientX) && (rotationNowRes>=-15)){                                
                e.target.style.transform = "rotate(" + (rotationNowRes - 15) + "deg)";
                rotationNowRes-=15;                        
                subX--;
                subY--;
            };  
            console.log("rotationnow:" + rotationNowRes);
            console.log("llamando con " + X[subX]);
            resetCanvas(X[subX],Y[subY],COLORMODE[subColor]);
        }, { once: true });
                
    
    });
    const colorKnob =  document.querySelector('.knobColorMode');        
    console.log(colorKnob);
    let rotationNowCol =0;
    colorKnob.addEventListener('mousedown', (ec) =>{
      
        console.log("click on " + ec.clientX);
        outKnob = document.querySelector('body');     
        //console.log(bodyKnob);
       
        outKnob.addEventListener('mouseup',(ec2)=>{
            console.log("click out" + ec2.clientX);
            if ((ec.clientX<ec2.clientX) && (rotationNowRes<=0)){                
                ec.target.style.transform = "rotate(" + (rotationNowCol + 15) + "deg)";
                rotationNowCol+=15;                
                subColor++;                
            };   
            if ((ec.clientX>ec2.clientX) && (rotationNowRes>=-15)){                                
                ec.target.style.transform = "rotate(" + (rotationNowCol - 15) + "deg)";
                rotationNowCol-=15;                        
                subColor--;
                
            };  
            console.log("rotationnow:" + rotationNowCol);
            //console.log("llamando con " + X[subX]);
            resetCanvas(X[subX],Y[subY],COLORMODE[subColor]);
            


        }, { once: true });
                
    
    });
    


};
