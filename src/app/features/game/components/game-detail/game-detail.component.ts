import {Component, Input, OnInit} from '@angular/core';
import {Game} from "@features/game/game.interfaces";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input() game: Game;

  constructor() {
  }

  ngOnInit(): void {
  }

}
