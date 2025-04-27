import { createContext } from "react";
import { WankulCard } from "../model/WankulCard";

export interface CardsContextType {
  cards: WankulCard[];
  setCards: React.Dispatch<React.SetStateAction<WankulCard[]>>;
}

export const CardsContext = createContext<CardsContextType | undefined>(
  undefined
);
