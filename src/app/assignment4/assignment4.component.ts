import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {

//  numbers = [1,2,3,4,5];
  onlyOdd = false;

  oddNumbers = [1,3,5];
  evenNumbers = [2,4]

  constructor() { }

  ngOnInit() {
  }

}