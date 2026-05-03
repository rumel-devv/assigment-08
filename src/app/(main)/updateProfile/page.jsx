'use client'

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaUserEdit } from "react-icons/fa";

const UpdateProfilePage = () => {

    const router = useRouter()

  const handleEdit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    router.push('/profile')
    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Surface className="w-full max-w-md p-6 rounded-2xl shadow-lg">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
            <FaUserEdit />
          </div>
          <h2 className="text-xl font-semibold">Update Your Profile</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleEdit} className="flex flex-col gap-4">
          
          <TextField name="name">
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>

          <TextField name="image">
            <Label>Image URL</Label>
            <Input placeholder="Enter your image URL" />
          </TextField>

          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
            Save Changes
          </Button>
        </form>
      </Surface>
    </div>
  );
};

export default UpdateProfilePage;