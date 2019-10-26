import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nikolai',
  templateUrl: './nikolai.component.html',
  styleUrls: ['./nikolai.component.scss'],
})
export class NikolaiComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  geklickt(){
    console.log("klick");
  }



}
