import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arthur-page',
  templateUrl: './arthur-page.page.html',
  styleUrls: ['./arthur-page.page.scss'],
})
export class ArthurPagePage implements OnInit {
  zahl = 0;

  constructor() { }

  ngOnInit() {
  }
  
  neinGeklickt() {
    console.log("nein");
    this.zahl--;
  }

  jaGeklickt() {
    console.log("ja")
    this.zahl++;
  }
}
 
    