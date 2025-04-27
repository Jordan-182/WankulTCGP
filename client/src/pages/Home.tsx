import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";
import { WankulCard } from "../model/WankulCard";

export const Home = () => {
  const context = useContext(CardsContext);

  if (!context) {
    return <p>Chargement des cartes...</p>;
  }

  const { cards } = context;
  return (
    <section>
      <ul>
        {cards.map((card: WankulCard) => (
          <li key={card.id}>
            <h2>{card.name}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
};
