import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  name = "";
  alter;
  fragen = ["Testfrage"];
  antworten = [];
  darkMode = false;
  
  constructor() { }
}
