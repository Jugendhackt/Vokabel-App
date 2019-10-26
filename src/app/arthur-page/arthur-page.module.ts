import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArthurPagePage } from './arthur-page.page';
import { ArthurComponent } from '../arthur/arthur.component';

const routes: Routes = [
  {
    path: '',
    component: ArthurPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArthurPagePage,ArthurComponent]
})
export class ArthurPagePageModule {}
