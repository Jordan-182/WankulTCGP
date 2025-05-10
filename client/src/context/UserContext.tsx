import { createContext } from "react";
import { User } from "../model/User";

export interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const emptyUser: User = {
  id: 0,
  name: "",
  email: "",
  img: "",
  isOnline: false,
  cardCollection: [],
};

export const UserContext = createContext<UserContextType>({
  user: emptyUser,
  setUser: () => {},
});
