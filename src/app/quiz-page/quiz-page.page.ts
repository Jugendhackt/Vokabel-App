import { VocabService } from './../vocab.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.page.html',
  styleUrls: ['./quiz-page.page.scss'],
})
export class QUIZPagePage implements OnInit {
  richtig = 0;

  insgesamt = 0;

  antwortSichtbar = false;

  frage;

  constructor(private vocabService: VocabService) {}

  ngOnInit() {
    console.log(this.vocabService.fragen);

    const index = this.getRandomInt(0, this.vocabService.fragen.length);
    console.log(index);
    console.log(this.vocabService.fragen[index]);

    this.frage = this.vocabService.fragen[index];
  }
  jaGeklickt() {
    console.log('ja');
    this.neueFrage();
    this.insgesamt++;
    this.richtig++;
  }

  neinGeklickt() {
    console.log('nein');
    this.neueFrage();
    this.insgesamt++;
  }

  resetGeklickt() {
    this.insgesamt = 0;
    this.richtig = 0;
  }

  antwortAnzeigen() {
    this.antwortSichtbar = !this.antwortSichtbar;
  }

  neueFrage() {
    const index = this.getRandomInt(0, this.vocabService.fragen.length);
    console.log(this.vocabService.fragen);
    console.log(index);
    console.log(this.vocabService.fragen[index]);
    this.frage = this.vocabService.fragen[index];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
