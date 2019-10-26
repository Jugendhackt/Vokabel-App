import { Injectable } from '@angular/core';
import { Frage } from './frage';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  name = "";
  alter;
  fragen: Frage[] = [{text: "Hallo das ist eine Testfrage", antwort: "test"}];
  antworten = [];
  darkMode = false;
  
  constructor() { }
}
