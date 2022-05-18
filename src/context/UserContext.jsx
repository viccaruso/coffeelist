import { getUser } from '../services/users';
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const currentUser = getUser();
  if (currentUser) setUser({ id: currentUser.id, email: currentUser.email });

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
