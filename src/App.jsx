import { Switch, Route, Redirect } from 'react-router-dom';
import CoffeeList from './components/Coffee/CoffeeList';
import CoffeeDetails from './components/Coffee/CoffeeDetails';

export default function App() {
  return (
    <Switch>
      <Route path="/list">
        <CoffeeList />
      </Route>
      <Route path="/coffee/:id">
        <CoffeeDetails />
      </Route>
      <Route exact path="/">
        <Redirect to="/list" />
      </Route>
    </Switch>
  );
}
