import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { MenuComponent } from './menu/menu.component';
import { Map } from './map/map.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDy2-Y7Nl5KtyQLhjou85_rFkT77zr5R8c'
    })
  ],
  providers: [],
  declarations: [ AppComponent, MenuComponent, Map ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
