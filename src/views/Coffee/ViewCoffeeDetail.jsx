import { useCoffee } from '../../hooks/coffee';
import { useParams } from 'react-router-dom';

export default function ViewCoffeeDetail() {
  const { id } = useParams();
  const { coffee } = useCoffee(id);

  console.log(coffee);

  return (
    <div>
      <p>{coffee.roastery && `Roastery: ${coffee.roastery}`}</p>
      <p>{coffee.name && `Name: ${coffee.name}`}</p>
      <p>{coffee.roast && `Roast Level: ${coffee.roast}`}</p>
      <p>{coffee.process && `Process: ${coffee.process}`}</p>
      <p>{coffee.description && `Description: ${coffee.description}`}</p>
    </div>
  );
}
