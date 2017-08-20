import { Component } from '@angular/core';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class Map {
    title: string;
    polygons: Array<Polygon>;
    clat: number = 33.7294;
    clng: number = 73.0931;

    constructor() {
        this.title = 'Islamabad';
        this.polygons = [new Polygon(1, 1), new Polygon(2, 2), new Polygon(3, 3)];
    }
 
}

class Polygon {
    paths: Array<Coords>;
    clickable: boolean;
    color: number;

    constructor(delLat:number, delLong:number) {
        this.paths = [new Coords(33.7294+delLat, 73.0931+delLong), new Coords(33.7298-delLat, 73.0923+delLong), new Coords(33.7281+delLong, 73.0925-delLat)];
        this.clickable = true;
        this.color = 800000;
    }

}

class Coords {
    lat: number;
    lng: number;

    constructor(la: number, ln:number){
        this.lat = la;
        this.lng = ln;
    }
}
