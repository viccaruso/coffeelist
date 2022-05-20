import { useCoffee } from '../../hooks/coffee';
import CoffeeList from '../../components/Coffee/CoffeeList';

export default function ViewCoffees() {
  const { coffees } = useCoffee();
  if (!coffees) return null;

  return (
    <div>
      <h1>Welcome to the coffee list!</h1>
      <CoffeeList coffees={coffees} />
    </div>
  );
}
