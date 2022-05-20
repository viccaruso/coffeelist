import { useEffect, useState } from 'react';
import { getCoffees } from '../../services/coffees';
import Coffee from './Coffee';
export default function CoffeeList() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    async function fetch() {
      const coffees = await getCoffees();
      setCoffees(coffees);
    }
    fetch();
  }, []);

  return (
    <>
      {coffees.map((coffee) => (
        <Coffee key={coffee.id} />
      ))}
    </>
  );
}
