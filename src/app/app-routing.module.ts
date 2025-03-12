import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CharactersPage } from './home/pages/characters/characters.page';
import { CharacterDetailPage } from './home/pages/character-detail/character-detail.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'characters-list',
    pathMatch: 'full'
  },
  {
    path: 'characters-list',
    component: CharactersPage,
  },
  {
    path: 'character-detail',
    component: CharacterDetailPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
