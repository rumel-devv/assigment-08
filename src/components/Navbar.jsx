"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Tiles", href: "/all-tiles" },
  { name: "Profile", href: "/profile" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full md:w-10/12 mx-auto py-4 px-2">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={48} height={48} alt="Logo" />
          <Link href="/" className="text-purple-700 text-2xl font-bold">
            TilesMart
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? "text-purple-700 border-b-2 border-purple-700 pb-1"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="space-x-3">
          {/* <Link href="/signup">
            <button className="px-4 py-1.5 border border-purple-600 text-black rounded-lg hover:bg-purple-600 hover:text-white transition">
              SignUp
            </button>
          </Link> */}

          <Link href="/login">
            <button className="px-4 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Login
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;