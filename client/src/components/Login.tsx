import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useUser } from "../context/UserProvider";
import { User } from "../model/User";
import styles from "../styles/Login.module.css";

type GooglePayload = {
  name: string;
  email: string;
  picture: string;
};

export const Login = () => {
  const { setUser } = useUser();
  interface MyGooglePayload extends GooglePayload {
    given_name: string;
    family_name: string;
  }

  return (
    <section className={styles.container}>
      <p>
        Connecter toi avec Google pour pouvoir utiliser toutes les
        fonctionnalités du site!
      </p>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (credentialResponse.credential) {
            const decoded = jwtDecode<MyGooglePayload>(
              credentialResponse.credential
            );

            console.log(decoded);

            const newUser: User = {
              id: 1,
              fullName: decoded.name,
              givenName: decoded.given_name,
              familyName: decoded.family_name,
              email: decoded.email,
              isOnline: true,
              img: decoded.picture,
              cardCollection: [],
            };

            setUser(newUser);
          }
        }}
        onError={() => {
          console.log("Erreur lors de la connexion Google");
        }}
        auto_select={true}
        shape="pill"
      />
    </section>
  );
};
