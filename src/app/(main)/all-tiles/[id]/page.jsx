import { TilesData } from "@/lib/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const TileDetailsPage = async ({ params }) => {
  const tiles = await TilesData();
  const { id } = await params;

  const tile = tiles.find((t) => t.id === id);

  if (!tile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="w-full md:w-10/12 mx-auto px-4 py-6 md:py-12 animate__animated  animate__slideInDown">

      {/* BACK */}
      <Link href="/all-tiles">
        <p className="text-sm text-gray-500 mb-8 hover:text-blue-600 transition">
          ← Back to products
        </p>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden p-5">


        <div className="relative group rounded-2xl overflow-hidden">

          <Image
            src={tile.image}
            alt={tile.title}
            width={500}
            height={500}
            className="w-full h-[320px] md:h-[520px] object-cover group-hover:scale-105 transition duration-500"
          />


          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow capitalize">
              {tile.category}
            </span>

            <span
              className={`text-xs px-3 py-1 rounded-full text-white shadow ${
                tile.inStock ? "bg-green-600" : "bg-red-500"
              }`}
            >
              {tile.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

        </div>


        <div className="flex flex-col gap-5 p-2 md:p-4">

        
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            {tile.title}
          </h1>

          <div className="flex items-center gap-3">

            <div className="flex text-yellow-500 text-lg">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < Math.floor(tile.rating)
                      ? "text-gray-300"
                      : "text-yellow-500"
                  }
                />
              ))}
            </div>

            <span className="text-sm font-semibold text-gary-700">
              {tile.rating} 
            </span>

          </div>

        
          <p className="text-gray-600  text-[15px]">
            {tile.description}
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 gap-4 text-sm">

            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="text-gray-400 text-xs">Material</p>
              <p className="font-semibold text-blue-700">
                {tile.material}
              </p>
            </div>

            <div className="p-4 bg-gray-50 border rounded-xl">
              <p className="text-gray-400 text-xs">Dimensions</p>
              <p className="font-semibold">{tile.dimensions}</p>
            </div>

            <div className="p-4 bg-gray-50 border rounded-xl">
              <p className="text-gray-400 text-xs">Category</p>
              <p className="font-semibold capitalize">{tile.category}</p>
            </div>

            <div className="p-4 bg-gray-50 border rounded-xl">
              <p className="text-gray-400 text-xs">Availability</p>
              <p
                className={`font-semibold ${
                  tile.inStock ? "text-green-600" : "text-red-500"
                }`}
              >
                {tile.inStock ? "Available" : "Sold Out"}
              </p>
            </div>

          </div>

          {/* PRICE + CTA */}
          <div className="flex items-center justify-between mt-3">

            <div>
              <p className="text-xs text-gray-400">Price</p>
              <h2 className="text-4xl font-bold text-blue-600">
                ${tile.price}
              </h2>
              <span className="text-sm text-gray-400">
                {tile.currency}
              </span>
            </div>

            <button
              disabled={!tile.inStock}
              className={`px-8 py-3 rounded-xl text-white shadow-lg transition-all ${
                tile.inStock
                  ? "bg-blue-600 hover:bg-blue-700 hover:scale-105 cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {tile.inStock ? "Buy Now" : "Unavailable"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TileDetailsPage;