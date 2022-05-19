import { Switch, Route, Redirect } from 'react-router-dom';
import CoffeeList from './components/Coffee/CoffeeList';
import CoffeeDetails from './components/Coffee/CoffeeDetails';
import Auth from './views/Auth/Auth';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/list">
          <CoffeeList />
        </Route>
        <Route path="/coffee/:id">
          <CoffeeDetails />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
        <Route exact path="/">
          <Redirect to="/list" />
        </Route>
      </Switch>
    </UserProvider>
  );
}
