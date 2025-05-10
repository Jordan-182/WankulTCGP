import { Login } from "../components/Login";
import { ProfileCard } from "../components/ProfileCard";
import { useUser } from "../context/UserProvider";

export const Profile = () => {
  const { user } = useUser();
  return (
    <section>
      <h1>Profil</h1>
      {!user.isOnline && <Login />}
      {user.isOnline && <ProfileCard />}
    </section>
  );
};
