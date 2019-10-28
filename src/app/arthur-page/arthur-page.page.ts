import { Component, OnInit } from '@angular/core';
import { VocabService } from '../vocab.service';

@Component({
  selector: 'app-arthur-page',
  templateUrl: './arthur-page.page.html',
  styleUrls: ['./arthur-page.page.scss'],
})
export class ArthurPagePage implements OnInit {
  zahl = 0;

  freunde;

  constructor(private vocabService: VocabService) {}

  ngOnInit() {
    console.log(this.vocabService.freunde);
    this.freunde = this.vocabService.freunde;
  }

  neinGeklickt() {
    console.log('nein');
    this.zahl--;
  }

  jaGeklickt() {
    console.log('ja');
    this.zahl++;
  }

  suchen(event) {
    console.log('suche', event);
    console.log(event.target.value);
    this.freunde = this.vocabService.freunde.filter(freund => {
      const freundKlein = freund.toLowerCase();
      const sucheKlein = event.target.value.toLowerCase();
      return freundKlein.includes(sucheKlein);
    });
  }
}
