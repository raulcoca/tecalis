import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselModule} from "ngx-bootstrap/carousel";



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CarouselComponent
  ],
})
export class UiComponentsModule { }
