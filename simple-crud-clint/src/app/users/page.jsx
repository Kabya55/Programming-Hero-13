import UsageData from "@/component/UsageData";
import { getUsers } from "../lib/data";
import { createUser, deleteUser } from "../lib/actions";
import AddUserModal from "@/component/AddUserModal";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <div>
      <div className="flex justify-between mt-4 mb-4">
        <p>Total Users: {users.length}</p>
        <AddUserModal createUserAction={createUser} />
      </div>
      <UsageData users={users} deleteUserAction={deleteUser} />
    </div>
  );
};

export default UsersPage;
