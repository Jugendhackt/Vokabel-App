import { Component, OnInit } from '@angular/core';
import { VocabService } from '../vocab.service';

@Component({
  selector: 'app-frage',
  templateUrl: './frage.page.html',
  styleUrls: ['./frage.page.scss'],
})
export class FragePage implements OnInit {
  frageText = "";

  frageAntwort = "";

  constructor(
    private vocabService: VocabService
  ) { }

  ngOnInit() {
  }

  neueFrage() {
    this.vocabService.fragen.push({
      text: this.frageText,
      antwort: this.frageAntwort,
    });
    this.frageText = "";
    this.frageAntwort = "";
    console.log(this.vocabService.fragen);
  }
}
