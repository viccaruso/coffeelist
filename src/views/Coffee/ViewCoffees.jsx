import { useCoffee } from '../../hooks/coffee';
import { Link } from 'react-router-dom';
import CoffeeList from '../../components/Coffee/CoffeeList';

export default function ViewCoffees() {
  const { coffees } = useCoffee();

  return (
    <div>
      <h1>Welcome to the coffee list!</h1>
      <Link to="/coffee/add">
        <button>Add a coffee</button>
      </Link>
      <CoffeeList coffees={coffees} />
    </div>
  );
}
