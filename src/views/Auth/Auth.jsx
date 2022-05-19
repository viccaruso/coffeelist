import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

export default function Auth() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { signUp, signIn } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signIn(email, password);
  };

  const handleClick = async () => {
    await signUp(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" />
      <input
        name="email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password" />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
      <button type="button">Sign Up</button>
    </form>
  );
}
