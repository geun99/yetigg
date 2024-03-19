export interface Monster {
  id: number;
  meso: number;
  name: string;
  level: number;
  exp: number;
  hp: number;
  mp: number;
  continent: string;
  img: string;
  move: string;
  location: string[];
  feature: string[];
  drop: string[];
}
