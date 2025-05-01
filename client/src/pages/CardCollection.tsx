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
      <h2 className={styles.pageTitle}>Collection de cartes</h2>
      <section>
        <h3 className={styles.sectionTitle}>Saison 1 : Origins</h3>
        <ul className={styles.container}>
          {cards.map((card: WankulCard) => (
            <li key={card.id} className={styles.cardItem}>
              <img src={`http://localhost:3310${card.img}`} alt={card.name} />
              <h4>{card.name}</h4>
              {card.quote ? <p>{card.quote}</p> : null}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
