import type { User } from "../../types/user";
import { FiPhone, FiMail } from "react-icons/fi";

interface Props {
  user: User;
  onClick: () => void;
}

export const UserCard = ({ user, onClick }: Props) => {
  return (
    <div className="user-card" onClick={onClick}>
      <div className="user-card__name">{user.name}</div>
      <div className="user-card__contacts">
        <div className="user-card__info">
          <FiPhone className="user-card__icon" />
          <span>{user.phone}</span>
        </div>
        <div className="user-card__info">
          <FiMail className="user-card__icon" />
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};
