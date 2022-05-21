import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export default function Coffee({ coffee }) {
  const { user } = useAuth();
  const date = new Date(coffee.created_at);

  if (!user) return null;

  return (
    <tr>
      <td>{date.toLocaleDateString()}</td>
      <td>{coffee.roastery}</td>
      <td>
        <Link to={`/coffee/${coffee.id}`}>{coffee.name}</Link>
      </td>
      <td>{coffee.user_id === user.id ? 'You' : coffee.user_email}</td>
    </tr>
  );
}
