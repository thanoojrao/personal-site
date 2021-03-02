
    window.addEventListener('DOMContentLoaded',()=>{
    let bubble = document.getElementById('stage');
    let h = window.innerHeight;
    let temp ='0px';
    bubble.style.top = temp;
    let vy = 0;
    let y=0;                    
    let g = 0.3;

    function updateBubble(){
        const domPos =bubble.offsetTop+bubble.offsetHeight;
        if(domPos >= window.pageYOffset+h){
               vy= -(4*vy)/5;
               y = vy + y;
               temp = String(y)+"px";
               bubble.style.top = temp;
        }
        else {
           vy=vy+g;
           y = vy + y;
           temp = String(y)+"px";
           bubble.style.top = temp;
        }
        
    }
    function animateParticles(){
        updateBubble();
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
    });
    






