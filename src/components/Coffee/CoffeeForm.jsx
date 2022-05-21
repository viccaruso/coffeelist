import { useState } from 'react';
import { useCoffees } from '../../hooks/coffee';

export default function CoffeeForm() {
  const { handleAddCoffee } = useCoffees();
  const [roasteryValue, setRoasteryValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [roastLevelValue, setRoastLevelValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [processValue, setProcessValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddCoffee({
      roastery: roasteryValue,
      name: nameValue,
      roast: roastLevelValue,
      process: processValue,
      description: descriptionValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="roastery">Roastery</label>
      <input
        required
        name="roastery"
        type="text"
        value={roasteryValue}
        onChange={(e) => setRoasteryValue(e.target.value)}
      />
      <label htmlFor="coffeename">Coffee Name</label>
      <input
        required
        name="coffeename"
        type="text"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <label htmlFor="roastlevel">Roast Level</label>
      <input
        required
        name="roastlevel"
        type="text"
        value={roastLevelValue}
        onChange={(e) => setRoastLevelValue(e.target.value)}
      />
      <label htmlFor="process">Process</label>
      <input
        required
        name="process"
        type="text"
        value={processValue}
        onChange={(e) => setProcessValue(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        required
        name="description"
        type="text"
        value={descriptionValue}
        onChange={(e) => setDescriptionValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
