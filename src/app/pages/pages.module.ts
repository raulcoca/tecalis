import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {GameStoreComponentsModule} from '@features/game-store/components/game-store-components.module';
import {LayoutsComponentsModule} from '@shared/layouts/components/layouts-components.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    GameStoreComponentsModule,
    LayoutsComponentsModule,
  ],
  declarations: [
    IndexComponent,
  ],
  exports: [
    IndexComponent,
  ],
  providers: []
})
export class PagesModule {}
