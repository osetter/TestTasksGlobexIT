import { useState, useEffect, useRef } from "react";
import type { User } from "../types/user";
import { getUsers, searchUsers } from "../api/usersApi";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const isFirstLoadRef = useRef(true);

  useEffect(() => {
    if (isFirstLoadRef.current) {
      isFirstLoadRef.current = false;
      return;
    }

    const timeoutId = window.setTimeout(async () => {
      setLoading(true);

      if (search.trim() === "") {
        const data = await getUsers();
        setUsers(data);
      } else {
        const data = await searchUsers(search);
        setUsers(data);
      }

      setLoading(false);
    }, 300); // 300 мс debounce

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [search]);

  return {
    users,
    search,
    setSearch,        
    selectedUser,
    loading,
    setSelectedUser,
  };
}
