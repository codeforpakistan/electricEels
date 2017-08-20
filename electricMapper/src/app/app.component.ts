import { Component } from '@angular/core';
import { Map } from './map/map.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string ='Electric Mapper';
    input: string ='Please Enter Address'
    time: string ='Please Select Time'
}
