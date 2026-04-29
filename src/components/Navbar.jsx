"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Tiles", href: "/all-tiles" },
  { name: "Profile", href: "/profile" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full md:w-10/12 mx-auto py-3 px-2 relative">
      <div className="flex justify-between items-center">
        <div className="flex  items-center gap-2 ">
          <Link href="/" className="text-blue-700 text-2xl font-bold">
           TilesGallery
          </Link>
        </div>
        <ul className="hidden md:flex gap-6 text-md font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? "bg-blue-700 border-b-2 text-white py-1 px-3 rounded-md"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/login">
            <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`md:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 ${
          open ? "top-full opacity-100" : "-top-75 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`transition ${
                  pathname === link.href
                    ? "text-blue-700"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <Link href="/login" onClick={() => setOpen(false)}>
            <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
