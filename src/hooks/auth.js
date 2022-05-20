import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {
  supabaseSignIn,
  supabaseSignUp,
  supabaseSignOut,
} from '../services/users';

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a UserProvider');
  }

  const { user, setUser } = context;

  const signUp = async (email, password) => {
    const user = await supabaseSignUp(email, password);
    setUser(user);
  };

  const signIn = async (email, password) => {
    const user = await supabaseSignIn(email, password);
    setUser(user);
  };

  const signOut = async () => {
    await supabaseSignOut();
    setUser({});
  };

  return { user, signIn, signOut, signUp };
};
