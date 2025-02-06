import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameStoreDetailComponent} from '@features/game-store/pages/game-store-detail/game-store-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {GameComponentsModule} from '@features/game/components/game-components.module';
import {LayoutsComponentsModule} from "@shared/layouts/components/layouts-components.module";

const routes: Routes = [
  {
    path: '',
    component: GameStoreDetailComponent
  }
];

@NgModule({
  declarations: [
    GameStoreDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GameComponentsModule,
    LayoutsComponentsModule
  ],
  exports: [RouterModule]
})
export class GameStoreDetailModule {
}
