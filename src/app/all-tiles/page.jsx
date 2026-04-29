import TilesCard from '@/components/TilesCard';
import { TilesData } from '@/lib/data';
import React from 'react';

const AllTilesPage = async () => {
    const tiles = await TilesData();
    return (
         <section className="w-full md:w-10/12 mx-auto px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Explore Our Latest Tile Designs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((tile) => (
          <TilesCard key={tile.id} tile={tile} />
        ))}
      </div>

    </section>
    );
};

export default AllTilesPage;