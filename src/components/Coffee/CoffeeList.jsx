import Coffee from './Coffee';
import styles from './CoffeeTable.css';
export default function CoffeeList({ coffees }) {
  if (!coffees) return null;

  return (
    <table style={styles}>
      <thead>
        <tr>
          <th>Date Added</th>
          <th>Roastery</th>
          <th>Coffee Name</th>
          <th>Added By</th>
        </tr>
      </thead>
      <tbody>
        {coffees.map((coffee) => (
          <Coffee key={coffee.id} coffee={coffee} />
        ))}
      </tbody>
    </table>
  );
}
