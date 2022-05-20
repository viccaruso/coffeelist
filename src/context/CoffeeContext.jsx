import { createContext, useReducer } from 'react';

export const CoffeeContext = createContext();

function reducer(coffees, { type, payload }) {
  switch (type) {
    case 'RESET':
      return payload;
    default:
      throw Error(`${type} is not a valid action`);
  }
}

export const CoffeeProvider = ({ children }) => {
  const [coffees, dispatch] = useReducer(reducer);
  return (
    <CoffeeContext.Provider value={{ coffees, dispatch }}>
      {children}
    </CoffeeContext.Provider>
  );
};
