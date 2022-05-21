import { useState } from 'react';

export default function CoffeeForm() {
  const [roasteryValue, setRoasteryValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [roastLevelValue, setRoastLevelValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [processValue, setProcessValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="roastery">Roastery</label>
      <input
        name="roastery"
        type="text"
        value={roasteryValue}
        onChange={(e) => setRoasteryValue(e.target.value)}
      />
      <label htmlFor="coffeename">Coffee Name</label>
      <input
        name="coffeename"
        type="text"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <label htmlFor="roastlevel">Roast Level</label>
      <input
        name="roastlevel"
        type="text"
        value={roastLevelValue}
        onChange={(e) => setRoastLevelValue(e.target.value)}
      />
      <label htmlFor="process">Process</label>
      <input
        name="process"
        type="text"
        value={processValue}
        onChange={(e) => setProcessValue(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        type="text"
        value={descriptionValue}
        onChange={(e) => setDescriptionValue(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}
