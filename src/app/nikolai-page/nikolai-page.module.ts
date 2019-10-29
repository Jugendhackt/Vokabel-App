import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NikolaiPagePage } from './nikolai-page.page';
import { NikolaiComponent } from '../nikolai/nikolai.component';

const routes: Routes = [
  {
    path: '',
    component: NikolaiPagePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [NikolaiPagePage, NikolaiComponent],
})
export class NikolaiPagePageModule {}
