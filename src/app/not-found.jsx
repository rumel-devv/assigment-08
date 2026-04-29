"use client";

import Link from "next/link";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white px-4">

      <div className="text-center max-w-md animate__animated animate__fadeInUp">

        {/* 404 Number */}
        <h1 className="text-7xl md:text-8xl font-bold text-blue-600">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            <FiArrowLeft />
            Go Back
          </button>

          <Link href="/">
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <FiHome />
              Home
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}