import React from 'react';

export default function Coffee({ coffee }) {
  const date = new Date(coffee.created_at);
  return (
    <li>
      <span>{date.toLocaleDateString()}</span>

      <span>{coffee.roastery}</span>

      <span>{coffee.name}</span>
    </li>
  );
}
