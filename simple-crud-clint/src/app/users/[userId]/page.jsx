import { getUserById } from "@/app/lib/data";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);
  return (
    <div>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default UserDetailsPage;
