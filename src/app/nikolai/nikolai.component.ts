import { Component, OnInit } from '@angular/core';
import { VocabService } from '../vocab.service';

@Component({
  selector: 'app-nikolai',
  templateUrl: './nikolai.component.html',
  styleUrls: ['./nikolai.component.scss'],
})
export class NikolaiComponent implements OnInit {
  darkMode: boolean;

  constructor(
    private vocabService: VocabService
  ) { }

  ngOnInit() {
    this.darkMode = this.vocabService.darkMode;
    console.log("init");
    console.log(this.darkMode);
  }

  geklickt(){
    console.log("klick");
    this.vocabService.darkMode = !this.vocabService.darkMode;
    console.log(this.vocabService.darkMode);
    document.body.classList.toggle('dark');
  }
}
