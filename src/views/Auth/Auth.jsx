import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../../hooks/auth';

export default function Auth() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { signUp, signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signIn(email, password);
      history.replace('/list');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClick = async () => {
    try {
      await signUp(email, password);
      history.replace('/list');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" />
        <input
          required
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" />
        <input
          required
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        <button type="button" onClick={handleClick}>
          Sign Up
        </button>
      </form>
      <p>{error}</p>
    </>
  );
}
