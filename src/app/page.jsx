"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useQuery, gql } from '@apollo/client';
import client from '../Api/GQL/Appolo-client';
import { Headline } from "@/Api/GQL/Graphql";
const Homepage = () => {
  const { loading, error, data } = useQuery(Headline, {
    client: client,
  });
  const img = data?.headlines[0].myDPic.url
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return console.log(error);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative align-middle">
          <img src={img} alt="" id="img" fill className="mt-20 object-contain rounded-full border-2 border-gray-200 dark:border-gray-900 h-72" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold">
            Hey! I'm <span className="font-blod text-green-600 hover:text-5xl transition-all">Malik Hamza.</span>  {data?.headlines[0].headlineTop}
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          {data?.headlines[0].headlineMid}
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-8">
            <button className="p-4 rounded-full ring-1 hover:scale-125 transition-all ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-full ring-1 ring-black hover:scale-125 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
