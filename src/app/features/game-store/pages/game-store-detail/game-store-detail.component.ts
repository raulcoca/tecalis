import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameStore} from '@features/game-store/game-store.interfaces';
import {GameStoreService} from '@features/game-store/game-store.service';
import {BehaviorSubject, combineLatest, EMPTY, Observable, of, Subject} from 'rxjs';
import {catchError, filter, find, first, map, switchMap, take, takeUntil, tap} from 'rxjs/operators';
import {BsModalService} from 'ngx-bootstrap/modal';
import {GameDetailComponent} from "@features/game/components/game-detail/game-detail.component";
import {GameService} from "@features/game/game.service";
import {Game} from "@features/game/game.interfaces";
import {isSame} from "ngx-bootstrap/chronos";

@Component({
  selector: 'app-game-store-detail',
  templateUrl: './game-store-detail.component.html',
  styleUrls: ['./game-store-detail.component.scss']
})
export class GameStoreDetailComponent implements OnInit, OnDestroy {

  id: GameStore['id'];
  gameStore$: Observable<GameStore>;
  private ngUnsubscribe = new Subject<void>();

  constructor(private _route: ActivatedRoute,
              private _gameStoreService: GameStoreService,
              private _gameService: GameService,
              private _router: Router,
              public modalService: BsModalService) {

    this.id = +this._route.snapshot.paramMap.get('id');
    if (!this.id) {
      this._router.navigate(['/']);
    }

  }

  ngOnInit(): void {
    this.updateGameStore();

    this.completeGmeStore();
  }

  updateGameStore() {
    this.gameStore$ = this._gameStoreService.gameStores$.pipe(
      filter((gameStores) => gameStores !== null),
      map((gameStores) => {
        const currentGameStore = gameStores.find((s) => s.id === this.id);
        if (currentGameStore) {
          return currentGameStore;
        } else {
          this._router.navigate(['/']);
          return null;
        }
      }),
      takeUntil(this.ngUnsubscribe)
    );
  }

  completeGmeStore() {
    this.gameStore$.pipe(
      first(),
      tap((gameStore) => {
        if (gameStore) {
          this._gameStoreService.getStoreById(gameStore.id);
        }
      }),
    ).subscribe();
  }

  showModal(gameId) {

    this._gameService.getGameById(gameId).subscribe((game: Game) => {
      this.modalService.show(GameDetailComponent, {initialState: {game}, class: 'modal-black'});
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
