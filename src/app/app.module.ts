import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Assignment1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
