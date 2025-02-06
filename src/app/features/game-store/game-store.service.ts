import {inject, Injectable} from '@angular/core';
import {APIService} from '@api/api.service';
import {environment} from '@envs/environment';
import {BehaviorSubject, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {GameStore, GameStoreResponse} from '@features/game-store/game-store.interfaces';
import {api} from '@shared/constants/constanst';

@Injectable({providedIn: 'root'})
export class GameStoreService {
  readonly gameStores$ = new BehaviorSubject<GameStore[]>(null);

  private readonly _endPoint = `${environment.apiUrl}${api.GAME_STORES}`;
  private readonly _apiService = inject(APIService);

  constructor() {
    this._getStores();
  }

  private _getStores(): void {
    this._apiService
      .get<GameStoreResponse>(this._endPoint)
      .pipe(
        map((storesResponse: GameStoreResponse) => storesResponse.results),
        catchError((error: any) => {
          console.error('Error al obtener las tiendas', error);
          return of(null);
        })
      )
      .subscribe((stores) => {
        this.gameStores$.next(stores);
      });
  }

  getStoreById(storeId: number): void {
    this._apiService
      .get<GameStore>(`${this._endPoint}/${storeId}`)
      .pipe(
        map((store) => {
          if (store && this.gameStores$.value) {
            return this.gameStores$.value.map((s) => {
              if (s.id === store.id) {
                return {...s, ...store};
              }
              return s;
            });
          }
          return null;
        }),
        catchError((error: any) => {
          console.error('Error al obtener la tienda', error);
          throw error;
        })
      )
      .subscribe((updatedGameStores) => {
        this.gameStores$.next(updatedGameStores);
      });
  }
}
