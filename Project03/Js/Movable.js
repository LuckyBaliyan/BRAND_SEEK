var cursor = document.querySelector(".cursor");

function CursorMove(){
  window.addEventListener("mousemove",function(e){
        cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
  })
}

CursorMove();

/*function skew(){
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove",(e)=>{
        var xdiff= e.clientX - xprev;
        var ydiff= e.clientY - yprev;

        xprev=e.clientX;
        yprev=e.clientY;

        //clamp is used to fix the output loctaion value in fixed range given so that our cursor will
        //not goes bigger..

        xscale=gsap.utils.clamp(.8,1.2,xdiff);
        yscale=gsap.utils.clamp(.8,1.2,ydiff);

        CursorMove(xscale.yscale);

    })
}*/


var pic=document.querySelector(".img-container");
var img=document.querySelector(".img-container img");
var container=document.querySelector(".main");



function adjustCrad(e){
    const containerRect=container.getBoundingClientRect();
    const cardRect=pic.getBoundingClientRect();

    const center=containerRect.top+containerRect.height/2;

    const cardCenter=cardRect.top+cardRect.height/2;

    const centerdiff=center-cardCenter;

    let rotateY=0;
    let rotateX=0;

    if(e){
        const mouseX=e.clientX;
        const mouseY=e.clientX;

        const cardCenterX= cardRect.left + cardRect.width/2;
        const cardCenterY= cardRect.top + cardRect.height/2;

        const deltaX= mouseX - cardCenterX;
        const deltaY= mouseY - cardCenterY;

        rotateX=gsap.utils.clamp(-20,20,deltaX*0.3);
        rotateY=gsap.utils.clamp(-20,20,deltaY*0.3);
    }

    //pic.style.transform=`translate(${translateX}px,${translateY}px)`;

    pic.style.transform=`perspective(400px) rotateX(${rotateX}deg) rotateY(${-rotateY}deg)`;
}

adjustCrad(null);

pic.addEventListener('mouseover',adjustCrad);

pic.addEventListener('mouseout',()=>{
    adjustCrad(null);
})


