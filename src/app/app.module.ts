import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import {HeaderCompleterInterceptor} from '@shared/interceptors/header-completer.interceptor';
import {GameStoreService} from '@features/game-store/game-store.service';
import {GameService} from '@features/game/game.service';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {APP_BASE_HREF} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    PagesModule,
    TabsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeaderCompleterInterceptor, multi: true},
    { provide: APP_BASE_HREF, useValue: '/' },
    GameStoreService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
