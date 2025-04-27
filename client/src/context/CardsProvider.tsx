import { useEffect, useState } from "react";
import { fetchSeasonOneCards } from "../data/SeasonOneFetch";
import { WankulCard } from "../model/WankulCard";
import { CardsContext } from "./CardsContext";

export const CardsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<WankulCard[]>([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const fetchedCards = await fetchSeasonOneCards();
        setCards(fetchedCards);
      } catch (error) {
        console.error("Erreur en récupérant les cartes:", error);
      }
    };

    getCards();
  }, []);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
};
