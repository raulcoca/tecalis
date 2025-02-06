export interface GameMin {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  released: string;
  background_image: string;
  rating: number;
  background_image_additional: string;
}
