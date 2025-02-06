import { GameMin} from '@features/game/game.interfaces';

export interface GameStore {
  id: number;
  name: string;
  domain: string;
  slug: string;
  games_count: number;
  image_background: string;
  games?: GameMin[];
  description?: string;
}

export interface GameStoreResponse {
  count: number;
  next: string;
  previous: string;
  results: GameStore[];
}


