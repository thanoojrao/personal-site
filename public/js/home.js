window.addEventListener('DOMContentLoaded',(event)=>{
   let nav = document.querySelector('.nav');
   let toggleCollapse = document.getElementById('toggle-collapse');
   let navItems = document.getElementsByClassName('nav-items');

   function toggleNav(){
       navItems[0].classList.toggle('display');
       nav.classList.toggle('collapse');
       nav.classList.forEach(element => {
           if(element == 'collapse'){
            window.addEventListener('click',(event)=>{
                mouseY = event.clientY;
                navHeight = 480;
                console.log(mouseY);
                if(mouseY>navHeight){
                    navItems[0].classList.toggle('display');
                    nav.classList.toggle('collapse');
                }
            });
           }
       });
   }
   toggleCollapse.addEventListener('click',toggleNav);
 
   let bannerButton = document.getElementsByClassName('bannerButton')[0];
   bannerButton.addEventListener('click',(event)=>{
    autoScrollTo('skills');
   });
   
});