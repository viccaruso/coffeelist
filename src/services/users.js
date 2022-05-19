import { supabase } from './client';

export function getUser() {
  return supabase.auth.user();
}

export async function supabaseSignIn(email, password) {
  console.log('supabaseSignIn');
  console.log('email', email);
  console.log('password', password);
  const obj = await supabase.auth.signIn({ email, password });
  console.log(obj);
  if (error) throw error;
  return user;
}
export async function supabaseSignUp(email, password) {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return user;
}

export async function supabaseSignOut() {
  return await supabase.auth.signOut();
}
