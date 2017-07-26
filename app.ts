import { cCircle } from './cCircle';
import {iShape} from './iShape';

var canvas: HTMLCanvasElement;
//var ctx: CanvasRenderingContext2D;
var entities: iShape[] = new Array[0]; 

function gameLoop() {
    requestAnimationFrame(gameLoop);

    eraseCanvas();

    for (let shape of entities){
        console.log(shape);
    }
}

function eraseCanvas() {
    var ctx : CanvasRenderingContext2D = canvas.getContext("2d");
    ctx.fillStyle = "#DDD";
    ctx.fillRect(0, 0, 1280, 720);
}

function createRoads(){

}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    //ctx = canvas.getContext("2d");

    createRoads();

    gameLoop();
}
