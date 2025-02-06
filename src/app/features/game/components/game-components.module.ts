import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ModalModule} from "ngx-bootstrap/modal";
import {PipesModule} from "@shared/pipes/pipes.module";
import {UiComponentsModule} from "@shared/layouts/ui/ui-components.module";



@NgModule({
  declarations: [
    GameDetailComponent,],
  imports: [
    CommonModule,
    TabsModule,
    RouterModule,
    ModalModule,
    PipesModule,
    UiComponentsModule
  ],
  exports: [
    GameDetailComponent,

  ],
})
export class GameComponentsModule { }
