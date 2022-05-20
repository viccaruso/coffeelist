import { useContext, useEffect } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';
import { getCoffees } from '../services/coffees';

export function useCoffee() {
  const context = useContext(CoffeeContext);

  if (context === undefined) {
    throw new Error('useCoffee must be used within a CoffeeContext.Provider');
  }

  const { coffees, dispatch } = context;

  useEffect(() => {
    if (coffees) return;
    const loadCoffees = async () => {
      const payload = await getCoffees();
      dispatch({ type: 'RESET', payload });
    };
    loadCoffees();
  }, []);

  return { coffees };
}
