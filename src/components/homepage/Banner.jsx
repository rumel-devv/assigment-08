"use client";
import React from "react";
import Link from "next/link";
import { BsBrowserEdge } from "react-icons/bs";

const BannerPage = () => {
  return (
    <section className="w-full bg-linear-to-l from-blue-100 via-white to-blue-100 overflow-hidden">

      <div className="w-full md:w-10/12 mx-auto px-4 py-16 md:py-24">

        <div className="flex flex-col items-center text-center gap-6">


          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight 
          animate__animated animate__flipInX">
            Discover Your Perfect Aesthetic
          </h1>


          <p className="text-gray-500 max-w-xl text-lg 
          animate__animated animate__fadeInTopRight  ">
            Explore premium tiles designed to transform your space with elegance and durability.
          </p>

          <Link href="/all-tiles">
            <button className="px-6 py-2.5 bg-blue-600 flex gap-2 items-center text-white rounded-lg 
            hover:bg-blue-700 transition shadow-sm 
              animate__animated animate__fadeInLeft ">
                <span><BsBrowserEdge/></span>
              Browse Now
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default BannerPage;