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
    sectors: [number, number][][] = [[[33.698123, 73.037716], 
                                      [33.706727, 73.05424], 
                                      [33.692423, 73.065739],
                                      [33.677211, 73.075551],
                                      [33.669211, 73.060273]]];
    /*                                   [[], 
                                    [], 
                                    [], 
                                    []], 
                                   [[], 
                                    [], 
                                    [], 
                                    []]
                                  ]
*/
    constructor() {
        this.title = 'Islamabad';
        this.polygons = this.sectors.map((s) => new Polygon(s));
    }
 
}

class Polygon {
    paths: Array<Coords>;
    clickable: boolean;
    color: number;

    constructor(coords: [number, number][]) {
        this.paths = coords.map((c) => new Coords(c[0], c[1]));
        this.clickable = true;
        this.color = 0o6600;
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


