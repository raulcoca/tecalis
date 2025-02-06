import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GameStoreItemComponent} from '@features/game-store/components/game-store-item/game-store-item.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    GameStoreItemComponent],
  imports: [
    CommonModule,
    TabsModule,
    RouterModule
  ],
  exports: [
    GameStoreItemComponent
  ],
})
export class GameStoreComponentsModule { }
