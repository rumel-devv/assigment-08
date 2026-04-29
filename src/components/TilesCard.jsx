
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TilesCard = ({ tile }) => {
  console.log(tile);
  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden animate__animated animate__fadeInUp">

      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={tile.image}
          alt={tile.title}
          width={300}
          height={300}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">

        {/* Title */}
        <h1 className="text-lg font-semibold text-gray-800">
          {tile.title}
        </h1>

        {/* Category */}
        <p className="text-sm text-gray-500">
          {tile.category}
        </p>

        {/* Price */}
        <p className="text-blue-600 font-bold">
          ${tile.price}
        </p>

        {/* Button */}
        <Link href={`/tile/${tile.id}`}>
          <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 animate__animated animate__pulse">
            View Details
          </button>
        </Link>

      </div>
    </div>
  );
};

export default TilesCard;