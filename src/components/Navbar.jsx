"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiLogIn, FiMenu, FiX, FiHome, FiUser } from "react-icons/fi";
import { FaThLarge } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { CiLogout } from "react-icons/ci";

const navLinks = [
  { name: "Home", href: "/", icon: <FiHome /> },
  { name: "All Tiles", href: "/all-tiles", icon: <FaThLarge /> },
  { name: "Profile", href: "/profile", icon: <FiUser /> },
];

const Navbar = () => {
   const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push('/')
    router.refresh();
    setOpen(false);
  };

  return (
    <nav className="w-full shadow-xs md:w-10/12 mx-auto  px-2 relative z-50 bg-white/80 backdrop-blur-md py-5">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-blue-700 text-2xl font-bold">
          TilesGallery
        </Link>

        <ul className="hidden md:flex gap-6 text-md font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition flex items-center gap-2 ${
                  pathname === link.href
                    ? "bg-blue-700 text-white py-1 px-3 rounded-md"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {!user ? (
          <div className="hidden md:block">
            <Link href="/login">
              <button className="px-4 py-1.5 bg-blue-600 flex gap-1.5 items-center text-white rounded-lg hover:bg-blue-700 transition">
                <FiLogIn />
                Login
              </button>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex gap-3  items-center">
              <Link href='/profile'>
              <Avatar className="border-2  border-blue-400 rounded-full w-10 h-10">
                <Avatar.Image
                  alt="user"
                  src={user?.image}
                  width={100}
                  height={100}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name}</Avatar.Fallback>
              </Avatar>
             </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-1.5 bg-blue-600 flex gap-1.5 items-center text-white rounded-lg hover:bg-blue-700 transition"
            >
              <CiLogout />
              Logout
            </button>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl z-50"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`md:hidden fixed left-0 top-16 w-full bg-white shadow-xl border-t transition-all duration-300 z-40 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full text-center">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-center gap-2 py-2 w-full transition ${
                  pathname === link.href
                    ? "bg-blue-700 text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}

          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              <button className="px-6 py-2 flex gap-1.5 items-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <FiLogIn />
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={handleSignOut}
              className="px-6 py-2 flex gap-1.5 items-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <CiLogout />
              Logout
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
