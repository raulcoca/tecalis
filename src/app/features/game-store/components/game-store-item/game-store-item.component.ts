import {Component, Input, OnInit} from '@angular/core';
import {GameStore} from "@features/game-store/game-store.interfaces";

@Component({
  selector: 'app-game-store-item',
  templateUrl: './game-store-item.component.html',
  styleUrls: ['./game-store-item.component.scss'],
})
export class GameStoreItemComponent implements OnInit {

  @Input() item!: GameStore;


  constructor() { }

  ngOnInit(): void {
  }

}
