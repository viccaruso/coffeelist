import { supabase, parseData } from './client';

export async function getCoffees() {
  const response = await supabase.from('coffee').select();

  return parseData(response);
}

export async function getCoffeeById(id) {
  const response = await supabase
    .from('coffee')
    .select()
    .match({ id })
    .single();
  return parseData(response);
}

export async function createCoffee(coffee) {
  const response = await supabase.from('coffee').insert(coffee).single();

  return parseData(response);
}
