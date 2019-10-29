import { Component, OnInit } from '@angular/core';
import { VocabService } from '../vocab.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frage',
  templateUrl: './frage.page.html',
  styleUrls: ['./frage.page.scss'],
})
export class FragePage implements OnInit {
  frageText = '';

  frageAntwort = '';

  fach;

  constructor(
    private vocabService: VocabService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot);
    if (this.route.snapshot.data['fach']) {
      this.fach = this.route.snapshot.data['fach'];
      console.log(this.fach);
    } else {
      console.log('nichts');
    }
  }

  neueFrage() {
    this.vocabService.fragen.push({
      text: this.frageText,
      antwort: this.frageAntwort,
    });
    this.frageText = '';
    this.frageAntwort = '';
    console.log(this.vocabService.fragen);
  }
}
