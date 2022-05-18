import { supabase } from './client';

export function getUser() {
  return supabase.auth.user();
}

export async function supabaseSignIn(email, password) {
  const { user, error } = await supabase.auth.signIn(email, password);
  if (error) throw error;
  return user;
}
export async function supabaseSignUp(email, password) {
  const { user, error } = await supabase.auth.signUp(email, password);
  if (error) throw error;
  return user;
}

export async function supabaseSignOut() {
  return await supabase.auth.signOut();
}
