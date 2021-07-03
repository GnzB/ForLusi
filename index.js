let lienzo = document.getElementById("lienzo");
let raton = {};

lienzo.addEventListener("click", (evt) => {
    raton = oMousePos(lienzo, evt);
    analisis();
});

let ctx = lienzo.getContext('2d');

let x1 = 200;
let x2 = 700;
let y1 = 280;
let y2 = 280;


function drawYoN(){

    
    ctx.fillStyle = "#f9cfd1";
    ctx.fillRect(0, 0, lienzo.width, lienzo.height);

    ctx.font="20px Cursive ";
    ctx.strokeStyle="#4B4B4B";
    ctx.lineWidth = 1;
    ctx.strokeText("¿Te gustaria seguir a mi lado para seguir viendo los glowups?",260,120);

    ctx.fillStyle = "#9de2f2"; //cuadro para el si
    ctx.fillRect(x1, y1, 150, 60);

    ctx.fillStyle = "#9de2f2"; // cuadro para el no
    ctx.fillRect(x2, y2, 150, 60);

    ctx.strokeStyle="#4B4B4B";
    ctx.strokeText("No",(x1 + 40), (y1 + 45));

    ctx.strokeStyle="#4B4B4B";
    ctx.strokeText("Si",(x2 + 50), (y2 + 45));

}


function analisis(){
    // console.log(raton.x + " x2: "+ x1 + " " + raton.y + " y2 " + y1);
    if (raton.x > x1 && raton.y > y1 && raton.x < (x1 + 150) && raton.y < (y1 + 60)){
        // console.log("le dieron al no");
        x1 = Math.floor(Math.random() * (800 + 1) );
        y1 = Math.floor(Math.random() * (300 + 1) );
        drawYoN()
    }
    if (raton.x > x2 && raton.y > y2 && raton.x < (x2 + 150) && raton.y < (y2 + 60)) {
         ctx.fillStyle = "#f9cfd1";
         ctx.fillRect(0, 0, lienzo.width, lienzo.height);

         ctx.font="20px Arial";
         ctx.strokeStyle="#4B4B4B";
         ctx.lineWidth = 1;
         ctx.strokeText("Yo tambien acepto y te quiero para el resto de mi vida, dame un besito.",40,220);
         
         
    } else {
        return;
    }
    
}




function oMousePos(canvas, evt) {
    let ClientRect = canvas.getBoundingClientRect();
      return {
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
  }
}

drawYoN()