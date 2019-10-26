import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  name = "";
  alter;
  fragen = ["Hallo das ist eine Testfrage"];
  antworten = [];
  darkMode = false;
  
  constructor() { }
}
