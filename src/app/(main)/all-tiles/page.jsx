import SearchTiles from "@/components/SearchTiles";
import TilesCard from "@/components/TilesCard";
import { TilesData } from "@/lib/data";
import React from "react";

const AllTilesPage = async ({ searchParams }) => {
  const tiles = await TilesData();

  const params = await searchParams;

  const query = params?.q?.toLowerCase() || "";

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(query)
  );

  return (
    <section className="w-full md:w-10/12 mx-auto px-4 py-10">
   <h1 className="mb-6 text-3xl font-bold">
        Explore Our All Tiles Designs
      </h1>
      <SearchTiles />

   

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredTiles.length > 0 ? (
          filteredTiles.map((tile) => (
            <TilesCard key={tile.id} tile={tile} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No tiles found 😢
          </p>
        )}

      </div>
    </section>
  );
};

export default AllTilesPage;