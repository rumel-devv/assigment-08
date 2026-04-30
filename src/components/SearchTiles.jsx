"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const SearchTiles = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchInp, setSearchInp] = useState(
    searchParams.get("q") || ""
  );

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (searchInp) {
      params.set("q", searchInp);
    } else {
      params.delete("q");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full md:w-6/12 mx-auto flex-col sm:flex-row gap-3 mb-6"
    >
      <input
        type="text"
        value={searchInp}
        onChange={(e) => setSearchInp(e.target.value)}
        placeholder="Search tiles..."
        className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition"
      >
        <FaSearch />
        Search
      </button>
    </form>
  );
};

export default SearchTiles;