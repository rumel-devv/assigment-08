import { TilesData } from "@/lib/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TileDetailsPage = async ({ params }) => {
  const tiles = await TilesData();
  const { id } = await params;

  const tile = tiles.find((t) => t.id === id);

  return (
    <div className="w-full md:w-10/12 mx-auto px-4 py-6 md:py-12 animate__animated animate__fadeInDown">
      <Link href="/all-tiles">
        <p className="text-sm text-gray-500 mb-8 hover:text-blue-600 transition">
          ← Back to Home
        </p>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden p-5">

        <div className="relative group rounded-2xl overflow-hidden">
          <Image
            src={tile.image}
            alt={tile.title}
            width={700}
            height={700}
            className="w-full h-70 md:105 object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
          <span className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur text-white text-xs px-4 py-1.5 rounded-full shadow">
            {tile.category}
          </span>
        </div>

        <div className="flex flex-col justify-center gap-3 md:gap-5 p-4">

          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
            {tile.title}
          </h1>
          <p className="text-gray-600 leading-relaxed text-[15px]">
            {tile.description}
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">

            <div className="p-4 bg-gray-50/80 backdrop-blur border rounded-xl hover:shadow-md transition">
              <p className="text-gray-400 text-xs">Material</p>
              <p className="font-semibold text-gray-800">
                {tile.material}
              </p>
            </div>

            <div className="p-4 bg-gray-50/80 backdrop-blur border rounded-xl hover:shadow-md transition">
              <p className="text-gray-400 text-xs">Dimensions</p>
              <p className="font-semibold text-gray-800">
                {tile.dimensions}
              </p>
            </div>

          </div>

          <div className="flex items-end justify-between mt-2">

            <div>
              <p className="text-xs text-gray-400">Price</p>
              <h2 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">
                ${tile.price}
              </h2>
              <span className="text-sm text-gray-400">
                {tile.currency}
              </span>
            </div>
            <button className="px-8 py-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;