import "../styles/report.css";

import { useUsers } from "../hooks/useUsers";
import { SearchInput } from "../components/ui/SearchInput";
import { UserList } from "../components/user/UserList";
import { Modal } from "../components/ui/Modal";
import { UserModal } from "../components/user/UserModal";

export const UsersReportPage = () => {
  const {
    users,
    search,
    setSearch,
    selectedUser,
    loading,
    setSelectedUser,
  } = useUsers();

  return (
    <div className="users-page">
      <SearchInput value={search} onChange={setSearch} />

      {loading ? (
        <div className="users-page__loading">Загрузка...</div>
      ) : (
        <UserList users={users} onUserClick={setSelectedUser} />
      )}

      <Modal
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      >
        {selectedUser && <UserModal user={selectedUser} />}
      </Modal>
    </div>
  );
};
