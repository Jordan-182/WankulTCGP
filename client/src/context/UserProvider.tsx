import { ReactNode, useContext, useState } from "react";
import { User } from "../model/User";
import { emptyUser, UserContext, UserContextType } from "./UserContext";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(emptyUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  return context;
};
