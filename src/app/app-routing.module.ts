import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'david', loadChildren: './david-page/david-page.module#DavidPagePageModule' },
  { path: 'kaspar', loadChildren: './kaspar-page/kaspar-page.module#KasparPagePageModule' },
  { path: 'nikolai-page', loadChildren: './nikolai-page/nikolai-page.module#NikolaiPagePageModule' },
  { path: 'lorenz-page', loadChildren: './lorenz-page/lorenz-page.module#LorenzPagePageModule' },
  { path: 'arthur', loadChildren: './arthur-page/arthur-page.module#ArthurPagePageModule' },
  { path: 'jakob', loadChildren: './jakob-page/jakob-page.module#JakobPagePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
