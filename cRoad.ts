import {iShape} from "./iShape";

class cRoad implements iShape{
    start: number[];
    end: number[];
    numLanes: number;

    LANE_WIDTH : number = 5;

    constructor(start: number[], end: number[], numLanes: number) {
        this.start = start;
        this.end = end;
        this.numLanes = numLanes;
    }

    public draw = (canvas: HTMLCanvasElement): void => {
        
    }
}