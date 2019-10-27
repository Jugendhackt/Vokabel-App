import { Injectable } from '@angular/core';
import { Frage } from './frage';
import { Profil } from './profil';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  profil: Profil;
  fragen: Frage[] = [{text: "Hallo das ist eine Testfrage", antwort: "test"}];
  antworten = [];
  darkMode = false;
  freunde = ["Emma","Marie","Vito","Paul","Felix","Elsa","Mira","Oskar","Vivien","Sebastian","Tom",];
  
  constructor() { }
}
