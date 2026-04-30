"use client";

import { UpdateProfile } from "@/components/homepage/UpdateModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { FaUserEdit } from "react-icons/fa";
import { FiMail, FiUser, FiCalendar, FiLogOut } from "react-icons/fi";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6 md:p-10">
     
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24">
            <Avatar.Image src={user?.image} referrerPolicy="no-referrer" />
            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
          </Avatar>

          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            {user?.name}
          </h1>

          <p className="text-gray-500 text-sm">{user?.email}</p>
        </div>

        <div className="mt-8 grid gap-4">
          
          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">
            <FiUser className="text-blue-600 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{user?.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">
            <FiMail className="text-blue-600 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user?.email }</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">
            <FiCalendar className="text-blue-600 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="font-medium">2026</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3 justify-center">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
          >
            <FiLogOut />
            Logout
          </button>
           <UpdateProfile/>
          {/* <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
          >
            <FaUserEdit/>
            Edit profile
          </button> */}

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;