import Coffee from './Coffee';

export default function CoffeeList({ coffees }) {
  if (!coffees) return null;

  return (
    <>
      <ul>
        <li>
          <span>Date Added</span>
          <span>Roastery</span>
          <span>Name</span>
        </li>
        {coffees.map((coffee) => (
          <Coffee key={coffee.id} coffee={coffee} />
        ))}
      </ul>
    </>
  );
}
