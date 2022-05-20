import React from 'react';
import { Link } from 'react-router-dom';

export default function Coffee({ coffee }) {
  const date = new Date(coffee.created_at);
  return (
    <>
      <li>
        <span>{date.toLocaleDateString()}</span>

        <span>{coffee.roastery}</span>

        <span>{coffee.name}</span>
      </li>
      <Link to={`/coffee/${coffee.id}`}>View Details</Link>
    </>
  );
}
