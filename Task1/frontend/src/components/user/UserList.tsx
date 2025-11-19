import type { User } from "../../types/user";
import { UserCard } from "./UserCard";

interface Props {
  users: User[];
  onUserClick: (user: User) => void;
}

export const UserList = ({ users, onUserClick }: Props) => {
  if (users.length === 0) {
    return <div className="users-page__empty">Ничего не найдено.</div>;
  }

  return (
    <div className="users-list">
      {users.map((u) => (
        <UserCard key={u.id} user={u} onClick={() => onUserClick(u)} />
      ))}
    </div>
  );
};
