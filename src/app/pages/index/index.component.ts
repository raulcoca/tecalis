import {Component, OnInit, OnDestroy, inject} from "@angular/core";
import noUiSlider from "nouislider";
import {GameStoreService} from "@features/game-store/game-store.service";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit {

  gameStores$ = this._gameStoreService.gameStores$;


  constructor(public _gameStoreService: GameStoreService) {

  }

  ngOnInit() {

  }
}
