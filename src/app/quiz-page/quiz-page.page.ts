import { VocabService } from './../vocab.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.page.html',
  styleUrls: ['./quiz-page.page.scss'],
})
export class QUIZPagePage implements OnInit {
  meinText: string;

  constructor(
    private vocabService: VocabService

  ) { }

  ngOnInit() {
    this.meinText = this.vocabService.fragen[0];
  }

}
