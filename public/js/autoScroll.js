var scrollY=0;
var distance=10;
function autoScrollTo(el){
 var currentY=window.pageYOffset;
 var targetY = document.getElementById(el).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHeight;
  var animator = setTimeout('autoScrollTo(\'' + el + '\')', 2);
  if (yPos > bodyHeight) {
    clearTimeout(animator);
  } else {
    if (currentY < targetY - distance) {
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    }
    else if (currentY > targetY ) {
      scrollY = currentY - distance;
      window.scroll(0, scrollY);
    }
     else if(currentY-10<targetY<currentY+10) {
      clearTimeout(animator);
    }
  }
}


