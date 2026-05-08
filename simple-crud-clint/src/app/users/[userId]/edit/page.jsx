import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

const UserEditPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);

  const updateUserWrapper = async (formData) => {
    "use server";
    await updateUser(formData, userId);
  };
  return (
    <>
      <h1>User Edit: {user?.name}</h1>
      <div className="w-1/2 mx-auto mt-5">
        <form className="flex flex-col gap-4" action={updateUserWrapper}>
          <TextField
            className="w-full"
            name="name"
            defaultValue={user?.name}
            type="text"
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            name="email"
            defaultValue={user?.email}
            type="email"
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            name="role"
            defaultValue={user?.role}
            type="text"
          >
            <Label>Role</Label>
            <Input placeholder="Enter your role" />
          </TextField>
          <div className="flex gap-2 justify-end">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" slot="close">
              Update User
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserEditPage;
