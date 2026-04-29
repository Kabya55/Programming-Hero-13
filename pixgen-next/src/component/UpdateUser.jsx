"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Person } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function UpdateUserModal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const image = formData.get("picture");

    const { data, error } = await authClient.updateUser({
      name: name?.toString(),
      image: image?.toString(),
    });

    if (error) {
      console.log(error);
      alert(error.message);
      return;
    }

    alert("Profile updated successfully");
  };

  // ✅ Hydration FIX (VERY IMPORTANT)
  if (!mounted) return null;

  return (
    <Modal>
      <Button variant="secondary">Edit Profile</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Person className="size-5" />
              </Modal.Icon>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <TextField className="w-full" name="name">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  {/* Picture */}
                  <TextField className="w-full" name="picture">
                    <Label>Picture URL</Label>
                    <Input placeholder="Enter image URL" />
                  </TextField>

                  {/* Footer */}
                  <div className="flex justify-end gap-2 mt-4">
                    <Button type="submit" variant="secondary">
                      Save
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
