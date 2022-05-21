import { useContext, useEffect, useState } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';
import { getCoffees, getCoffeeById, createCoffee } from '../services/coffees';

export function useCoffees() {
  const context = useContext(CoffeeContext);

  if (context === undefined) {
    throw new Error('useCoffees must be used within a CoffeeContext.Provider');
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

  async function handleAddCoffee(coffee) {
    const payload = await createCoffee(coffee);
    dispatch({ type: 'ADD', payload });
  }

  return { coffees, handleAddCoffee };
}

export function useCoffee(id) {
  const [coffee, setCoffee] = useState({});

  useEffect(() => {
    const loadCoffee = async () => {
      const response = await getCoffeeById(id);
      setCoffee(response);
    };
    loadCoffee();
  }, []);

  return { coffee };
}
