const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

//constructor function for particles

function Particle(x,y,directionX,directionY,size,color){
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}

Particle.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    ctx.fillStyle = this.color;
    ctx.fill();
}

// update method of the particle
Particle.prototype.update = function(){
    if(this.x+this.size >= canvas.width || this.x-this.size<=0){
        this.directionX = -this.directionX;
    }
    if(this.y+this.size >= canvas.height || this.y-this.size<=0){
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
}

//create array of particles

function initParticles(){
    particleArray = [];
    for (let i = 0; i < 80; i++) {
        let size = Math.random()*5;
        let positionX = Math.random()*(innerWidth-size*2);
        let positionY = Math.random()*(innerHeight-size*2);
        let directionX = (Math.random()* (.8))-(.4);
        let directionY = (Math.random()* (.8))-(.4);
        let color = 'white';
        
        particleArray.push(new Particle(positionX,positionY,directionX,directionY,size,color));
    } 
}

//animation loop

function animateParticles(){
    requestAnimationFrame(animateParticles);
    ctx.clearRect(0,0,innerWidth,innerHeight);

    for(let i=0;i<particleArray.length;i++){
        particleArray[i].update();
    }
}

initParticles();
animateParticles();