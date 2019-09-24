import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  allow = false;
  msg = 'No msg';
  constructor() { 
    setTimeout(() => {   
      this.allow = true;
     }, 2000)
  }

  ngOnInit() {
  }

  executeMethod(){
    console.log("Hi");
    this.msg = 'Msg from TS!';
  }

}