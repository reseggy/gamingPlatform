import { StaticImageData } from "next/image";

export interface ItemTrandingGames {
  image: StaticImageData;
  followers: number;
}

export interface TrandingGamesProps {
  items: ItemTrandingGames[];
}
