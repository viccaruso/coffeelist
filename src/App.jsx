import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ViewCoffees from './views/Coffee/ViewCoffees';
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
            <p>ViewAddForm here</p>
          </Route>
          <Route path="/coffee/:id">
            <p>/coffee detail</p>
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
