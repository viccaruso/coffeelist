import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ViewCoffees from './views/Coffee/ViewCoffees';
import ViewAddCoffee from './views/Coffee/ViewAddCoffee';
import ViewCoffeeDetail from './views/Coffee/ViewCoffeeDetail';
import { CoffeeProvider } from './context/CoffeeContext';

export default function App() {
  return (
    <UserProvider>
      <CoffeeProvider>
        <Switch>
          <PrivateRoute path="/list">
            <ViewCoffees />
          </PrivateRoute>
          <Route path="/coffee/add">
            <ViewAddCoffee />
          </Route>
          <Route path="/coffee/:id">
            <ViewCoffeeDetail />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route exact path="/">
            <Redirect to="/list" />
          </Route>
        </Switch>
      </CoffeeProvider>
    </UserProvider>
  );
}
