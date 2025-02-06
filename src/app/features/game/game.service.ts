import { inject, Injectable } from '@angular/core';
import { APIService } from '@api/api.service';
import { environment } from '@envs/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Game} from '@features/game/game.interfaces';
import {api} from '@shared/constants/constanst';

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly _endPoint = `${environment.apiUrl}${api.GAMES}`;
  private readonly _apiService = inject(APIService);

  constructor() {
  }

  getGameById(gameId: number): Observable<Game> {
    return this._apiService
      .get<Game>(`${this._endPoint}/${gameId}`)
      .pipe(
        map((game: Game) => {
          return game;
        })
      );
  }
}
