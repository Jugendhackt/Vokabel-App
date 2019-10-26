import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nikolai',
  templateUrl: './nikolai.component.html',
  styleUrls: ['./nikolai.component.scss'],
})
export class NikolaiComponent implements OnInit {
  wert = 3;

  constructor() { }

  ngOnInit() {}

  geklickt(){
    console.log("klick");
    this.wert++;
  }



}
