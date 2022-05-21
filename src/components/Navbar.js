import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center fixed top-0 p-3 sm:p-5 bg-white border-b-2 border-accent">
      <Link to="/">
        <div className="text-2xl font-bold mb-4 sm:mb-0">Game Explorer</div>
      </Link>
      <div className="flex justify-evenly sm:justify-end sm:space-x-8 w-full sm:w-0">
        <Link to="/popular-games">
          <div className="font-bold text-gray-500 hover:text-green-900">
            Popular
          </div>
        </Link>
        <Link to="/upcoming-games">
          <div className="font-bold text-gray-500 hover:text-green-900">
            Upcoming
          </div>
        </Link>
        <Link to="/new-games">
          <div className="font-bold text-gray-500 hover:text-green-900">
            New
          </div>
        </Link>
      </div>
    </div>
  );
};
