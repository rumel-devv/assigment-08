import { TilesData } from "@/lib/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TileDetailsPage = async ({ params }) => {
  const tiles = await TilesData();
  const { id } = await params;

  const tile = tiles.find((t) => t.id === id);

  return (
    <div className="w-full md:w-10/12 mx-auto px-4 py-10">

      {/* Back */}
      <Link href="/all-tiles">
        <p className="text-blue-600 mb-6 hover:underline">
          ← Back to Tiles
        </p>
      </Link>

      {/* Main Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white border rounded-2xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">

        {/* Image Section */}
        <div className="relative group">
          <Image
            src={tile.image}
            alt={tile.title}
            width={700}
            height={700}
            className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay Badge */}
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full capitalize shadow-md">
            {tile.category}
          </span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center gap-5 p-6">

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 leading-tight">
            {tile.title}
          </h1>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed">
            {tile.description}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 text-sm">

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-400">Material</p>
              <p className="font-medium text-gray-700">{tile.material}</p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-400">Dimensions</p>
              <p className="font-medium text-gray-700">{tile.dimensions}</p>
            </div>

          </div>

          {/* Price */}
          <div className="flex items-end gap-2 mt-2">
            <h2 className="text-3xl font-bold text-blue-600">
              ${tile.price}
            </h2>
            <span className="text-sm text-gray-400">
              {tile.currency}
            </span>
          </div>

          {/* Button */}
          <button className="mt-3 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md animate__animated animate__pulse">
            Buy Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;