import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './pages/index/index.component';
import {paths} from '@shared/constants/constanst';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {
    path: `${paths.GAME_STORE_DETAIL}/:id`,
    loadChildren: () => import('@features/game-store/pages/game-store-detail/game-store-detail.module').then(m => m.GameStoreDetailModule)
  },
  {path: '**', component: IndexComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled',

    })
  ],
  exports: []
})
export class AppRoutingModule {
}
