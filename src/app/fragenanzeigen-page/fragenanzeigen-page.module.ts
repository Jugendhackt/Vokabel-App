import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FragenanzeigenPagePage } from './fragenanzeigen-page.page';

const routes: Routes = [
  {
    path: '',
    component: FragenanzeigenPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FragenanzeigenPagePage]
})
export class FragenanzeigenPagePageModule {}
