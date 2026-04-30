
import Marquee from "react-fast-marquee";
import "animate.css";
import { FaStar, FaFire, FaLeaf, FaGem, FaHome, FaCubes } from "react-icons/fa";

const TileMarquee = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto border-y bg-white py-6 my-4 text-lg ">
      <Marquee
        speed={45}
        pauseOnHover={true}
        pauseOnClick={true} 
        gradient={false}
      >
        <span className="mx-6 flex items-center gap-2 text-gray-700 font-semibold animate__animated animate__fadeInRight">
          <FaFire className="text-blue-600 " />
          New Arrivals: Ceramic Blue Tile
        </span>

        <span className="mx-6 flex items-center gap-2 text-gray-700 font-semibold animate__animated animate__fadeInRight">
          <FaStar className="text-blue-600" />
          Weekly Feature: Modern Geometric Patterns
        </span>

        <span className="mx-6 flex items-center gap-2 text-gray-700 font-semibold animate__animated animate__fadeInRight">
          <FaHome className="text-blue-600" />
          Marble White Luxury Tile Collection
        </span>

        <span className="mx-6 flex items-center gap-2 text-gray-700 font-semibold animate__animated animate__fadeInRight">
          <FaGem className="text-blue-600" />
          Premium Granite Black Finish Tiles
        </span>

        <span className="mx-6 flex items-center gap-2 text-gray-700 font-semibold animate__animated animate__fadeInRight">
          <FaLeaf className="text-blue-600" />
          Natural Wooden Texture Tiles
        </span>

        <span className="mx-6 flex items-center gap-2 text-gray-700 font-semibold animate__animated animate__fadeInRight">
          <FaCubes className="text-blue-600" />
          Outdoor Stone & Brick Collection
        </span>
      </Marquee>
    </div>
  );
};

export default TileMarquee;
