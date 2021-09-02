let canvas =  document.querySelector('canvas');
canvas.width=700;
canvas.height=500;

let xgrid=10;
let ygrid=10;
let cellsize=10;

let data={
  1:56,
  2:59,
  3:57,
  4:58,
  5:59,
  6:56,
  7:58,
  8:54,
  9:57,
  10:56,
  11:59,
  12:57,
  13:58,
  14:59,
  15:57,
  16:58,
  17:59,
  18:54,
  19:58,
  20:57,
  21:51,
  22:58,
  23:59,
  24:59,
  25:58,
  26:60,
  27:58,
  28:57,
  29:55,
  30:59,
  31:60,
  32:61,
  33:58,
  34:55,
  35:56,
  36:59,
  37:57,
  38:59,
  39:60,
  40:53,
  41:59,
  42:58,
  43:57,
  44:58,
  45:58
}
const entries=Object.entries(data);

let ctx=canvas.getContext('2d');

function drawGrids()
{
  ctx.beginPath();

  while(xgrid<canvas.height)
  {
   ctx.moveTo(0,xgrid);
   ctx.lineTo(canvas.width, xgrid);
   xgrid+=cellsize;
  }
  while(ygrid<canvas.width){
      ctx.moveTo(ygrid,0);
      ctx.lineTo(ygrid, canvas.height);
      ygrid+=cellsize;
    }
    ctx.strokeStyle="gray";
  ctx.stroke();
}
function blocks(count){
    return count*10;
}
function drawaxis(){
  let yplot=40;
  let pop=0;
  
    ctx.beginPath();
    ctx.strokeStyle="Black";
    ctx.moveTo(blocks(5),blocks(5));
    ctx.lineTo(blocks(5),blocks(40));
    ctx.lineTo(blocks(55),blocks(40));

    ctx.moveTo(blocks(5),blocks(40));
    for(let i=1; i<=10;i++)
    {
      ctx.strokeText(pop,blocks(2),blocks(yplot));
      yplot-=5;
      pop+=10;
    }
  
    ctx.stroke();
}
function drwchart(){
  ctx.beginPath();
  ctx.strokeStyle="red";
  ctx.moveTo(blocks(5),blocks(40));

  var xplot=10;
  for(const [time,temperature] of entries){
    var temperatureInBlocks=temperature/2;
    ctx.strokeText(time,blocks(xplot),blocks(41));
    ctx.lineTo(blocks(xplot),blocks(40-temperatureInBlocks));
    ctx.arc(blocks(xplot),blocks(40-temperatureInBlocks),2,0,Math.PI*2,true);
    xplot+=1;
  }


  ctx.stroke();
  
}
drawGrids();
drawaxis();
drwchart();