import React from "react";
import Link from "next/link";
import Image from "next/image";

const TilesCard = ({ tile }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">

      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={tile.image}
          alt={tile.title}
          width={500}
          height={500}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">

        {/* Title + Category (UNDER title flex row) */}
        <div className="flex items-center justify-between">

          <h1 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
            {tile.title}
          </h1>

          <span className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full capitalize">
            {tile.category}
          </span>

        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {tile.description}
        </p>

        {/* Price + Dimensions */}
        <div className="flex items-center justify-between mt-2">

          <p className="text-blue-600 font-bold text-lg">
            ${tile.price} <span className="text-xs text-gray-400">USD</span>
          </p>

          <p className="text-xs text-gray-500">
            {tile.dimensions}
          </p>

        </div>

        {/* Button */}
        <Link href={`/all-tiles/${tile.id}`}>
          <button className="mt-3 w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md group-hover:shadow-blue-200">
            View Details
          </button>
        </Link>

      </div>
    </div>
  );
};

export default TilesCard;