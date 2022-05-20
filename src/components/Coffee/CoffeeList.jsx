import Coffee from './Coffee';

export default function CoffeeList({ coffees }) {
  if (!coffees) return null;

  return (
    <>
      {coffees.map((coffee) => (
        <Coffee key={coffee.id} />
      ))}
    </>
  );
}
