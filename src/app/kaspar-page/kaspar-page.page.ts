import { Component, OnInit } from '@angular/core';
import { VocabService } from '../vocab.service';

@Component({
  selector: 'app-kaspar-page',
  templateUrl: './kaspar-page.page.html',
  styleUrls: ['./kaspar-page.page.scss'],
})
export class KasparPagePage implements OnInit {
  name;

  alter;

  region;

  klassenStufe;

  constructor(private vocabService: VocabService) {}

  ngOnInit() {
    if (this.vocabService.profil) {
      this.name = this.vocabService.profil.name;
      this.alter = this.vocabService.profil.alter;
      this.region = this.vocabService.profil.region;
      this.klassenStufe = this.vocabService.profil.klasseStufe;
    }
  }

  speichern() {
    console.log('speichern');

    this.vocabService.profil = {
      name: this.name,
      region: this.region,
      alter: this.alter,
      klasseStufe: this.klassenStufe,
    };
    console.log(this.vocabService.profil);
  }
}
