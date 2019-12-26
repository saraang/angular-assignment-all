import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { BasicHightlightDirective } from './basic-hightlight/basic-hightlight.directive';
import { BetterHightlightDirective } from './better-hightlight/better-hightlight.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Assignment1Component, Assignment2Component, Assignment3Component, Assignment4Component, BasicHightlightDirective, BetterHightlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
