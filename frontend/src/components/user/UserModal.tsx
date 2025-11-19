import type { User } from "../../types/user";

interface Props {
  user: User;
}

export const UserModal = ({ user }: Props) => {
  return (
    <div className="user-modal">
      <div className="user-modal__header">
        <h2 className="user-modal__title">{user.name}</h2>
      </div>

      <div className="user-modal__info">
        <div className="user-modal__info-item">
          <div className="user-modal__info-label-item">Телефон:</div>
          <div className="user-modal__info-value-item">{user.phone}</div>
        </div>
        <div className="user-modal__info-item">
          <div className="user-modal__info-label-item">Почта:</div>
          <div className="user-modal__info-value-item">{user.email}</div>
        </div>
        <div className="user-modal__info-item">
          <div className="user-modal__info-label-item">Дата приема:</div>
          <div className="user-modal__info-value-item">{user.hire_date}</div>
        </div>
        <div className="user-modal__info-item">
          <div className="user-modal__info-label-item">Должность:</div>
          <div className="user-modal__info-value-item">{user.position_name}</div>
        </div>
        <div className="user-modal__info-item">
          <div className="user-modal__info-label-item">Подразделение:</div>
          <div className="user-modal__info-value-item">{user.department}</div>
        </div>
      </div>

      <div className="user-modal__additional">
        <div className="user-modal__additional-title">Дополнительная информация:</div>
        <div className="user-modal__additional-text">
          Разработчики используют текст в качестве заполнителя макета страницы. Разработчики используют текст в качестве заполнителя макета страницы.
        </div>
      </div>
    </div>
  );
};
