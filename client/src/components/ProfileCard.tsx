import { googleLogout } from "@react-oauth/google";
import { useUser } from "../context/UserProvider";
import styles from "../styles/ProfileCard.module.css";

export const ProfileCard = () => {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    googleLogout();
    setUser({ ...user, isOnline: false });
  };

  return (
    <section className={styles.profileCard}>
      <div className={styles.userInfos}>
        <img src={user.img} alt={`Image de profil de ${user.fullName}`} />
        <h2>{user.fullName}</h2>
        <h3>Coordonnées</h3>
        <ul>
          <li>
            <span className={styles.bold}>Prénom</span> : {user.givenName}
          </li>
          <li>
            <span className={styles.bold}>Nom</span> : {user.familyName}
          </li>
          <li>
            <span className={styles.bold}>Adresse mail</span> : {user.email}
          </li>
        </ul>
      </div>
      <div className={styles.userCollection}>
        <h3>Collection</h3>
        <p>Nombre total de cartes obtenues : {user.cardCollection.length}</p>
        <h4>Cartes par saisons :</h4>
        <ul>
          <li>
            <span className={styles.bold}>Saison 1</span> :{" "}
            {user.cardCollection.length} carte(s)
          </li>
          <li>
            <span className={styles.bold}>Saison 2</span> :{" "}
            {user.cardCollection.length} carte(s)
          </li>
          <li>
            <span className={styles.bold}>Saison 3</span> :{" "}
            {user.cardCollection.length} carte(s)
          </li>
        </ul>
      </div>
      <button
        type="button"
        onClick={() => {
          handleLogout();
        }}
      >
        Déconnexion
      </button>
    </section>
  );
};
