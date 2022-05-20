import React from 'react';
import { Link } from 'react-router-dom';

export const GameCard = ({ name, img, release_date, slug }) => {
  return (
    <Link to={`/${slug}`}>
      <div className="min-h-[40vh] m-5 text-gray-900 shadow-gray-300 shadow-lg rounded-md cursor-pointer">
        <img
          src={img}
          alt={name}
          className="h-[25vh] w-full bg-no-repeat bg-cover rounded-t-md"
        />
        <div className="flex flex-col justify-center items-center text-center m-5 mt-8">
          <div className="text-xl font-bold">{name}</div>
          <div className="text-lg">{release_date}</div>
        </div>
      </div>
    </Link>
  );
};
