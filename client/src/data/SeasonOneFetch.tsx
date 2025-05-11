import { WankulCard } from "../model/WankulCard";

export const fetchSeasonOneCards = async (): Promise<WankulCard[]> => {
  const response = await fetch("http://localhost:3310/api/season1");
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des cartes");
  }
  const data = await response.json();

  const cards = data.map(
    (cardData: WankulCard) =>
      new WankulCard(
        cardData.id,
        cardData.name,
        cardData.img,
        cardData.season,
        cardData.set,
        cardData.cardNumber,
        cardData.clan,
        cardData.rarity,
        cardData.dropRate,
        cardData.holo,
        cardData.isPossessed,
        cardData.quote
      )
  );

  return cards;
};
