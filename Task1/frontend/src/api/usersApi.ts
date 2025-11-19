import type { User } from "../types/user";

const BASE_URL = "http://localhost:3000";

interface UsersResponse {
  data: User[];
  success: boolean;
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch(BASE_URL);
  const json: UsersResponse = await response.json();
  return json.data; 
}

export async function searchUsers(term: string): Promise<User[]> {
  const response = await fetch(`${BASE_URL}?term=${encodeURIComponent(term)}`);
  const json: UsersResponse = await response.json();
  return json.data; 
}
