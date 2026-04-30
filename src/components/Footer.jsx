
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 ">
      <div className="w-full md:w-10/12 mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-700">TilesGallery</h2>
          <p className="text-sm text-gray-600 mt-3">
            Premium tiles collection for your dream home. Quality, style, and durability in one place.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/" className="hover:text-purple-600">Home</Link></li>
            <li><Link href="/all-tiles" className="hover:text-blue-600">All Tiles</Link></li>
            <li><Link href="/profile" className="hover:text-blue-600">Profile</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Contact Us</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Email: support@tilesmart.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Sylhet, Bangladesh</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-600">Follow Us</h3>
          <div className="flex gap-3">
            <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-blue-600 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-blue-600 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-blue-600 hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} TilesMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;