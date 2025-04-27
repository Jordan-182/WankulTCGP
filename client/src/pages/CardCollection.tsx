import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";
import { WankulCard } from "../model/WankulCard";
import styles from "../styles/CardCollection.module.css";

export const CardCollection: React.FC = () => {
  const context = useContext(CardsContext);

  if (!context) {
    return <p>Chargement des cartes...</p>;
  }

  const { cards } = context;
  return (
    <section>
      <h2>Collection de cartes</h2>
      <ul className={styles.container}>
        {cards.map((card: WankulCard) => (
          <li key={card.id} className={styles.cardItem}>
            {card.isPossessed ? (
              <img src={`http://localhost:3310${card.img}`} alt={card.name} />
            ) : (
              <img
                src={`http://localhost:3310/saison1/boosterS1Recto.webp`}
                alt={card.name}
              />
            )}
            <h3>{card.name}</h3>
            {card.quote ? <p>{card.quote}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
};
